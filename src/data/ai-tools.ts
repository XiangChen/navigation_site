export interface Product {
  rank: number;
  name: string;
  slogan: string;
  grade: string;
  totalScore: number;
  tags: string;
  description: string;
  monthlyTraffic: string;
  iconUrl: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'writing',
    name: 'AI写作工具',
    nameEn: 'WRITING',
    description: 'Enhance your copy, fit grammar, and generate creative content with expert AI writers.',
    products: [
      { rank: 1, name: '秘塔写作猫', slogan: '错字语法一扫光！写作省心更流畅', grade: 's级', totalScore: 675, tags: 'AI写作,AI文本改写', description: '秘塔写作猫是一款由国内团队开发的AI智能写作助手，专注于提升用户的写作效率与文本质量。', monthlyTraffic: '118.67K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-xiezuocat.webp' },
      { rank: 2, name: 'GPTZero', slogan: '多语种识别，全球无盲点', grade: 'a级', totalScore: 668, tags: 'AI写作', description: 'GPTZero在AI文本检测领域稳坐领头羊，准确率高达99%。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-GPTZero.webp' },
      { rank: 3, name: '百度文库', slogan: '海量文档，精准智能推荐', grade: 'a级', totalScore: 668, tags: 'AI写作,职场公文', description: '百度文库是百度于2009年推出的中文文档分享与知识管理平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-wenkubaidu.webp' },
      { rank: 4, name: '笔墨写作', slogan: '你的AI笔杆子，总结汇报不愁', grade: 'a级', totalScore: 668, tags: 'AI写作', description: '深度聚焦于中文办公和学习场景的AI写作助手。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-bimoxiezuo.webp' },
      { rank: 5, name: 'Gerwin AI', slogan: '你的专属俄语AI文案官', grade: 'a级', totalScore: 668, tags: '创意写作', description: '为聚焦俄语市场的企业和创作者提供动力的内容创作引擎。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Gerwin-AI.webp' },
      { rank: 6, name: 'ReadPo', slogan: '百家资讯，一键汇集成文', grade: 'a级', totalScore: 668, tags: 'AI写作', description: '将"主题阅读法"融入AI写作的智能平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-ReadPo.webp' },
      { rank: 7, name: '文赋Ai论文', slogan: '10分钟搞定论文初稿', grade: 'a级', totalScore: 668, tags: 'AI学术论文', description: '专注于学术写作领域的智能平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-wenfuai.webp' },
    ],
  },
  {
    id: 'creative',
    name: 'AI创意工具',
    nameEn: 'CREATIVE',
    description: 'Explore next-level AI generators for professional artists and creative minds.',
    products: [
      { rank: 1, name: 'Superstudio', slogan: 'AI创意，一站全搞定', grade: 'a级', totalScore: 668, tags: 'AI创意灵感', description: '集大成的创意工具平台，为想象力打造无限画布。', monthlyTraffic: '298.75K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Superstudio.webp' },
      { rank: 2, name: '元极AI', slogan: 'AI导演一键成片！商业视觉产出快', grade: 'a级', totalScore: 615, tags: 'AI创意工具', description: '知行元科技出品，主打商业视觉内容创作。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/05/nav-logo-yuanji.webp' },
      { rank: 3, name: 'CatiMind', slogan: '一键驱动AI，创作不设限', grade: 'a级', totalScore: 638, tags: 'AI创意灵感', description: '专为行业应用打造的AI生产力工具。', monthlyTraffic: '9.34K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-CatiMind.webp' },
      { rank: 4, name: 'Quick QR Art', slogan: '一键生成专属AI二维码', grade: 'a级', totalScore: 638, tags: 'AI创意灵感', description: '让二维码会艺术，扫描也能变得有趣。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-QuickQRArt.webp' },
      { rank: 5, name: '海纳星火', slogan: 'AI赋能，让创意轻松变现', grade: 'a级', totalScore: 638, tags: 'AI创意灵感', description: '中国联通倾力打造的庞大内容生态系统。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-unistore10155.webp' },
      { rank: 6, name: 'Extrapolate', slogan: '一键穿越，遇见未来容颜', grade: 'a级', totalScore: 638, tags: 'AI影视特效', description: '借助AI技术预测未来容颜的创意工具。', monthlyTraffic: '4.87K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Extrapolate.webp' },
      { rank: 7, name: 'Hidden Door', slogan: '智能角色扮演，玩转虚拟宇宙', grade: 'a级', totalScore: 638, tags: 'AI创意灵感', description: '将小说、电影转变为互动跑团游戏的AI平台。', monthlyTraffic: '9.31K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-HiddenDoor.webp' },
    ],
  },
  {
    id: 'office',
    name: 'AI办公工具',
    nameEn: 'OFFICE',
    description: 'Revolutionize your work routine with intelligent productivity boosters.',
    products: [
      { rank: 1, name: 'ChatExcel', slogan: '你的专属AI表格分析师', grade: 'a级', totalScore: 668, tags: 'AI数据处理', description: '北京大学深圳研究生院团队打造的智能表格分析工具。', monthlyTraffic: '119.24K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-ChatExcel.webp' },
      { rank: 2, name: 'copilot', slogan: 'Copilot 让工作快人一步', grade: 'a级', totalScore: 668, tags: '效率助手', description: '融入工作流程的AI副驾，懂你且无所不能。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-copilot.webp' },
      { rank: 3, name: 'Bard PDF', slogan: '再长的PDF，一问便知', grade: 'a级', totalScore: 668, tags: '效率助手', description: '让厚重的PDF文档开口说话的智能工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-BardPDF.webp' },
      { rank: 4, name: 'Qodo', slogan: '语音生成PPT，开口即得', grade: 'a级', totalScore: 668, tags: 'PPT制作', description: '赋能工程团队的AI编码平台，加速开发。', monthlyTraffic: '276.60K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Qodo.webp' },
      { rank: 5, name: 'AiBiao.cn', slogan: '你的AI数据可视化专家', grade: 'a级', totalScore: 668, tags: 'AI数据处理', description: '让图表创作变得前所未有的高效的AI平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-AiBiaocn.webp' },
      { rank: 6, name: 'lightfield', slogan: '一个会主动记忆并行动的CRM', grade: 'a级', totalScore: 668, tags: 'AI数据处理', description: '全保真捕获每一次客户互动的智能CRM。', monthlyTraffic: '100.50K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-lightfield.webp' },
      { rank: 7, name: 'Gamma', slogan: 'AI一键生成精彩简报', grade: 'a级', totalScore: 660, tags: 'PPT制作', description: 'AI驱动的演示文稿和多媒体内容生成平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Gamma.webp' },
    ],
  },
  {
    id: 'graphics',
    name: 'AI图形处理',
    nameEn: 'IMAGE TOOLS',
    description: 'Intelligent editing tools for enhancing, repairing, and transforming visual assets.',
    products: [
      { rank: 1, name: 'Lenso', slogan: '一键全网搜脸找人神器', grade: 'a级', totalScore: 585, tags: '人脸检测', description: '来自波兰的AI逆向图像搜索平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/12/nav-logo-lenso.webp' },
      { rank: 2, name: '像素蛋糕', slogan: '商业级精修，AI一键搞定', grade: 's级', totalScore: 675, tags: 'AI抠图,图像编辑', description: '商业级AI修图软件，从手艺活变成智力活。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-pixcakeai.webp' },
      { rank: 3, name: 'Picsart', slogan: '图片视频，一个就够了', grade: 'a级', totalScore: 668, tags: '图像编辑', description: '拥有超过1.5亿创作者的创意社区。', monthlyTraffic: '16.85M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Picsart.webp' },
      { rank: 4, name: 'Shakker', slogan: '让你的每个想法都栩栩如生', grade: 'a级', totalScore: 668, tags: 'AI图像增强', description: '基于人工智能的图像生成平台。', monthlyTraffic: '307.20K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2024/12/nav-logo-shakker.jpg' },
      { rank: 5, name: 'ARTSMART AI', slogan: '人人都会用的AI画家', grade: 'a级', totalScore: 668, tags: '图像编辑', description: '创新的AI图像生成平台。', monthlyTraffic: '44.65K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-ARTSMARTAI.webp' },
      { rank: 6, name: 'BeautyPlus', slogan: '智能美颜，定义你的美', grade: 'a级', totalScore: 668, tags: '背景去除', description: '全球用户超过8亿的AI美颜工具。', monthlyTraffic: '1.08M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-BeautyPlus.webp' },
      { rank: 7, name: 'Phot.AI', slogan: 'AI助力，轻松创作爆款图', grade: 'a级', totalScore: 668, tags: '图像编辑,背景去除', description: '百万企业家与营销人员青睐的视觉内容创作平台。', monthlyTraffic: '208.22K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-PhotAI.webp' },
    ],
  },
  {
    id: 'video',
    name: 'AI视频工具',
    nameEn: 'VIDEO TOOLS',
    description: 'Transform ideas into cinematic masterpieces with cutting-edge AI video tools.',
    products: [
      { rank: 1, name: 'LibTV', slogan: '全链路节点式视频神器', grade: 's级', totalScore: 698, tags: 'AI短剧,AI视频生成', description: 'LiblibAI发布的双入口视频创作平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-liblib.webp' },
      { rank: 2, name: 'Runway', slogan: 'AI快速成片！文生视频一键开拍', grade: 's级', totalScore: 690, tags: 'AI视频生成', description: '把AI视频创作推进到直接改出成片的层面。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Runway.webp' },
      { rank: 3, name: 'Happy Horse', slogan: 'AI生成短片！灵感秒变视频', grade: 's级', totalScore: 690, tags: 'AI短剧,AI视频生成', description: '聚焦AI视频生成与编辑的创意平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-happyhorse.webp' },
      { rank: 4, name: '剪映', slogan: '让视频剪辑像P图一样简单', grade: 's级', totalScore: 690, tags: 'AI视频编辑', description: '字节跳动旗下的王牌剪辑应用，覆盖多平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-capcut.webp' },
      { rank: 5, name: 'OiiOii', slogan: 'AI天团，为你打造动画', grade: 's级', totalScore: 675, tags: 'AI漫剧', description: '全球首个动画Agent工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-oiioiiai.webp' },
      { rank: 6, name: '可灵AI', slogan: '一句话，生成一部大片', grade: 's级', totalScore: 675, tags: 'AI视频生成', description: '快手公司自研的新一代创意生产力平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-klingai.webp' },
      { rank: 7, name: 'Medeo AI', slogan: '无需剪辑！文字秒变视频', grade: 's级', totalScore: 675, tags: 'AI漫剧', description: '号称"大脑的AI视频编辑器"的创意工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/12/nav-logo-medeo.webp' },
    ],
  },
  {
    id: 'design',
    name: 'AI设计工具',
    nameEn: 'DESIGN',
    description: 'Supercharge your UI/UX and branding with AI-powered design assistants.',
    products: [
      { rank: 1, name: 'Tripo', slogan: '一站式AI 3D工作台', grade: 's级', totalScore: 675, tags: '3D设计,Al设计工具', description: '知名VAST公司打造的在线3D建模平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/03/nav-logo-Tripo.jpg' },
      { rank: 2, name: 'Photoshop', slogan: '一句话，万物皆可P', grade: 's级', totalScore: 675, tags: '平面设计', description: '设计界的传奇，现在有了AI的强力加持。', monthlyTraffic: '376.27M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-photoshop.webp' },
      { rank: 3, name: 'Claude Design', slogan: '开口即设计！3轮对话出原型', grade: 'a级', totalScore: 668, tags: 'UI/UX设计', description: 'Anthropic推出的AI设计产品，对话生成可交互原型。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-claude-design.webp' },
      { rank: 4, name: 'LogoAI', slogan: '3秒出Logo，品牌形象大升级', grade: 'a级', totalScore: 668, tags: 'LOGO设计', description: '智能的品牌建设平台，已服务超过782万家企业。', monthlyTraffic: '953.92K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-LogoAI.webp' },
      { rank: 5, name: '可画', slogan: '懒人设计神器，AI全搞定', grade: 'a级', totalScore: 668, tags: 'UI/UX设计', description: '全球月活跃用户超过1.25亿的一站式视觉传播平台。', monthlyTraffic: '2.56M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-canva.webp' },
      { rank: 6, name: '稿定AI', slogan: 'AI设计速成神器', grade: 'a级', totalScore: 668, tags: 'UI/UX设计,平面设计', description: '稿定设计推出的一体化智能设计创作平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-gaodingai.webp' },
      { rank: 7, name: 'QoQo', slogan: 'AI秒出用户画像，设计灵感不用等', grade: 'a级', totalScore: 668, tags: 'UI/UX设计', description: '扎根于Figma生态的AI设计拍档。', monthlyTraffic: '2.38K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-QoQo.webp' },
    ],
  },
  {
    id: 'chat',
    name: 'AI对话聊天',
    nameEn: 'CHAT',
    description: 'Engage with world-class language models for knowledge, creativity, and productivity.',
    products: [
      { rank: 1, name: 'ChatGPT', slogan: '会聊天的AI伙伴！难题抛来秒解', grade: 's级', totalScore: 728, tags: 'AI对话聊天', description: 'OpenAI研发的大型语言模型，基于Transformer架构。', monthlyTraffic: '5.51B', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-ChatGPT.webp' },
      { rank: 2, name: 'Gemini', slogan: '多模态智能助手，看懂你的世界', grade: 's级', totalScore: 713, tags: 'AI对话聊天', description: 'Google开发的核心人工智能模型系列。', monthlyTraffic: '2.90B', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Gemini.webp' },
      { rank: 3, name: 'Deepseek', slogan: '复杂文档克星！超强问答助手', grade: 's级', totalScore: 713, tags: 'AI对话聊天', description: '深度求索公司打造的大语言模型系列。', monthlyTraffic: '430.43M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Deepseek.webp' },
      { rank: 4, name: 'SPICYCHAT.AI', slogan: '来一场脸红心跳的AI私聊', grade: 'a级', totalScore: 638, tags: '虚拟伴侣', description: '专为成人打造的AI角色扮演聊天平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-SPICYCHATAI.webp' },
      { rank: 5, name: '豆包AI', slogan: '全能AI助手，图文音视频一键生成', grade: 's级', totalScore: 698, tags: 'AI助手,AI对话聊天', description: '抖音生态内发展而来的全能AI助手。', monthlyTraffic: '161.25M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-doubao.webp' },
      { rank: 6, name: 'Grok AI', slogan: '直击全球热点！轻松一手掌握', grade: 's级', totalScore: 690, tags: 'AI对话聊天', description: 'xAI打造的对话式AI，充满探索精神。', monthlyTraffic: '244.86M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Grok.webp' },
      { rank: 7, name: 'Claude', slogan: '传说降临！断层领先', grade: 's级', totalScore: 735, tags: 'AI对话聊天', description: 'Anthropic推出的顶级大语言模型。', monthlyTraffic: '119.51M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-claude-design.webp' },
    ],
  },
  {
    id: 'painting',
    name: 'AI绘画工具',
    nameEn: 'DRAWING',
    description: 'Unleash your creativity with state-of-the-art AI image generation platforms.',
    products: [
      { rank: 1, name: 'ChatGPT Images 2.0', slogan: 'AI生图新高度！如有神助', grade: 's级', totalScore: 720, tags: 'AI图文生成,AI绘画创作', description: 'OpenAI正式发布的新一代AI生图工具。', monthlyTraffic: '203.09M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-chatgpt-images-2-0.webp' },
      { rank: 2, name: '即梦AI', slogan: '字节出品，一句话让灵感成片', grade: 's级', totalScore: 705, tags: 'AI绘画创作', description: '字节跳动旗下剪映、醒图团队打造的创作工具。', monthlyTraffic: '13.15M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-jimengai.webp' },
      { rank: 3, name: 'Nano Banana Pro', slogan: '叹为观止！重新定义AI生图', grade: 's级', totalScore: 683, tags: 'AI绘画创作', description: 'Google DeepMind团队研发的图像生成模型。', monthlyTraffic: '6.14M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-NanoBanana.webp' },
      { rank: 4, name: 'Midjourney', slogan: 'AI画笔，点字成画', grade: 's级', totalScore: 698, tags: 'AI绘画创作', description: '将文字描述转化为惊艳视觉艺术的神奇画板。', monthlyTraffic: '10.70M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Midjourney.webp' },
      { rank: 5, name: 'liblib AI', slogan: '模型随心换！每天都是新画风', grade: 's级', totalScore: 675, tags: 'AI模型训练,AI绘画创作', description: '国内领先的AI创作平台和原创模型分享社区。', monthlyTraffic: '2.17M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-liblib.webp' },
      { rank: 6, name: 'Whisk', slogan: '一键融合风格，AI创造新视界', grade: 's级', totalScore: 683, tags: 'AI人像写真,AI绘画创作', description: 'Google推出的AI图像生成工具。', monthlyTraffic: '61.98M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2024/12/nav-logo-whisk.jpg' },
      { rank: 7, name: 'Civitai', slogan: 'AI绘画模型，一站找全', grade: 'a级', totalScore: 668, tags: 'AI模型训练,AI绘画创作', description: 'AI绘画模型分享社区，俗称C站。', monthlyTraffic: '7.55M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Civitai.webp' },
    ],
  },
  {
    id: 'learning',
    name: 'AI学习平台',
    nameEn: 'LEARNING',
    description: 'Master new skills and explore AI with comprehensive learning resources.',
    products: [
      { rank: 1, name: 'Duolingo', slogan: '你的口袋AI语言家教', grade: 's级', totalScore: 675, tags: 'AI学习平台', description: '全球超过5亿人在用的语言学习App。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Duolingo.webp' },
      { rank: 2, name: '优设网', slogan: '行业风向标！学AI设计就上优设', grade: 'a级', totalScore: 668, tags: 'AI学习平台', description: '中国AIGC内容领域的头部平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-uisdc-new2.webp' },
      { rank: 3, name: 'Replicate', slogan: '一行代码，调用万千AI模型', grade: 'a级', totalScore: 668, tags: 'AI学习平台', description: '为开发者打造的云端AI模型游乐场。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-chumenwenwen.webp' },
      { rank: 4, name: 'kaggle', slogan: '全球数据科学家的竞技场', grade: 'a级', totalScore: 668, tags: 'AI学习平台', description: '数据科学与机器学习的顶级在线社区与竞赛平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-kaggle.webp' },
      { rank: 5, name: 'WolframAIpha', slogan: '你的私人全科智囊团', grade: 'a级', totalScore: 645, tags: 'AI学习平台', description: '自2009年问世的计算知识引擎。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-WolframAIpha.webp' },
      { rank: 6, name: 'ML For Beginners', slogan: '微软官方出品，免费学AI', grade: 'a级', totalScore: 645, tags: 'AI学习平台', description: '微软官方出品的机器学习入门课程。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-ML-For-Beginners.webp' },
      { rank: 7, name: 'Curipod', slogan: '30秒生成AI互动课件', grade: 'a级', totalScore: 638, tags: 'AI学习平台', description: '专为K-12教育设计的AI互动教学平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Curipod.webp' },
    ],
  },
  {
    id: 'programming',
    name: 'AI编程工具',
    nameEn: 'APIS',
    description: 'Accelerate development with AI-powered coding assistants and platforms.',
    products: [
      { rank: 1, name: 'Codex', slogan: '开创全民AI编程时代', grade: 's级', totalScore: 698, tags: 'AI编程,自动化流程', description: 'OpenAI重磅推出的AI编程与自动化神器。', monthlyTraffic: '5.51B', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/05/nav-logo-codex.webp' },
      { rank: 2, name: 'Google AI Studio', slogan: '谷歌Gemini的练兵场', grade: 's级', totalScore: 690, tags: 'AI编程,自动化流程', description: '基于浏览器的集成开发环境，驾驭Gemini大模型。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Google-AI-Studio.webp' },
      { rank: 3, name: 'Pencil', slogan: '设计代码同屏！AI实时生成界面', grade: 's级', totalScore: 675, tags: 'AI编程,AI网站构建', description: '打破传统设计与代码边界的AI原生开发工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/01/nav-logo-pencil.webp' },
      { rank: 4, name: 'TRAE', slogan: '零基础也能用的开发神器', grade: 's级', totalScore: 675, tags: 'AI编程,AI编程工具', description: '字节跳动打造的AI开发智能体。', monthlyTraffic: '3.83M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-TRAE.webp' },
      { rank: 5, name: 'Coze', slogan: '零代码打造智能助手', grade: 'a级', totalScore: 668, tags: 'AI编程', description: '字节跳动推出的新一代AI应用开发平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Coze.webp' },
      { rank: 6, name: 'Google Antigravity', slogan: 'AI开发任务中枢！多智能体写代码', grade: 'a级', totalScore: 660, tags: 'AI编程', description: '把AI编程推进到协同完成任务的层面。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/03/nav-logo-antigravity.webp' },
      { rank: 7, name: 'Ollama', slogan: '你的私人AI模型库', grade: 'a级', totalScore: 668, tags: 'AI编程,自动化流程', description: 'AI世界的Docker，让运行大语言模型变得简单。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Ollama.webp' },
    ],
  },
  {
    id: 'translation',
    name: 'AI翻译工具',
    nameEn: 'TRANSLATION',
    description: 'Break language barriers with intelligent translation solutions.',
    products: [
      { rank: 1, name: '讯飞智能翻译', slogan: '文档翻译神器，格式不乱码', grade: 'a级', totalScore: 668, tags: 'AI翻译工具', description: '科大讯飞的硬核翻译力作。', monthlyTraffic: '12.62K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-fanyixfyun.webp' },
      { rank: 2, name: '秘塔AI翻译', slogan: '专业术语翻译，就用秘塔', grade: 'a级', totalScore: 653, tags: 'AI翻译工具', description: '法律、公文等专业领域的翻译利器。', monthlyTraffic: '416', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-fanyimetaso.webp' },
      { rank: 3, name: '百度翻译', slogan: '免费的200+语种随身翻译官', grade: 'a级', totalScore: 638, tags: 'AI翻译工具', description: '百度推出的免费翻译工具。', monthlyTraffic: '26.01M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-fanyibaidu.webp' },
      { rank: 4, name: '有道翻译', slogan: 'AI翻译写作，一键搞定', grade: 'a级', totalScore: 638, tags: 'AI翻译工具', description: '网易推出的翻译软件，自研神经网络引擎。', monthlyTraffic: '4.59M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-fanyiyoudao.webp' },
      { rank: 5, name: 'DeepL翻译', slogan: '你的专属AI翻译大师', grade: 'a级', totalScore: 638, tags: 'AI翻译工具', description: '德国科隆的DeepL，以惊艳翻译质量著称。', monthlyTraffic: '115.57M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-translatordeepl.webp' },
      { rank: 6, name: 'AI TransPDF', slogan: '一键翻译PDF，阅读无障碍', grade: 'a级', totalScore: 638, tags: 'AI TransPDF,AI翻译工具', description: '智能翻译平台，支持超过80种语言。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-AITransPDF.webp' },
      { rank: 7, name: 'BabelDOC', slogan: '翻译神器，排版完美还原', grade: 'a级', totalScore: 630, tags: 'AI翻译工具', description: '专注于文档翻译的开源工具。', monthlyTraffic: '2.56M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-BabelDOC.webp' },
    ],
  },
  {
    id: 'marketing',
    name: 'AI营销工具',
    nameEn: 'MARKETING',
    description: 'Boost your brand and campaigns with AI-powered marketing solutions.',
    products: [
      { rank: 1, name: 'AI Consulting Tools', slogan: '你的24小时AI战略顾问', grade: 'a级', totalScore: 668, tags: 'AI Consulting Tools,用户画像', description: '将商业战略模型变成输入一句话即可分析的工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-AI-Consulting-Tools.webp' },
      { rank: 2, name: 'BrandWell', slogan: '为你的品牌定制专属AI写手', grade: 'a级', totalScore: 668, tags: 'AI广告投放', description: '完整的品牌增长引擎。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-BrandWell.webp' },
      { rank: 3, name: 'Mnemonic AI', slogan: '一键生成你的用户画像', grade: 'a级', totalScore: 668, tags: '用户画像', description: '专注于用户画像分析的AI平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Mnemonic-AI.webp' },
      { rank: 4, name: '搜获客', slogan: '你的客户大海捞针？我一网打尽', grade: 'a级', totalScore: 668, tags: 'AI品牌营销', description: '智能客户搜索与挖掘工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-sohook.webp' },
      { rank: 5, name: '阿里妈妈·创意中心', slogan: '电商创意，AI比你更懂点击', grade: 'a级', totalScore: 660, tags: 'AI广告投放', description: '阿里妈妈为百万商家准备的数智创意军火库。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-chungyitaobao.webp' },
      { rank: 6, name: '搜极星', slogan: '一键查收大模型品牌曝光度', grade: 'a级', totalScore: 653, tags: 'GEO', description: '中立第三方AI生成式引擎优化监测平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/04/nav-logo-sougeo.webp' },
      { rank: 7, name: 'Salesforce AI', slogan: '预测洞察，引爆业务增长', grade: 'a级', totalScore: 653, tags: 'AI品牌营销', description: 'Salesforce生态系统中的AI驱动平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Salesforce-AI.webp' },
    ],
  },
  {
    id: 'audio',
    name: 'AI音频工具',
    nameEn: 'AUDIO',
    description: 'Create, edit, and enhance audio with cutting-edge AI technology.',
    products: [
      { rank: 1, name: 'Udio', slogan: 'AI音乐生成新标杆', grade: 's级', totalScore: 675, tags: 'AI音乐生成', description: 'AI音乐生成领域的新标杆，支持多种风格。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-udio.webp' },
      { rank: 2, name: 'ElevenLabs', slogan: '克隆你的声音，无限可能', grade: 'a级', totalScore: 668, tags: 'AI语音合成', description: '逼真的语音合成与声音克隆平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-elevenlabs.webp' },
      { rank: 3, name: 'Play.ht', slogan: '文字秒变专业配音', grade: 'a级', totalScore: 668, tags: 'AI语音合成', description: '支持多种语言的AI语音合成平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-playht.webp' },
      { rank: 4, name: 'RVC', slogan: 'AI实时变声，玩转声音', grade: 'a级', totalScore: 668, tags: 'AI语音转换', description: '开源的AI实时变声工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-rvc.webp' },
      { rank: 5, name: 'Soundraw', slogan: 'AI作曲，无限灵感', grade: 'a级', totalScore: 668, tags: 'AI音乐生成', description: 'AI作曲平台，无限音乐灵感。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-soundraw.webp' },
      { rank: 6, name: 'Descript', slogan: 'AI音频编辑，像编辑文字一样', grade: 'a级', totalScore: 668, tags: 'AI音频编辑', description: '革命性的AI音频编辑平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-descript.webp' },
      { rank: 7, name: 'Podcastle', slogan: 'AI播客制作神器', grade: 'a级', totalScore: 668, tags: 'AI音频编辑', description: '专为播客制作设计的AI工具。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-podcastle.webp' },
    ],
  },
  {
    id: 'assistant',
    name: 'AI智能助手',
    nameEn: 'ASSISTANTS',
    description: 'Empower your daily tasks with intelligent AI assistants and agents.',
    products: [
      { rank: 1, name: 'OpenClaw', slogan: '住在聊天软件里的全能管家', grade: 's级', totalScore: 728, tags: 'AI助手', description: '开源且高度可定制的私人AI助理。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/01/nav-logo-clawd.webp' },
      { rank: 2, name: 'Manus', slogan: '把想法交给AI去实现', grade: 's级', totalScore: 683, tags: 'AI智能体', description: '通用型AI智能体，Monica团队打造。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Manus.webp' },
      { rank: 3, name: 'WorkBuddy', slogan: '真干活不废话的电脑管家', grade: 's级', totalScore: 675, tags: '国产OpenClaw', description: '腾讯云打造的赛博同事。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/03/nav-logo-codebuddy.webp' },
      { rank: 4, name: 'Banana Prompts', slogan: '全网AI大神咒语一键复制', grade: 's级', totalScore: 675, tags: 'AI提示词库', description: 'AI提示词分享平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-bananaprompts.webp' },
      { rank: 5, name: 'SkillHub', slogan: '海量AI技能国内高速装', grade: 's级', totalScore: 675, tags: '国产OpenClaw', description: '腾讯打造的AI技能平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/03/nav-logo-skillhub.webp' },
      { rank: 6, name: 'Weavy', slogan: '对AI输出结果，进行像素级控制', grade: 's级', totalScore: 675, tags: 'AI助手,AI智能体', description: 'Figma收购的创新智能平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-WeavyAI.webp' },
      { rank: 7, name: 'Kimi Claw', slogan: '告别本地配置的云端代理', grade: 'a级', totalScore: 668, tags: '国产OpenClaw', description: 'Moonshot AI推出的云端代理工具。', monthlyTraffic: '45.31M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/03/nav-logo-kimibot.webp' },
    ],
  },
  {
    id: 'toolbox',
    name: 'AI工具箱',
    nameEn: 'TOOLBOX',
    description: 'Your gateway to the definitive directory of AI tools and platforms.',
    products: [
      { rank: 1, name: '优设AI导航', slogan: '设计师的AI工具兵器库', grade: 'a级', totalScore: 653, tags: 'AI工具导航', description: '优设设计导航矩阵的重要一员。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/11/nav-logo-haouisdcai.webp' },
      { rank: 2, name: '麦芽AI', slogan: '对话就能开发！原型代码一条线', grade: 'a级', totalScore: 623, tags: '开发平台', description: 'AI驱动的一体化项目开发平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2026/05/nav-logo-myaifast-1.webp' },
      { rank: 3, name: 'Futurepedia', slogan: '你的专属AI工具百宝箱', grade: 'a级', totalScore: 668, tags: 'AI工具导航', description: '汇集超过4900款AI工具的平台。', monthlyTraffic: '861.01K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-Futurepedia.webp' },
      { rank: 4, name: 'ModelScope', slogan: '开源社区共建未来', grade: 'a级', totalScore: 645, tags: 'AI开源社区', description: '阿里巴巴达摩院推出的模型即服务平台。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-ModelScope.webp' },
      { rank: 5, name: 'Hugging Face', slogan: '开源AI模型，一键调用', grade: 'a级', totalScore: 645, tags: 'AI工具导航,AI开源社区', description: '全球AI开发者和研究者的聚集地。', monthlyTraffic: '27.37M', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-HuggingFace.webp' },
      { rank: 6, name: 'Poe', slogan: '顶级AI模型一网打尽', grade: 'a级', totalScore: 638, tags: 'AI模型评测', description: 'Quora打造的AI模型游乐场。', monthlyTraffic: '—', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/10/nav-logo-Poe.webp' },
      { rank: 7, name: 'ToolScout', slogan: 'AI宝库，每日为你上新', grade: 'a级', totalScore: 638, tags: 'AI工具导航', description: '每日更新的AI工具推荐平台。', monthlyTraffic: '15.42K', iconUrl: 'https://image.uisdc.com/wp-content/uploads/2025/09/nav-logo-ToolScout.webp' },
    ],
  },
];
