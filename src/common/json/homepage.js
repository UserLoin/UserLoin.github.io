const data_CN = {
  topIntroduce: {
    title: '了解更多',
    arrowSmall: require("@/assets/homepage/icon_arrow_small@2x.png"),
    isHomePage: true,
    englishName: 'ABOUT',
    name: '',
    introText: '是一家运营服务公司，由来自各互联网公司的运营大牛组成核心团队，专门从事公司品牌运营、产品服务运营、网红主播运营。透过职业化的培训，协助公司变现的规划与咨询，透由SNS社交等渠道，加速产品与服务的业绩增长。',
    bottomImg: true,
    frontIntroText: 'OFFSHORE',
  },
  productIntroduce: {
    intro: {
      titleZh: '产品简介',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: '产品简介',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    list: [
      {
        title: '品牌运营',
        title_en: 'BRAND OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/pexels-darius-krause-2228183@2x.png"), title: '平台搭建', desc: '搭建企业各平台官网、用户/社交等互动平台。' },
          { img: require("@/assets/homepage/productIntroduction/pexels-lisa-fotios-16129877@2x.png"), title: '运营指导', desc: '专注各类垂直行业的个性化创意设计、公司开业运营转助与指导。' }
        ],
      },
      {
        title: '产品运营',
        title_en: 'PRODUCT OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/home_product1@2x.png"), title: '数在人心', desc: '高效整合的数字营销策略。' },
          { img: require("@/assets/homepage/productIntroduction/home_product2@2x.png"), title: '服务整合', desc: '数据驱动的新零售模式与服务整合。' },
          { img: require("@/assets/homepage/productIntroduction/home_product3@2x.png"), title: '多元化团队', desc: '渗透全球的运维团队、...........' }
        ],
      },
      {
        title: '主播运营',
        title_en: 'KOL OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/home_kol1@2x.png"), title: '全球化运营', desc: '全球团队的多文化整合与运营共创。' },
          { img: require("@/assets/homepage/productIntroduction/home_kol2@2x.png"), title: '精细化培育', desc: '精细化各垂直主播培育与生态圈发展。' }
        ],
      }
    ]
  },
  productCase: {
    intro: {
      titleZh: '产品案例',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: '产品案例',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    showingStandArray: [
      {
        title: '主播展示',
        src: require("@/assets/homepage/pic_zbyy.png")
      },
      {
        title: '电商成果展示',
        src: require("@/assets/homepage/home_buffer_photo5.png")
      }
    ],
    list: [
      {
        src: require("@/assets/homepage/chery_zhutu@2x.png"),
        title: 'Chery',
        introTitle: 'Chery',
        subheading: '多个产品物流方案',
        detail: '为车辆检测和分析服务、电商零售、车辆管理等整合为产品体系，打造生态服务圈。',
        theme: '项目亮点展示',
        infos: [
          { img: require("@/assets/homepage/productCase/chery_1@2x.png"), title: '车辆状态监测', desc: '奇瑞汽车通过车辆状态监测系统，实现了对汽车实时监测和诊断。该系统可以在发现故障时及时警示并提供相应的解决方案，让消费者享受更加安心、放心的驾驶体验。' },
          { img: require("@/assets/homepage/productCase/chery_2@2x.png"), title: '驾驶行为监测', desc: '除了车辆状态监测，我们还开发了驾驶监测功能。可以对驾驶行为进行评估和分析，包括驾驶速度、加速度、制动等行为数据，并提供相应的驾驶建议和优化方案。' },
          { img: require("@/assets/homepage/productCase/chery_3@2x.png"), title: '商城', desc: '我们搭建了商城系统，消费者可以通过该应用快速查找车辆、配件和服务，并进行在线购买。奇瑞汽车商城还提供了签到、领券等福利，让消费者享受更多的优惠和便利。' },
          { img: require("@/assets/homepage/productCase/chery_4@2x.png"), title: '社区', desc: '奇瑞汽车社区是一款专门为车主打造的社交应用。车主可以在社区中发布问题、分享经验和交流想法，同时还可参加奇瑞汽车举办的线上线下活动，结交更多志同道合的人。' },
          { img: require("@/assets/homepage/productCase/chery_5@2x.png"), title: '远程车辆控制', desc: '奇瑞汽车云智能远控是一款让消费者可以随时远程对汽车进行控制的应用，如启动车辆、控制车窗和车灯等。这让车主拥有更加方便和智能的驾驶体验。' },
          { img: require("@/assets/homepage/productCase/chery_6@2x.png"), title: '车辆知识培训', desc: '奇瑞汽车秉承着客户至上的原则，致力于向车主提供更加专业的服务。因此，奇瑞汽车提供了一系列的培训课程，包括保养知识、驾驶技巧等。通过培训,消费者可以更加深入地了解汽车和维打汽车，从而享有更好的驾驶体验。' },
          { img: require("@/assets/homepage/productCase/chery_7@2x.png"), title: '会员权益', desc: '奇瑞汽车积极构建平台，为顾客提供更优质的服务。奇瑞汽车会员享有专属福利和服务，如保养卡、修车优先等。为顾客创造了更舒适周到的购车和用车环场。' },
          { img: require("@/assets/homepage/productCase/chery_8@2x.png"), title: '车辆改装', desc: '奇瑞汽车提供了一系列改装套件和配件，可以提高汽车的性能和安全性。车主可以根据自己的喜好和需求选择不后的改装方案，实现个性化的驾驶体验。' },
          { img: require("@/assets/homepage/productCase/chery_9@2x.png"), title: '特定节日活动运营', desc: '奇瑞汽车还积极参与各种特定节日的活动。如在春节、圣诞节等大型节日，瑞虎国潮版等特定款式车型也会推出相的促销活动，吸引消费者关注和购买。这种方式为奇瑞汽车提升品牌知名度时也让消费者受益。' }
        ],
      },
      {
        src: require("@/assets/homepage/pic_biaozhi@2x.png"),
        title: '标致',
        introTitle: '东方标致',
        subheading: '赛车巅峰改造体验活动',
        detail: '东方标致赛车巅峰改造体验活动旨在为消费者提供一个互动性强、趣味性高的赛车主题活动，并且通过活动来加强品牌形象，提高品牌美誉度和市场占有率。',
        theme: '项目亮点展示',
        infos: [
          { img: require("@/assets/homepage/productCase/1@2x.png"), title: '活动策划', desc: '首先，我们邀请了大师对一辆东风标致进行改装，将其打造成赛道上的最强战车。为了让大家感受到这款车的真正实力，接下来我们安排一场赛道日体验，邀请车迷和车手来参加。' },
          { img: require("@/assets/homepage/productCase/2@2x.png"), title: '驾驶安全培训', desc: '在赛道日当天，我们除了提供高速驾驶的体验，还会为所有参加活动的人员提供安全驾驶的培训，通过这样的方式，让大家更好地了解车辆的性能和驾驶技巧，并提升安全驾驶意识。' },
          { img: require("@/assets/homepage/productCase/3@2x.png"), title: '赛事进行', desc: '我们安排了专业的赛车手和赛车队参加比赛。并设置了场地和道具使用，让比赛更富趣味性和观赏性，吸引观众的注意力通过。通过赛车手的表现和比赛结果扩大消费者对东风标致的品牌印象。' },
          { img: require("@/assets/homepage/productCase/4@2x.png"), title: '邀请车迷体验', desc: '最后，我们会请来一些车迷和体验学员，让他们分享他们在赛道日中的体验感受和收获，让更多人了解并热爱东风标致这款车。' }
        ],
      },
      {
        src: require("@/assets/homepage/home_showmore_bg.png"),
        tag: '#产品运营',
        title: 'showmore',
        introTitle: 'showmore',
        subheading: '直播电商开店平台',
        detail: 'Showmore电商开店平台是一个功能强大、易于使用的电商解决方案，旨在帮助企业快速搭建在线商店，实现业务转型和拓展。它的特色亮点包括直播强转化、网店模版、商家接入、Line Pay支付方式、PandaGo物流平台、多温层配送、数据管理等，利用这些特点，商家可以轻松的打造出一个专属于自己的电商平台。',
        theme: '项目亮点展示',
        infos: [
          { img: require("@/assets/homepage/productCase/home_showmore_photo1@2x.png"), title: '直播强转化', desc: '帮助商家掌握跨境媒体流量，可以通过直播吸引更多消费者，并提高转化率，从而增加销售收益。' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo2@2x.png"), title: '多样化网店模版', desc: 'Showmore提供了海量网店模版，可以帮助商家快速创建自己的网店。商铺可以根据自己的需求和品牌形象选择适合自己的模版。' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo3@2x.png"), title: '满足多种配帐/结算需求', desc: 'Showmore电商开店平台支持全球领先的网上支付方式-Linepay。用户可以轻松地开通线上支付功能，提供更加便捷、快速、安全的在线支付体验。' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo4@2x.png"), title: 'PandaGo物流平台', desc: 'showmore电商平台与国际知名的物流公司PandaGo合作，为用户提供稳定、高效、便捷的物流配送服务，确保货物安全、速度、成本和效率最优。' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo5@2x.png"), title: '多温层配送', desc: 'Showmore电商开店平台支持多层次、多温度的配送服务，为用户提供针对不同商品的最佳配送方案，从而最大化保证产品质量和新鲜度。' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo6@2x.png"), title: '串联管理多平台数据', desc: 'Showmore电商开店平台具有完善的数据管理系统，可以帮助商家实现实时的数据监控和分析，在今后的经营决策中起到重要作用。' }
        ],
      },
      {
        src: require("@/assets/homepage/home_buffer_bg.png"),
        tag: '#直播运营',
        title: '不烦',
        introTitle: '不烦文化',
        subheading: '抖音娱乐主播日本出海项目',
        detail: '不烦文化是中国具有广泛影响力的短视频娱乐公司，目前旗下拥有众多优秀的抖音娱乐主播。针对日益增长的海外市场需求，公司决定将其抖音娱乐主播们带到日本市场，以扩大公司业务和影响力。',
        theme: '项目阶段展示',
        infos: [
          { img: require("@/assets/homepage/productCase/home_buffer_photo1@2x.png"), title: '市场调研与策划', desc: '确定市场需求，了解目标用户，调查竞争对手，制定符合日本市场的营销计划和品牌宣传战略。' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo2@2x.png"), title: '主播进驻日本市场', desc: '择优选出选出适合日本市场的主播，为他们提供完善的日本语学习和文化培训，包括语言、礼仪、习惯等方面的指导，帮助主播们融入当地文化和环境。' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo3@2x.png"), title: '项目组专属服务', desc: ['策划设计一按需输出专亚运营方案', '优化运营一每个主播团队配备专属优化师对直播情况进行实时优化', '视频制作一基于需求录制不同类型的视频'] },
          { img: require("@/assets/homepage/productCase/home_buffer_photo4@2x.png"), title: '体系化运营流程', desc: '为主播7品牌提供直播策划、“直播商品整理、场景措建、物料准备、商品及肤本培训、投放分析、短视频预热的全流程，覆盖整个运营节点。' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo5@2x.png"), title: '开展品牌合作和商业合作', desc: '主播在日本市场建立品牌知名度和影响力后，积极主动地与各种品牌和商业机构合作，进行商业推广和赞助，提高公司的盈利能力和品牌影响力。' }
        ],
      },
      {
        src: require("@/assets/homepage/home_yali_bg.png"),
        tag: '#产品运营',
        title: '泰式美食',
        introTitle: '丫粒噪咖',
        subheading: '泰式餐馆正宗泰式料理包',
        detail: '丫粒噪咖是一家专注于制作健康天然泰式美食的餐厅。我们注重的是无添加，少油，低盐，新鲜和健康的理念，以确保为客人提供美味健康的餐食。这次的运营目标是宣传一款方便快捷，可以在家食用的的泰式料理包。',
        theme: '项目亮点',
        infos: [
          { img: require("@/assets/homepage/productCase/home_yali_photo1@2x.png"), title: '泰国风情', desc: '泰式美食在菜式搭配和美观度上非常注重，因此在产品宣传中打造美观和诱人的形象是非常重要的。可以在厂告和宣传海报中注重颜色和排版搭配，或者采用喜庆的泰国风情背景。' },
          { img: require("@/assets/homepage/productCase/home_yali_photo2@2x.png"), title: '强调健康概念', desc: '泰式美食天然健康，丫粒噪咖在做菜的时候也严格遵守健康概念，不使用过多油脂和调味料，在宣传中强调更加健康的食品是非常受欢迎的。' },
          { img: require("@/assets/homepage/productCase/home_yali_photo3@2x.png"), title: '优质食材的选用', desc: '作为泰式美食，选用新鲜海鲜和蔬菜是必要的，强调选用的食材均来自优质生产商，保证产品品质。' },
          { img: require("@/assets/homepage/productCase/home_yali_photo4@2x.png"), title: '针对特定消费人群', desc: '泰式美食在国内消费市场具有广泛的人群，例如喜欢异国美食的年轻人、注重健康的消费人群和喜欢吃辣的人群等。我们可以在宣传中针对不同的消费人群设计不同的宣传方案。' },
          { img: require("@/assets/homepage/productCase/home_yali_photo5@2x.png"), title: '方便快捷 还原美味', desc: '使用泰式美食料理包可以避免菜看制作中的繁琐、复杂的步骤，节省了时间和精力，为忙碌的现代生活带来了方便。' }
        ],
      }
    ]
  },
  ourAdvantage: {
    title: ['我们的', '优势'],
    subtitle: '多元化变现创作',
    list: [
      {
        name: ['团队化经营', '优于个人工作室'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo1@2x.png")
      },
      {
        name: ['共同创意', '快速内容选代'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo2@2x.png")
      },
      {
        name: ['专业数据分析', '精确指导与推广'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo3@2x.png")
      },
      {
        name: ['渠道整合', '快速触达关键用户'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo4@2x.png")
      },
    ]
  },
  ourMission: {
    title: '我们的使命',
    subtitle: ['我们致力于为用户创造价值', '不断拥抱改变，提供不同生活体验'],
    backImg: require('@/assets/homepage/ourMission/bg_slogan@2x.png')
  },
  aboutUs: {
    title: ['ABOUT', 'US'],
    icon: require('@/assets/homepage/aboutUs/OffshoreRSS_logo_top@2x.png'),
    sutitle: '人性化传达乐趣而生',
    picture: require('@/assets/homepage/aboutUs/pic_coop01@2x.png'),
    vision: {
      title: 'Vision',
      list: ['成为客户最信赖的合作伙伴', '为他们提供卓越的服务体验', '帮助他们实现商业成功。']
    },
    companyProfile: {
      title: '公司简介',
      desc: 'OFFSHORE是一家运营服务公司，由来自各互联网公司的运营大牛组成核心团队，专门从事公司品牌运营、产品服务运营、网红主播运营。透过职业化的培训，协助公司变现的规划与咨询，透由SNS社交等渠道，加速产品与服务的业绩增长。'
    }
  }
}

const data_JA = {
  topIntroduce: {
    title: '情報',
    arrowSmall: require("@/assets/homepage/icon_arrow_small@2x.png"),
    isHomePage: true,
    englishName: 'ABOUT',
    name: '',
    introText: 'は、さまざまなインターネット企業の運用専門家をコアチームとして構成し、企業ブランド運営代行、製品サービス運営代行、インフルエンサーの育成・仲介業務をサービスする会社です。専門的なトレーニング、企画、コンサルティングを通じて企業の収益化を支援し、SNSなどのソーシャルチャネルを通じて製品やサービスのパフォーマンス成長を加速します。',
    bottomImg: true,
    frontIntroText: 'OFFSHORE',
  },
  productIntroduce: {
    intro: {
      titleZh: 'サービス紹介',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: 'サービス紹介',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    list: [
      {
        title: 'ブランド運営代行',
        title_en: 'BRAND OPERATION',
        infos: [
          {
            img: require("@/assets/homepage/productIntroduction/pexels-darius-krause-2228183@2x.png"),
            title: 'ブランドとプラットフォームの構築',
            desc: '企業、ユーザー/ソーシャル、その他のインタラクティブ プラットフォームの各プラットフォームの公式 Web サイトを構築します。'
          },
          {
            img: require("@/assets/homepage/productIntroduction/pexels-lisa-fotios-16129877@2x.png"),
            title: '運営推進',
            desc: 'さまざまな垂直産業向けのパーソナライズされたクリエイティブ デザイン、会社の設立と運営の支援と指導に焦点を当てます。'
          }
        ],
      },
      {
        title: '製品運営代行',
        title_en: 'PRODUCT OPERATION',
        infos: [
          { 
            img: require("@/assets/homepage/productIntroduction/home_product1@2x.png"), 
            title: '人々の心の中で数えます', 
            desc: '効率的かつ統合されたデジタル マーケティング戦略。' },
          { 
            img: require("@/assets/homepage/productIntroduction/home_product2@2x.png"), 
            title: 'サービス統合', 
            desc: 'データ主導の新しい小売モデルとサービスの統合。'
           },
          { 
            img: require("@/assets/homepage/productIntroduction/home_product3@2x.png"), 
            title: '多元化チーム',
            desc: 'グローバル化された運行維持チーム、カスタマーサービスチームを継続的に開拓する。' 
          }
        ],
      },
      {
        title: 'インフルエンサー育成',
        title_en: 'KOL OPERATION',
        infos: [
          { 
            img: require("@/assets/homepage/productIntroduction/home_kol1@2x.png"), 
            title: 'グローバルなオペレーション', 
            desc: '多文化の統合とグローバル チームの運営上の共同創造。' 
          },
          { 
            img: require("@/assets/homepage/productIntroduction/home_kol2@2x.png"), 
            title: '洗練された栽培', 
            desc: '各垂直産業のキャスター育成と生態系サークルの発展を洗練する。' 
          }
        ],
      }
    ]
  },
  productCase: {
    intro: {
      titleZh: 'お取引様一部',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: 'お取引様一部',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    showingStandArray: [
      {
        title: 'クリエイター',
        src: require("@/assets/homepage/pic_zbyy.png")
      },
      {
        title: 'EC実績',
        src: require("@/assets/homepage/home_buffer_photo5.png")
      }
    ],
    list: [
      {
        src: require("@/assets/homepage/chery_zhutu@2x.png"),
        title: 'チェリー',
        introTitle: 'チェリー',
        subheading: '複数の製品物流ソリューション',
        detail: '車両検知・分析サービス、電子商取引小売、車両管理などを製品システムに統合し、環境サービスサークルを構築します。',
        theme: 'プロジェクトのハイライト',
        infos: [
          { 
            img: require("@/assets/homepage/productCase/chery_1@2x.png"), 
            title: '車両状態監視', 
            desc: '奇瑞汽車は車両状態監視システムを通じて車両のリアルタイム監視と診断を実現した。このシステムは、障害が見つかった場合に即座に警告し、対応する解決策を提供するため、消費者はより安全で確実な運転体験を楽しむことができます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_2@2x.png"),
            title: '運転行動監視', 
            desc: '瑞汽車は車両状態監視システムを通じて車両のリアルタイム監視と診断を実現した。このシステムは、障害が見つかった場合に即座に警告し、対応する解決策を提供するため、消費者はより安全で確実な運転体験を楽しむことができます。' },
          { 
            img: require("@/assets/homepage/productCase/chery_3@2x.png"), 
            title: 'ネットショップ', 
            desc: '当社は、消費者が車両、付属品、サービスをすぐに見つけてオンラインで購入できるモール システムを構築しました。 Chery Automobile Mall では、サインインやクーポン収集などの特典も提供し、消費者はより多くの割引と利便性を享受できます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_4@2x.png"), 
            title: 'コミュニティ', 
            desc: 'Chery Auto Community は、自動車所有者向けに特別に設計されたソーシャル アプリケーションです。自動車所有者は、コミュニティで質問を投稿したり、経験を共有したり、アイデアを交換したりできると同時に、奇瑞汽車が主催するオンラインおよびオフラインのアクティビティに参加して、同じ考えを持つ人々と出会うこともできます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_5@2x.png"), 
            title: '携帯電話の車両制御', 
            desc: 'Chery Auto Cloud Smart Remote Control は、車の始動、窓や照明の制御など、消費者がいつでも車を遠隔制御できるアプリケーションです。これにより、車の所有者はより便利でインテリジェントな運転体験が可能になります。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_6@2x.png"),
            title: '車両知識研修', 
            desc: '奇瑞汽車は顧客第一の原則を堅持し、自動車所有者により専門的なサービスを提供することに尽力しています。そのため、奇瑞汽車は整備知識や運転技術などを含む一連の研修コースを設けている。トレーニングを通じて、消費者は車や車のメンテナンスについての理解を深め、より良い運転体験を楽しむことができます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_7@2x.png"), 
            title: '会員特典', 
            desc: '奇瑞はお客様により良いサービスを提供するためのプラットフォームを積極的に構築しています。 Chery会員は、メンテナンスカード、車の修理優先などの特別な特典やサービスをお楽しみいただけます。お客様にとって、より快適で思いやりのあるクルマ購入とクルマ利用のリンクを実現します。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_8@2x.png"), 
            title: '車両の改造', 
            desc: '奇瑞汽車は、車の性能と安全性を向上させる一連の改造キットとアクセサリーを提供しています。車の所有者は、自分の好みやニーズに応じてさまざまな改造プランを選択し、パーソナライズされた運転体験を実現できます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/chery_9@2x.png"), 
            title: '特定祭りの運営', 
            desc: '奇瑞自動車はまた、さまざまな特定の日のアクティビティに参加します。たとえば、春節、春節などの大きな日に、瑞虎国潮版などの特定の種類の車も、それに応じた促進的なアクティビティを押し出し、消費者の関心と価格を引きつけます。自動車エレベーターは、商品牌を持ち上げると同時に消費者にも利益をもたらします。' }
        ],
      },
      {
        src: require("@/assets/homepage/pic_biaozhi@2x.png"),
        title: 'コミュニティ',
        introTitle: '東風プジョー',
        subheading: 'レーシング ピークの変革体験アクティビティ',
        detail: '東風プジョーレーシングピーク変革体験アクティビティは、消費者にインタラクティブで興味深いレースをテーマにしたイベントを提供し、イベントを通じてブランドイメージを強化し、ブランドの評判と市場シェアを向上させることを目的としています。',
        theme: 'プロジェクトのハイライト',
        infos: [
          { 
            img: require("@/assets/homepage/productCase/1@2x.png"), 
            title: 'イベント企画', 
            desc: 'まず、私たちはマスターを招待して、東風プジョーを改造してトラック上で最強の戦車に仕立てました。このクルマの本当の実力を皆様に感じていただくために、次回はトラックデー体験会を企画し、ファンやドライバーの皆様にご参加いただきます。' 
          },
          { 
            img: require("@/assets/homepage/productCase/2@2x.png"), 
            title: '安全運転研修', 
            desc: '走行会では、高速走行体験のほか、参加者全員を対象とした安全運転講習も実施し、車両の性能や運転技術を理解し、安全運転意識の向上を図ります。' 
          },
          { 
            img: require("@/assets/homepage/productCase/3@2x.png"), 
            title: '試合が行われる',
            desc: '私たちはプロのレーサーとレーシングチームを試合に参加させた。競技場や道具の使用を設置し、試合をより面白く観賞的にし、観客の注意を引くようにした。レーシングドライバーのパフォーマンスとレース結果を通じて、東風プジョーに対する消費者のブランドイメージを拡大する。' 
          },
          { 
            img: require("@/assets/homepage/productCase/4@2x.png"), 
            title: 'ファンを招待して体験', 
            desc: '最後に、より多くの人々が東風プジョーを理解し、愛することができるよう、何人かの自動車ファンと研修生を招待し、トラックデー中の経験と成果を共有してもらいます。' 
          }
        ],
      },
      {
        src: require("@/assets/homepage/home_showmore_bg.png"),
        tag: '#製品運営代行',
        title: 'showmore',
        introTitle: 'showmore',
        subheading: 'ライブEC出店プラットフォーム',
        detail: 'Showmore e コマース ストア開設プラットフォームは、企業がオンライン ストアを迅速に構築し、ビジネスの変革と拡大を実現できるように設計された、強力で使いやすい e コマース ソリューションです。その機能には、ライブ放送の強力な変換、オンライン ストア テンプレート、加盟店アクセス、Line Pay 支払い方法、PandaGo 物流プラットフォーム、多層配信、データ管理などが含まれます。これらの機能を使用することで、加盟店は専用の Web サイトを簡単に作成できます。電子ビジネス プラットフォーム。',
        theme: 'プロジェクトのハイライト',
        infos: [
          { 
            img: require("@/assets/homepage/productCase/home_showmore_photo1@2x.png"), 
            title: 'ライバーから収益に変換', 
            desc: '販売業者が国境を越えたメディア トラフィックをマスターし、ライブ放送を通じてより多くの消費者を引き付け、コンバージョン率を高め、それによって売上収益を増加できるように支援します。' },
          { 

            img: require("@/assets/homepage/productCase/home_showmore_photo2@2x.png"), 
            title: '多様なECスタイル', 
            desc: 'Showmore は、多数のオンライン ストア テンプレートを提供しています。販売者が独自のオンライン ストアを迅速に作成できるように支援します。ショップはニーズやブランドイメージに合わせて、最適なテンプレートを選択できます。'
          },
          { 

            img: require("@/assets/homepage/productCase/home_showmore_photo3@2x.png"), 
            title: '複数の決済要件を満たす', 
            desc: 'Showmore电商开店平台支持全球领先的网上支付方式–Linepay。用户可以轻松地开通线上支付功能，提供更加便捷、快速、安全的在线支付体验。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_showmore_photo4@2x.png"), 
            title: 'PandaGo物流サービス', 
            desc: 'Showmore eコマースプラットフォームは、国際的に有名な物流会社であるPandaGoと協力して、ユーザーに安定的、効率的かつ便利な物流および流通サービスを提供し、貨物の安全性、スピード、コスト、効率が最適化されるようにします。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_showmore_photo5@2x.png"), 
            title: '多層配布', 
            desc: 'Showmore e-commerce 出店プラットフォームは、マルチレベルおよびマルチ温度配送サービスをサポートしており、製品の品質と鮮度を最大限に高めるために、さまざまな商品に最適な配送ソリューションをユーザーに提供します。'
           },
          { 

            img: require("@/assets/homepage/productCase/home_showmore_photo6@2x.png"), 
            title: '管理プラットフォーム情報', 
            desc: 'Showmore e-commerce 出店プラットフォームには完全なデータ管理システムがあり、加盟店がリアルタイムのデータ監視と分析を実現し、将来のビジネス上の意思決定において重要な役割を果たすことができます。' 
          }
        ],
      },
      {
        src: require("@/assets/homepage/home_buffer_bg.png"),
        tag: '##インフルエンサー育成',
        title: 'Bufan Culture \nMedia',
        introTitle: 'Bufan Culture Media',
        subheading: 'Tik Tok エンターテイメントアンカー日本海外プロジェクト',
        detail: 'Bufan Culture Meida は、中国で広範な影響力を持つショートビデオエンターテインメント会社は、現在、傘下に多くの優秀なドサウンドエンターテインメントキャスターを抱えている。増加する海外市場の需要に対して、同社は徐々に「TikTokエンターテインメントキャスター」を日本市場に導入し、会社の業務と影響力を拡大している。',
        theme: 'プロジェクト段階の展示',
        infos: [
          { 
            img: require("@/assets/homepage/productCase/home_buffer_photo1@2x.png"), 
            title: '市場調査と企画', 
            desc: '市場のニーズを判断し、ターゲットユーザーを理解し、競合他社を調査し、日本市場に合わせたマーケティング計画とブランドプロモーション戦略を策定します。' 
          },
          { 
            img: require("@/assets/homepage/productCase/home_buffer_photo2@2x.png"), 
            title: 'アンカーが日本市場に参入', 
            desc: '日本市場に適した最適なアンカーを選択し、アンカーが現地の文化や環境に溶け込めるよう、言語、礼儀作法、習慣などの指導を含む包括的な日本語学習と文化トレーニングを提供します。' 
          },
          { 
            img: require("@/assets/homepage/productCase/home_buffer_photo3@2x.png"), 
            title: 'プロジェクト限定サービス', 
            desc: ['策划设计一按需输出专亚运营方案', '优化运营一每个主播团队配备专属优化师对直播情况进行实时优化', '视频制作一基于需求录制不同类型的视频'] 
          },
          { 
            img: require("@/assets/homepage/productCase/home_buffer_photo4@2x.png"), 
            title: '体系的な運用プロセス', 
            desc: 'ライブ ブロードキャストの計画、ライブ ブロードキャストの製品手配、シーンの構築、素材の準備、製品とスクリプトのトレーニング、起動分析、短いビデオの予熱の全プロセスをホスト/ブランドに提供し、運用ノード全体をカバーします。' 
          },
          { 
            img: require("@/assets/homepage/productCase/home_buffer_photo5@2x.png"), 
            title: 'ブランド/事業協力を実施', 
            desc: 'アンカーは日本市場でブランドの認知度と影響力を確立した後、企業の収益性とブランドの影響力を向上させるために、商業プロモーションやスポンサーシップのためにさまざまなブランドや商業団体と積極的に協力しました。' 
          }
        ],
      },
      {
        src: require("@/assets/homepage/home_yali_bg.png"),
        tag: '##製品運営代行',
        title: 'Thai Food',
        introTitle: '丫粒噪咖',
        subheading: 'タイレストラン 本格タイ料理パッケージ',
        detail: '丫粒噪咖 は、ヘルシーでナチュラルなタイ料理を作ることに重点を置いているレストランです。無添加、減油、減塩、鮮度、健康をコンセプトに、お客様に美味しく健康的なお食事をお届けいたします。今回の運営目標は、自宅で手軽に食べられるタイ料理バッグの普及促進です。',
        theme: 'プロジェクトのハイライト',
        infos: [
          { 
            img: require("@/assets/homepage/productCase/home_yali_photo1@2x.png"), 
            title: 'タイ風', 
            desc: 'タイ料理は料理との相性や見た目の美しさに細心の注意を払うため、商品プロモーションにおいては美しく魅力的なイメージを作り出すことが非常に重要です。広告や販促ポスターの色やタイポグラフィーに焦点を当てたり、お祭り風のタイ風の背景を使用したりできます。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_yali_photo2@2x.png"), 
            title: '健康の概念を強調する', 
            desc: 'タイ料理は新鮮な魚介類や野菜を選ぶ必要があり、その品質を保証するために厳選された食材はすべて高品質のメーカーのものであることが強調されています。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_yali_photo3@2x.png"), 
            title: '厳選された高品質の食材', 
            desc: 'タイ料理は新鮮な魚介類や野菜を選ぶ必要があり、その品質を保証するために厳選された食材はすべて高品質のメーカーのものであることが強調されています。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_yali_photo4@2x.png"), 
            title: '特定の消費者グループ向け', 
            desc: 'タイ料理は、エキゾチックな料理が好きな若者、健康志向の消費者、辛い料理が好きな人など、国内の消費者市場で幅広い層に支持されています。宣伝において、さまざまな消費者グループに合わせてさまざまな宣伝プログラムを設計できます。' 
          },
          { 

            img: require("@/assets/homepage/productCase/home_yali_photo5@2x.png"), 
            title: '早くて簡単/美味しい', 
            desc: 'タイ料理クッキングバッグを使用すると、料理を作る際の退屈で複雑な手順を回避し、時間とエネルギーを節約し、忙しい現代生活に利便性をもたらします。' 
          }
        ],
      }
    ]
  },
  ourAdvantage: {
    title: ['私たちの', '利点'],
    subtitle: '多様なマネタイズの創出',
    list: [
      {
        name: ['チーム管理', '個人スタジオより良い'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo1@2x.png")
      },
      {
        name: ['共創 コンテンツの高速イテ', 'レーション'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo2@2x.png")
      },
      {
        name: ['専門的なデータ分析', '的確な指導と推進'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo3@2x.png")
      },
      {
        name: ['チャネル統合', '主要ユーザーに迅速に連絡する'],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo4@2x.png")
      },
    ]
  },
  ourMission: {
    title: '我々の使命',
    subtitle: ['私たちはユーザーのための価値を創造することに尽力します', '常に変化を受け入れ、さまざまな人生経験を提供する'],
    backImg: require('@/assets/homepage/ourMission/bg_slogan@2x.png')
  },
  aboutUs: {
    title: ['ABOUT', 'US'],
    icon: require('@/assets/homepage/aboutUs/OffshoreRSS_logo_top@2x.png'),
    sutitle: '人間的に楽しみを伝えて生きる',
    picture: require('@/assets/homepage/aboutUs/pic_coop01@2x.png'),
    vision: {
      title: 'Vision',
      list: ['お客様から最も信頼されるパートナーとなる', '優れたサービス体験を提供する ', 'ビジネスの成功を支援します。']
    },
    companyProfile: {
      title: '会社概要',
      desc: 'OFFSHOREは、さまざまなインターネット企業の運用専門家をコアチームとして構成し、企業ブランド運用、製品サービス運用、インターネット有名人アンカー運用を専門とする運用サービス会社です。専門的なトレーニング、企画、コンサルティングを通じて企業の収益化を支援し、SNSなどのソーシャルチャネルを通じて製品やサービスのパフォーマンス成長を加速します。'
    }
  },
}

const data_EN = {
  topIntroduce: {
    title: 'Learn more',
    arrowSmall: require("@/assets/homepage/icon_arrow_small@2x.png"),
    isHomePage: true,
    englishName: 'ABOUT',
    name: '',
    introText: ' is an operational services company formed by a team of experienced professionals from leading internet companies, specializing in corporate brand operations, product service operations, and influencer management. Through professional training, we provide planning and consulting services to assist companies in monetization and accelerate business growth through SNS and other social media channels.',
    bottomImg: true,
    frontIntroText: 'OFFSHORE',
  },
  productIntroduce: {
    intro: {
      titleZh: 'Product Introduction',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: 'Product Introduction',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    list: [
      {
        title: 'Brand Operation',
        title_en: 'BRAND OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/pexels-darius-krause-2228183@2x.png"), title: 'Platform construction', desc: 'Building official websites for various platforms of the enterprise, as well as user/social interaction platforms.' },
          { img: require("@/assets/homepage/productIntroduction/pexels-lisa-fotios-16129877@2x.png"), title: 'Operation guidance', desc: 'Focusing on personalized creative design for various vertical industries, providing assistance and guidance for company operation and opening.' }
        ],
      },
      {
        title: 'Product Operation',
        title_en: 'PRODUCT OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/home_product1@2x.png"), title: 'Data in people’s hearts', desc: 'Efficiently integrating digital marketing strategies.' },
          { img: require("@/assets/homepage/productIntroduction/home_product2@2x.png"), title: 'Service integration', desc: 'Data-driven new retail models and service integration.' },
          { img: require("@/assets/homepage/productIntroduction/home_product3@2x.png"), title: 'Service integration', desc: 'Data in people’s hearts, efficiently integrating digital marketing strategies.' }
        ],
      },
      {
        title: 'KOL Operation',
        title_en: 'KOL OPERATION',
        infos: [
          { img: require("@/assets/homepage/productIntroduction/home_kol1@2x.png"), title: 'Global operations', desc: 'Multicultural integration and co-creation of operations for global teams.' },
          { img: require("@/assets/homepage/productIntroduction/home_kol2@2x.png"), title: 'Refined cultivation', desc: 'Refined cultivation of vertical broadcasters and development of the ecosystem.' }
        ],
      }
    ]
  },
  productCase: {
    intro: {
      titleZh: 'Product Case Studies',
      titleEn: 'service',
      titleIcon: require("@/assets/homepage/productIntroduceAndCase/daohanglantubiao_fuwu@2x.png"),
      backImg: require("@/assets/homepage/productIntroduceAndCase/pic_productcase@2x.png")
    },
    title: 'Product Case Studies',
    arrowBlue: require("@/assets/homepage/icon_arrow_blue@2x.png"),
    showingStandArray: [
      {
        title: 'Anchor showcase',
        src: require("@/assets/homepage/pic_zbyy.png")
      },
      {
        title: 'E-commerce achievement display',
        src: require("@/assets/homepage/home_buffer_photo5.png")
      }
    ],
    list: [
      {
        src: require("@/assets/homepage/chery_zhutu@2x.png"),
        title: 'Chery',
        introTitle: 'Chery',
        subheading: 'Multiple product logistics solutions',
        detail: 'Integrate vehicle inspection and analysis services, e-commerce retail, vehicle management and more into a product system to create an ecosystem of service',
        theme: 'Highlights of the project showcase',
        infos: [
          { img: require("@/assets/homepage/productCase/chery_1@2x.png"), title: 'Vehicle condition monitoring', desc: 'Chery Automobile has implemented real-time monitoring and diagnosis of cars through its vehicle condition monitoring system. This system can provide timely warnings and corresponding solutions when faults are detected, allowing consumers to enjoy a more secure and worry-free driving experience.' },
          { img: require("@/assets/homepage/productCase/chery_2@2x.png"), title: 'Driver behavior monitoring', desc: 'In addition to monitoring the vehicle status, we have also developed a driver monitoring function. This function is capable of evaluating and analyzing driving behavior, including data such as driving speed, acceleration, braking, and so on, and providing corresponding driving suggestions and optimization plans.' },
          { img: require("@/assets/homepage/productCase/chery_3@2x.png"), title: 'Online store', desc: 'We have built an online store system where consumers can quickly search for vehicles, accessories, and services, and make purchases online. Chery Automobile’s online store also offers sign-in, coupon collection, and other benefits, providing consumers with more discounts and convenience.' },
          { img: require("@/assets/homepage/productCase/chery_4@2x.png"), title: 'Community', desc: "Chery Automobile's community is a social application designed specifically for car owners. Car owners can post questions, share experiences, and exchange ideas in the community, and they can also participate in online and offline events held by Chery Automobile to meet like-minded people." },
          { img: require("@/assets/homepage/productCase/chery_5@2x.png"), title: 'Remote vehicle control', desc: 'Chery Automobile’s cloud-based intelligent remote control is an application that allows consumers to remotely control their cars at any time, such as starting the car or controlling the windows and lights. This provides car owners with a more convenient and intelligent driving experience.' },
          { img: require("@/assets/homepage/productCase/chery_6@2x.png"), title: 'Vehicle knowledge training', desc: 'Chery Automobile adheres to the principle of customer-first and is committed to providing car owners with more professional services. Therefore, Chery Automobile provides a series of training courses, including maintenance knowledge, driving skills, and more. Through training, consumers can gain a deeper understanding of cars and how to maintain them, thus enjoying a better driving experience.' },
          { img: require("@/assets/homepage/productCase/chery_7@2x.png"), title: 'Membership benefits', desc: 'Chery Automobile actively builds platforms to provide customers with better services. Chery Automobile members enjoy exclusive benefits and services, such as maintenance cards and priority repair services, creating a more comfortable and considerate car purchasing and ownership experience for customers.' },
          { img: require("@/assets/homepage/productCase/chery_8@2x.png"), title: 'Vehicle modification', desc: "Chery Automobile provides a range of modification kits and accessories that can improve a car's performance and safety. Car owners can choose different modification plans based on their preferences and needs, achieving a personalized driving experience." },
          { img: require("@/assets/homepage/productCase/chery_9@2x.png"), title: 'Special holiday event operations', desc: "Chery Automobile also actively participates in various special holiday events. For example, during major festivals such as Spring Festival and Christmas, specific models such as the Ruihu Guochao Edition will launch corresponding promotional activities to attract consumer attention and purchases. This approach not only enhances Chery Automobile's brand awareness but also benefits consumers." }
        ],
      },
      {
        src: require("@/assets/homepage/pic_biaozhi@2x.png"),
        title: 'Peugeot',
        introTitle: 'Dongfeng Peugeot.',
        subheading: 'Racing Peak Modification Experience Event',
        detail: 'The Dongfeng Peugeot Racing Peak Modification Experience Event aims to provide consumers with an interactive, fun-filled racing-themed event and strengthen the brand image, reputation, and market share through the event.',
        theme: 'Highlights of the project showcase',
        infos: [
          { img: require("@/assets/homepage/productCase/1@2x.png"), title: 'Event Planning', desc: 'Firstly, we invited a master to modify a Dongfeng Peugeot and turn it into the strongest racing car on the track. In order to let everyone feel the real power of this car, we will arrange a track day experience next, inviting fans and drivers to participate' },
          { img: require("@/assets/homepage/productCase/2@2x.png"), title: 'Driver safety training', desc: 'On the day of the track experience, in addition to providing the experience of high-speed driving, we will also provide safe driving training for all participants. Through this approach, everyone can better understand the vehicle’s performance and driving skills while enhancing their awareness of safe driving.' },
          { img: require("@/assets/homepage/productCase/3@2x.png"), title: 'Racing Competition', desc: "We have arranged professional racing drivers and teams to participate in the competition, and set up venues and props to make the competition more interesting and visually appealing, attracting the attention of the audience. Through the performance of the racing drivers and the results of the competition, we aim to broaden consumers' impression of Dongfeng Peugeot's brand." },
          { img: require("@/assets/homepage/productCase/4@2x.png"), title: 'Inviting Fans to Experience', desc: 'Finally, we will invite some fans and experience participants to share their experiences and gains from the track day, allowing more people to understand and love this Dongfeng Peugeot car.' }
        ],
      },
      {
        src: require("@/assets/homepage/home_showmore_bg.png"),
        tag: '#Product Operation',
        title: 'Showmore',
        introTitle: 'Showmore',
        subheading: 'Live Streaming E-commerce Platform',
        detail: 'Showmore e-commerce platform is a powerful and easy-to-use e-commerce solution aimed at helping businesses quickly build online stores, achieve business transformation and expansion. Its highlights include strong conversion via live streaming, website templates, merchant integration, Line Pay payment methods, PandaGo logistics platform, multi-temperature layer delivery, data management, etc. By using these features, merchants can easily create their own e-commerce platform.',
        theme: 'Highlights of the project showcase.',
        infos: [
          { img: require("@/assets/homepage/productCase/home_showmore_photo1@2x.png"), title: 'Strong Conversion Through Live Streaming', desc: 'Showmore e-commerce platform helps merchants to master cross-border media traffic. By attracting more consumers through live streaming, merchants can increase conversion rates and thereby increase sales revenue.' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo2@2x.png"), title: 'Diverse Website Templates', desc: 'Showmore provides a wide range of website templates that can help merchants quickly create their own online stores. Merchants can choose templates that suit their needs and brand image.' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo3@2x.png"), title: 'Satisfying Multiple Payment/Settlement Needs', desc: "Showmore e-commerce platform supports the world's leading online payment method - LinePay. Users can easily activate online payment functions, providing a more convenient, fast, and secure online payment experience" },
          { img: require("@/assets/homepage/productCase/home_showmore_photo4@2x.png"), title: 'PandaGo Logistics Platform', desc: 'Showmore e-commerce platform has partnered with the internationally renowned logistics company PandaGo to provide users with stable, efficient, and convenient logistics and delivery services, ensuring optimal safety, speed, cost, and efficiency for goods.' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo5@2x.png"), title: 'Multi-Temperature Delivery', desc: 'Showmore e-commerce platform supports multi-level, multi-temperature delivery services, providing users with the best delivery solutions for different products and maximizing product quality and freshness.' },
          { img: require("@/assets/homepage/productCase/home_showmore_photo6@2x.png"), title: 'Integrated Management of Multi-Platform Data', desc: 'Showmore e-commerce platform has a comprehensive data management system that can help merchants achieve real-time data monitoring and analysis, playing an important role in future business decisions.' }
        ],
      },
      {
        src: require("@/assets/homepage/home_buffer_bg.png"),
        tag: '#KOL Operation',
        title: 'Bufan Culture Media',
        introTitle: 'Bufan Culture Media',
        subheading: 'TikTok Entertainment Anchor in Japan Project for Douyin',
        detail: "Bu Fan Culture is a widely influential short video entertainment company in China, currently with numerous outstanding entertainment anchors on Douyin. In response to the growing demand in overseas markets, the company is gradually introducing 'TikTok Entertainment Anchors' into the Japanese market to expand the company's business and influence.",
        theme: 'Project Stage Demonstration',
        infos: [
          { img: require("@/assets/homepage/productCase/home_buffer_photo1@2x.png"), title: 'Market research and planning', desc: 'Entail identifying market demand, understanding target users, investigating competitors, and formulating marketing plans and brand promotion strategies suitable for the Japanese market.' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo2@2x.png"), title: 'Entry of anchors into the Japanese market', desc: 'Select and preferentially choose anchors who are suitable for the Japanese market, providing them with comprehensive Japanese language learning and cultural training, including guidance on language, etiquette, customs and other aspects, to help the anchors integrate into the local culture and environment.' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo3@2x.png"), title: 'Exclusive services for project teams', desc: [' Planning and design - output professional operation plans as needed', 'Optimized operation - each anchor team is equipped with a dedicated optimization specialist to optimize the live broadcast situation in real time', 'Video production - record different types of videos based on needs.'] },
          { img: require("@/assets/homepage/productCase/home_buffer_photo4@2x.png"), title: 'Systematic operational processes', desc: 'Provide a full process for live broadcast planning, live product organization, scene setup, material preparation, product and script training, deployment analysis, and short video preheating for anchors/brands, covering the entire operational cycle' },
          { img: require("@/assets/homepage/productCase/home_buffer_photo5@2x.png"), title: 'Undertake brand and business collaborations', desc: "After the anchor establishes brand awareness and influence in the Japanese market, they actively cooperate with various brands and commercial organizations for business promotion and sponsorship, improving the company's profitability and brand influence." }
        ],
      },
      {
        src: require("@/assets/homepage/home_yali_bg.png"),
        tag: '#Product Operation',
        title: 'Thai Food',
        introTitle: 'Ya Li Zao Ka',
        subheading: 'Authentic Thai cuisine package from Thai restaurant Ya Li Zao Ka. ',
        detail: 'We are a restaurant focused on producing healthy and natural Thai cuisine. Our philosophy is to ensure that our customers are provided with tasty and healthy meals that are free of additives, low in oil and salt, and use fresh ingredients. Our current promotional goal is to advertise a convenient and quick Thai cuisine package that can be enjoyed at home.',
        theme: 'Highlights of the project',
        infos: [
          { img: require("@/assets/homepage/productCase/home_yali_photo1@2x.png"), title: 'Thai Culture', desc: 'Thai cuisine places a lot of emphasis on the combination and presentation of dishes, so creating an attractive and appealing image in product promotion is very important. The use of color and layout in advertising and promotional posters can be emphasized, or a festive Thai-style background can be used.' },
          { img: require("@/assets/homepage/productCase/home_yali_photo2@2x.png"), title: 'Emphasizing the Concept of Health', desc: 'Thai cuisine is naturally healthy, and Ya Li Zao Ka also strictly adheres to the concept of health when cooking, by avoiding excessive use of oil and seasoning. Emphasizing healthier food in promotions is very popular.' },
          { img: require("@/assets/homepage/productCase/home_yali_photo3@2x.png"), title: 'Using High-Quality Ingredients', desc: 'As a Thai cuisine, it is necessary to use fresh seafood and vegetables. Emphasizing the selection of high-quality ingredients from reputable producers ensures the quality of the product.' },
          { img: require("@/assets/homepage/productCase/home_yali_photo4@2x.png"), title: 'Catering to Specific Consumer Groups', desc: 'Thai cuisine has a wide range of consumers in the domestic market, such as young people who enjoy exotic cuisine, health-oriented consumers, and those who love spicy food. We can design different promotion plans for different consumer groups in advertising.' },
          { img: require("@/assets/homepage/productCase/home_yali_photo5@2x.png"), title: 'Convenient and Quick, Restoring Deliciousness', desc: 'Using Thai cuisine cooking kits can avoid the tedious and complex steps in dish preparation, saving time and energy, which brings convenience to the busy modern life while still restoring the deliciousness of the dish.' }
        ],
      }
    ]
  },
  ourAdvantage: {
    title: ['Our Strengths', ''],
    subtitle: 'Diversified monetization of creativity.',
    list: [
      {
        name: ['Team-based management is better than individual studios.', ''],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo1@2x.png")
      },
      {
        name: ['Collaborative creativity and fast content iteration.', ''],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo2@2x.png")
      },
      {
        name: ['Professional data analysis provides accurate guidance for marketing and promotion.', ''],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_pink@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x.png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo3@2x.png")
      },
      {
        name: ['Channel integration for rapid reach of key users.', ''],
        backImg: require("@/assets/homepage/ourAdvantage/bg_card_white@2x.png"),
        icon: require("@/assets/homepage/ourAdvantage/haoping-yuankuang@2x (1).png"),
        img: require("@/assets/homepage/ourAdvantage/home_adv_photo4@2x.png")
      },
    ]
  },
  ourMission: {
    title: 'Our vision',
    subtitle: ['We are committed to creating value for our users and continuously embracing change, providing different life experiences.'],
    backImg: require('@/assets/homepage/ourMission/bg_slogan@2x.png')
  },
  aboutUs: {
    title: ['ABOUT', 'US'],
    icon: require('@/assets/homepage/aboutUs/OffshoreRSS_logo_top@2x.png'),
    sutitle: 'Humanized communication brings about the joy of living',
    picture: require('@/assets/homepage/aboutUs/pic_coop01@2x.png'),
    vision: {
      title: 'Vision',
      list: ['To become the most trusted partner of our clients', 'To provide them with excellent service experience', 'To help them achieve commercial success']
    },
    companyProfile: {
      title: 'Company Profile',
      desc: 'OFFSHORE is an operational service company, formed by a core team of operational experts from various internet companies, specializing in corporate brand operation, product service operation and Internet celebrity anchor operation. Through professional training, we assist companies in the planning and consulting of monetization, and accelerate the growth of product and service performance through channels such as SNS social media.'
    }
  }
}

export default {
  data_CN,
  data_JA,
  data_EN
}