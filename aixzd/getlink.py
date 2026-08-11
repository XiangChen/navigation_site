import csv
import os
import random
import re
import time
from urllib.parse import urlparse

from selenium import webdriver
from selenium.common.exceptions import TimeoutException, WebDriverException
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


# ============================================================
# 配置
# ============================================================

CATEGORY_URL = "https://aixzd.com/category/study"

OUTPUT_CSV = "AI学习平台.csv"

WAIT_TIME = 15

MIN_SLEEP = 0.8
MAX_SLEEP = 1.5


# ============================================================
# 创建 Selenium
# ============================================================

def create_driver():
    options = Options()

    # ========================================================
    # 无头模式：不会弹出 Chrome 窗口
    # ========================================================
    options.add_argument("--headless=new")

    options.add_argument("--window-size=1920,1080")

    options.add_argument(
        "--user-agent=Mozilla/5.0 "
        "(Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 "
        "(KHTML, like Gecko) "
        "Chrome/150.0.0.0 Safari/537.36"
    )

    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")

    # 减少 Selenium 特征
    options.add_experimental_option(
        "excludeSwitches",
        ["enable-automation"]
    )

    options.add_experimental_option(
        "useAutomationExtension",
        False
    )

    driver = webdriver.Chrome(
        options=options
    )

    driver.execute_script(
        "Object.defineProperty(navigator, 'webdriver', "
        "{get: () => undefined})"
    )

    return driver


# ============================================================
# 判断是不是产品详情页
# ============================================================

def is_product_url(url):
    if not url:
        return False

    parsed = urlparse(url)

    # 只接受 aixzd.com
    if parsed.netloc not in [
        "aixzd.com",
        "www.aixzd.com"
    ]:
        return False

    path = parsed.path.rstrip("/")

    if not path:
        return False

    # 排除这些页面
    exclude = [
        "/category/",
        "/tag/",
        "/page/",
        "/author/",
        "/search/"
    ]

    for item in exclude:
        if item in path + "/":
            return False

    return True


# ============================================================
# 清理产品名称
# ============================================================

def clean_product_name(name):
    if not name:
        return ""

    # 换行变空格
    name = name.replace("\r", " ")
    name = name.replace("\n", " ")

    # 删除状态
    status_words = [
        "运营中",
        "已下线",
        "已停运",
        "停止运营",
        "已停止运营"
    ]

    for word in status_words:
        name = name.replace(word, "")

    # 多个空格压缩
    name = re.sub(
        r"\s+",
        " ",
        name
    )

    return name.strip()


# ============================================================
# 从分类页获取产品详情地址
# ============================================================

def get_products_from_page(driver, page_url):
    print(f"[INFO] 打开：{page_url}")

    try:
        driver.get(page_url)

        WebDriverWait(
            driver,
            WAIT_TIME
        ).until(
            EC.presence_of_element_located(
                (By.CLASS_NAME, "tax-list")
            )
        )

    except TimeoutException:
        print("[WARN] 没找到 tax-list")
        return []

    time.sleep(1)

    try:
        tax_list = driver.find_element(
            By.CLASS_NAME,
            "tax-list"
        )

    except Exception:
        return []

    links = tax_list.find_elements(
        By.CSS_SELECTOR,
        "a[href]"
    )

    products = []

    seen = set()

    for a in links:
        try:
            href = a.get_attribute("href")

            if not href:
                continue

            # 去掉锚点
            href = href.split("#")[0]

            if not is_product_url(href):
                continue

            if href in seen:
                continue

            seen.add(href)
            products.append(href)

        except Exception:
            continue

    return products


# ============================================================
# 自动翻全部分类页
# ============================================================

def get_all_products(driver):
    all_products = []

    all_seen = set()

    page = 1

    while True:

        if page == 1:
            page_url = CATEGORY_URL
        else:
            page_url = (
                f"{CATEGORY_URL}/page/{page}"
            )

        print()
        print("=" * 60)
        print(f"[INFO] 正在扫描第 {page} 页")
        print(f"[INFO] {page_url}")
        print("=" * 60)

        products = get_products_from_page(
            driver,
            page_url
        )

        if not products:
            print(
                f"[INFO] 第 {page} 页没有产品，停止翻页"
            )
            break

        new_products = []

        for url in products:

            if url not in all_seen:
                all_seen.add(url)
                all_products.append(url)
                new_products.append(url)

        print(
            f"[INFO] 本页产品：{len(products)}"
        )

        print(
            f"[INFO] 本页新增：{len(new_products)}"
        )

        print(
            f"[INFO] 当前累计：{len(all_products)}"
        )

        # 防止网站最后一页之后又返回重复内容
        if not new_products:
            print(
                "[INFO] 当前页全部是重复产品，停止翻页"
            )
            break

        page += 1

        time.sleep(
            random.uniform(
                MIN_SLEEP,
                MAX_SLEEP
            )
        )

    return all_products


# ============================================================
# 获取产品名称
# ============================================================

def get_product_name(driver):
    selectors = [
        "h1",
        ".single-title",
        ".post-title"
    ]

    for selector in selectors:

        try:
            elements = driver.find_elements(
                By.CSS_SELECTOR,
                selector
            )

            for element in elements:
                name = element.text.strip()

                if name:
                    return clean_product_name(
                        name
                    )

        except Exception:
            pass

    # 最后使用网页 title
    try:
        title = driver.title

        title = clean_product_name(
            title
        )

        # 去掉网站自己的后缀
        title = re.sub(
            r"\s*[-_|]\s*AI星球岛.*$",
            "",
            title
        )

        return title.strip()

    except Exception:
        return ""


# ============================================================
# 获取“打开网站”按钮的中转地址
# ============================================================

def get_middle_url(driver):
    """
    不点击最终官网。

    只从产品详情页拿：

    <a href="https://link.aixzd.com/?redirect=..."
       class="btn a-link btn-bg-trans">

    的 href。
    """

    # 优先使用 class
    try:
        buttons = driver.find_elements(
            By.CSS_SELECTOR,
            "a.a-link.btn-bg-trans[href]"
        )

        for button in buttons:

            href = button.get_attribute(
                "href"
            )

            text = button.text.strip()

            if (
                href
                and "link.aixzd.com" in href
            ):
                return href

            if (
                href
                and "打开网站" in text
            ):
                return href

    except Exception:
        pass

    # 备用：根据文字寻找
    try:
        buttons = driver.find_elements(
            By.XPATH,
            "//a[contains(., '打开网站')]"
        )

        for button in buttons:

            href = button.get_attribute(
                "href"
            )

            if href:
                return href

    except Exception:
        pass

    return ""


# ============================================================
# 中转页读取最终产品链接
# ============================================================

def get_real_url(driver, middle_url):
    """
    这里只访问 link.aixzd.com。

    不会进入真正的产品官网。

    例如：

    middle_url:
    https://link.aixzd.com/?redirect=...

                 ↓

    <input
        id="url"
        value="https://588ku.com/ai/wuxianhua/"
    >

                 ↓

    返回：
    https://588ku.com/ai/wuxianhua/
    """

    try:
        driver.get(middle_url)

        url_input = WebDriverWait(
            driver,
            WAIT_TIME
        ).until(
            EC.presence_of_element_located(
                (By.ID, "url")
            )
        )

        real_url = url_input.get_attribute(
            "value"
        )

        if real_url:
            return real_url.strip()

    except TimeoutException:
        print(
            "    [WARN] 中转页没有找到 input#url"
        )

    except Exception as e:
        print(
            f"    [WARN] 中转页读取失败：{e}"
        )

    return ""


# ============================================================
# 获取一个产品
# ============================================================

def get_product_info(
        driver,
        detail_url
):
    driver.get(detail_url)

    # 等详情页主体加载
    try:
        WebDriverWait(
            driver,
            WAIT_TIME
        ).until(
            EC.presence_of_element_located(
                (By.TAG_NAME, "body")
            )
        )
    except TimeoutException:
        pass

    time.sleep(
        random.uniform(
            MIN_SLEEP,
            MAX_SLEEP
        )
    )

    # 产品名称
    product_name = get_product_name(
        driver
    )

    # 找打开网站按钮
    middle_url = get_middle_url(
        driver
    )

    if not middle_url:

        print(
            "    [WARN] 找不到【打开网站】按钮"
        )

        return product_name, ""

    # 中转页获取真正地址
    real_url = get_real_url(
        driver,
        middle_url
    )

    return product_name, real_url


# ============================================================
# CSV
# ============================================================

def init_csv():
    with open(
        OUTPUT_CSV,
        "w",
        newline="",
        encoding="utf-8-sig"
    ) as f:

        writer = csv.writer(f)

        writer.writerow([
            "产品名称",
            "产品链接"
        ])


def save_product(
        product_name,
        real_url
):
    with open(
        OUTPUT_CSV,
        "a",
        newline="",
        encoding="utf-8-sig"
    ) as f:

        writer = csv.writer(f)

        writer.writerow([
            product_name,
            real_url
        ])


# ============================================================
# 主程序
# ============================================================

def main():
    print("=" * 60)
    print("AIXZD AI绘画产品官网链接爬虫")
    print("=" * 60)

    driver = None

    try:
        print("[INFO] 正在启动后台 Chrome...")

        driver = create_driver()

        print("[INFO] Chrome 已启动，无界面模式")
        print()

        # ====================================================
        # 第一步：扫描全部分页
        # ====================================================

        products = get_all_products(
            driver
        )

        if not products:
            print(
                "[ERROR] 没有找到任何产品"
            )
            return

        print()
        print("=" * 60)
        print(
            f"[INFO] 分类扫描结束，共发现 "
            f"{len(products)} 个产品"
        )
        print("=" * 60)

        # ====================================================
        # 初始化 CSV
        # ====================================================

        init_csv()

        success_count = 0

        total = len(products)

        # ====================================================
        # 第二步：逐个处理产品
        # ====================================================

        for index, detail_url in enumerate(
            products,
            start=1
        ):

            print()
            print("=" * 60)
            print(
                f"[{index}/{total}] "
                f"{detail_url}"
            )
            print("=" * 60)

            try:

                product_name, real_url = (
                    get_product_info(
                        driver,
                        detail_url
                    )
                )

                print(
                    f"    产品名称：{product_name}"
                )

                print(
                    f"    产品链接：{real_url}"
                )

                # 每处理一个马上保存
                save_product(
                    product_name,
                    real_url
                )

                if real_url:
                    success_count += 1

            except Exception as e:

                print(
                    f"    [ERROR] 产品处理失败：{e}"
                )

                save_product(
                    "",
                    ""
                )

            time.sleep(
                random.uniform(
                    MIN_SLEEP,
                    MAX_SLEEP
                )
            )

        # ====================================================
        # 完成
        # ====================================================

        print()
        print("=" * 60)
        print("全部爬取完成")
        print("=" * 60)

        print(
            f"产品总数：{total}"
        )

        print(
            f"成功获得链接：{success_count}"
        )

        print(
            f"失败：{total - success_count}"
        )

        print(
            f"CSV：{os.path.abspath(OUTPUT_CSV)}"
        )

    except WebDriverException as e:

        print(
            f"[ERROR] Selenium 启动失败：{e}"
        )

    finally:

        if driver:
            driver.quit()


if __name__ == "__main__":
    main()