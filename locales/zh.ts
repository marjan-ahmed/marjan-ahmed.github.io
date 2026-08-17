export default {
  hero: {
    hi: "我是{name}",
    description: "全栈开发者和智能体AI工程师，构建生产级Web应用和已部署的AI智能体系统。",
    eyebrow: "全栈 · 智能体AI",
    headline: "我构建系统，而非一次性项目。",
    sub: "17岁，从八年级开始编程，脑子里同时开着大约六个标签页，但依然能交付真实的东西：为初创公司、自由职业客户构建生产级应用和AI智能体，还有3,700多人安装了我构建的东西。一旦开始，就会完成，无论遇到什么。",
    cta: {
      primary: "查看部署项目",
      copied: "已复制",
      copyEmail: "复制邮箱",
    },
    card: {
      role: "全栈开发者 & 智能体AI工程师",
      base: "所在地",
      local: "当地时间",
      focus: "专注领域",
      focusValue: "智能体AI系统",
      status: "状态",
      statusValue: "开放工作机会",
    },
  },
  proof: {
    title: "证据",
    items: {
      downloads: { label: "PyPI下载量", note: "Gemini Starter Agent，开源项目" },
      repos: { label: "公开仓库", note: "已发布的GitHub代码" },
      sites: { label: "客户网站", note: "在Reintechs端到端交付" },
      hackathons: { label: "黑客松", note: "决赛选手、前十名、第二名，自2024年起" },
      age: { label: "年龄", note: "从八年级开始编程" },
    },
  },
  deployments: {
    eyebrow: "部署项目",
    title: "实际交付的成果",
    lede: "五个系统，端到端。启动它们的摩擦点、我围绕其设计的约束条件，以及因此而改变的一切。",
    beats: {
      friction: "摩擦",
      constraint: "约束",
      system: "系统",
      impact: "影响",
      stack: "技术栈",
    },
    status: {
      won: "获奖",
      live: "在线",
      shipped: "已交付",
    },
    architecture: "架构",
    collapse: "收起",
    expand: "查看完整详情",
    items: {
      docsamajh: {
        friction: "发票到采购订单的对账是手动逐行完成的，这是黑客松简报围绕的核心瓶颈。",
        constraint: "发票以扫描件和照片形式到达，格式不一致，没有干净的文本输入，也没有用于评估模型提取精度的基准数据。",
        system: "LandingAI ADE从扫描的PDF中提取结构化行项目，Gemini进行标准化，OpenAI Agents SDK智能体将发票与采购订单匹配，并通过Streamlit审查层处理匹配无法单独解决的异常情况。",
      },
      textbook: {
        friction: "文档风格的课程内容，无法提问并获得基于实际课程的回答。",
        constraint: "零托管预算，一个人在三个不同平台上构建三个独立服务（文档、认证、RAG）。",
        system: "GitHub Pages上的Docusaurus前端、Express + Better Auth服务，以及Railway上使用Cohere嵌入和Qdrant的FastAPI RAG后端。三个服务，三个平台，由一个人维护。",
      },
      vault: {
        friction: "值得采取行动的信号（邮件、WhatsApp、文件系统变更）分散在多个渠道中，没有统一的地方来审查和批准操作。",
        constraint: "任何代我执行的自动化操作在接触真实内容之前都需要人工审批步骤，没有例外。",
        system: "信号监控器向自定义MCP服务器提供数据；Claude Code通过审批门执行操作；每个操作都作为可读的审计追踪记录在Obsidian保险库中。",
      },
      "gemini-starter": {
        friction: "每个新的智能体项目在编写一行实际智能体逻辑之前，都要从相同的三十分钟供应商样板代码开始。",
        constraint: "需要同时兼容Gemini和OpenAI，且不要求用户在切换供应商时重写智能体代码。",
        system: "一条CLI命令即可搭建可运行的智能体，底层的供应商垫片在Gemini和OpenAI的Agents SDK之间切换，不到一分钟就能拥有一个运行中的智能体。",
      },
      hekto: {
        friction: "黑客松简报要求构建完整的家具电商平台（目录、购物车、结账、配送），而一切从零开始。",
        constraint: "六天时间，独自一人，最后还有GIAIC演示日。没有空间留给未记录的决策或未测试的结账流程。",
        system: "Next.js 14店面使用Redux管理购物车状态，Sanity作为无头目录，Clerk负责认证，ShipEngine处理配送。从商业目标到部署，经过六个记录在案的阶段，在两个结构化CSV报告中记录了18个QA测试用例，并在上线前进行了Core Web Vitals性能检测。",
      },
    },
  },
  capabilities: {
    eyebrow: "能力",
    title: "我的价值所在",
    lede: "按每个能力解决的问题分组，而非按语言分类，以便按照实际工作方式阅读。",
    items: {
      ship: {
        title: "交付界面",
        body: "用户真正接触的那一层：快速、可访问，在每个项目中使用相同的技术栈构建，确保没有例外。",
      },
      reason: {
        title: "数据推理",
        body: "智能体、检索和多智能体编排。系统中负责决策而非仅仅响应的部分。",
      },
      serve: {
        title: "可靠服务",
        body: "在演示结束后依然持续运行的API、认证和存储。",
      },
      run: {
        title: "生产运行",
        body: "为零预算和真实可用性而选择的容器、CI和托管方案，而非为了简历上的那一行。",
      },
    },
  },
  principles: {
    eyebrow: "方法",
    title: "当我被投入问题时的工作方式",
    lede: "五个习惯，每个都有证据。没有证据的原则只是口号。",
    receipt: "证据：",
    closer: "以上所有内容都可验证。这是有意为之。我宁愿你自己发现差距，也不愿你只听我的话。",
    items: {
      friction: {
        title: "从摩擦出发",
        body: "我选择背后有真实摩擦的问题，而非那些在简历中看起来不错的问题，然后找出构建解决方案的方法。",
      },
      constraint: {
        title: "约束即简报",
        body: "一个带有实时计时器的三小时构建，促使我深入阅读OpenAI Agents SDK的源代码，足以贡献一个功能回社区，而不仅仅是使用它。",
      },
      ownership: {
        title: "端到端负责",
        body: "5到7个客户网站，独自完成，从CMS到结账再到客户真正阅读的报告。不有趣的部分也不交给别人。",
      },
      systems: {
        title: "系统化思考",
        body: "三个服务，三个平台，一个人，因为真正的系统是在某个组件故障时的表现来评判的，而不是演示。",
      },
      measure: {
        title: "使其可验证",
        body: "3,723+次PyPI下载，而非「被开发者使用」。如果这个网站上有一个数字，那就是你可以去验证的数字。",
      },
    },
  },
  shipLog: {
    eyebrow: "日志",
    title: "所有已交付的成果",
    lede: "两年，一条时间线，最新的在前。",
    kinds: {
      won: "获奖",
      shipped: "已交付",
      published: "已发布",
      joined: "加入",
      started: "开始",
      attended: "参加",
    },
    fieldNoteLabel: "现场笔记",
    entries: {
      khinext: {
        title: "KhiNext科技峰会，卡拉奇",
        detail: "「人工智能、商业与未来消费者」小组讨论。",
      },
      mlsa: {
        title: "微软学生大使，卡拉奇",
        detail: "活动管理团队。",
      },
      naxasware: {
        title: "Naxasware，全栈开发者",
        detail: "与创始团队一起交付生产功能。",
      },
      landingai: {
        title: "AI Financial黑客松，已提交",
        detail: "LandingAI，DocSamajh AI。",
      },
      devfest: {
        title: "DevFest卡拉奇，GDG Kolachi十周年",
        detail: "NASTP社区活动。",
      },
      ibm: {
        title: "Agentic AI黑客松，决赛选手",
        detail: "IBM watsonx，lablab.ai。",
      },
      hacktoberfest: {
        title: "Cloudways x DigitalOcean Hacktoberfest，第二名",
        detail: "三小时构建。为OpenAI Agents SDK贡献了一个功能。",
        note: "带领团队。两小时后，什么都没跑通。SDK缺少简报需要的功能。我们找到了缺口，绕过去构建，直到最后一小时才有一个能运行的演示。第二名，站在评委Aaqib Sayed旁边。",
      },
      nasa: {
        title: "NASA Space Apps，Kalkia",
        detail: "基于44年NASA数据的天气概率。",
        note: "第一次担任任何事的大使。我做了一个Google表单，在学校发布，收到16份回复。然后自己为挑战构建了Kalkia：基于44年NASA数据的天气概率。",
      },
      pypi: {
        title: "Gemini Starter Agent，PyPI",
        detail: "3,723+次下载。",
      },
      reintechs: {
        title: "Reintechs，Web开发者（自由职业）",
        detail: "五个月内交付5到7个生产客户网站。",
      },
      gdg: {
        title: "Google Build with AI，前十名",
        detail: "GDG Kolachi，Hunar Bazaar。",
        note: "前十名，GDG Kolachi。我们构建了Hunar Bazaar，一个面向巴基斯坦农村女性的自由职业平台，配有AI生成的零工描述。",
      },
      innovista: {
        title: "全国Agentic AI黑客松，Innovista Indus",
        detail: "第一次黑客松。乌尔都语、信德语、旁遮普语、普什图语的教育科技。",
        note: "我的第一次黑客松。想法是对的，用乌尔都语、信德语、旁遮普语和普什图语做AI回应，但我远没有现在这么快或这么有组织。从那以后一直在追赶那个想法。",
      },
      giaic: {
        title: "GIAIC，Agentic AI与云计算工程",
        detail: "与中学学业并行。",
      },
    },
  },
  palette: {
    label: "命令面板",
    placeholder: "搜索板块、联系方式、设置...",
    close: "关闭",
    empty: "未找到\"{query}\"的结果",
    groups: {
      jump: "跳转到",
      contact: "联系方式",
      settings: "设置",
      language: "语言",
    },
    actions: {
      copyEmail: "复制邮箱",
      copied: "已复制",
      github: "打开GitHub",
      linkedin: "打开LinkedIn",
      light: "切换到亮色模式",
      dark: "切换到暗色模式",
    },
    legend: {
      move: "导航",
      select: "选择",
    },
  },
  nav: {
    method: "方法",
    deployments: "部署项目",
    capabilities: "能力",
    log: "日志",
    contact: "联系方式",
  },
  contact: {
    title: "联系方式",
    letsConnect: "联系我",
    description: "有项目想法或想合作？通过{email}或{linkedin}联系我。目前开放合同工作和全职职位。",
    emailLink: "邮箱",
    linkedinLink: "LinkedIn",
  },
  common: {
    notAvailable: "无",
    pageNotFound: "页面未找到",
    pageNotFoundDescription: "您查找的页面不存在或可能已被移动。",
    goToHome: "返回首页",
    selectLanguage: "选择语言",
  },
} as const;
