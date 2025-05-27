const data_CN = {
  titles: 
  [
    {'name':'主页','path':'/'},      
    {'name':'产品服务','path':''},
    {'name':'渠道服务','path':'/channelServices'},
    {'name':'联系我们','path':'/contactUs'},
  ],
  service: {
    title: '产品服务',
    serviceTitles: 
    [
      {'name':'品牌运营','path':'/brandOperation'},
      {'name':'产品运营','path':'/productOperation'},  
      {'name':'主播运营','path':'/anchorOperation'},
    ]
  },
  language: {
    title: '语言切换',
    languageTitles: 
    [
      {'name':'日本語','type':'ja','nameSign':'JA', 'index': 0},  
      {'name':'中文','type':'zh-CN','nameSign':'中', 'index': 1},
      {'name':'English','type':'en-US','nameSign':'EN', 'index': 2}  
    ],
  },
  src: {
    arrowBlue: require("@/assets/header/icon_arrow_blue@2x.png"),
    arrowTop: require("@/assets/header/arrow_top@2x.png")
  }
}

const data_JA = {
  titles: 
  [
    {'name':'ホームページ','path':'/'},      
    {'name':'サービス内容','path':''},
    {'name':'チャネル','path':'/channelServices'},
    {'name':'お問い合わせ','path':'/contactUs'},
  ],
  service: {
    title: 'サービス内容',
    serviceTitles: 
    [
      {'name':'製品の運営','path':'/brandOperation'},
      {'name':'ブランド運営','path':'/productOperation'},  
      {'name':'アンカー操作','path':'/anchorOperation'},
    ]
  },
  language: {
    title: '言語を切り替える',
    languageTitles: 
    [
      {'name':'日本語','type':'ja','nameSign':'日','index': 0},    
      {'name':'中文','type':'zh-CN','nameSign':'中','index': 1},
      {'name':'English','type':'en-US','nameSign':'EN','index': 2},
    ],
  },
  src: {
    arrowBlue: require("@/assets/header/icon_arrow_blue@2x.png"),
    arrowTop: require("@/assets/header/arrow_top@2x.png")
  }
}

const data_EN = {
  titles: 
  [
    {'name':'Homepage','path':'/'},      
    {'name':'Product Service','path':''},
    {'name':'Channel Service','path':'/channelServices'},
    {'name':'Contact Us','path':'/contactUs'},
  ],
  service: {
    title: 'Product Service',
    serviceTitles: 
    [
      {'name':'Brand Operation','path':'/brandOperation'},
      {'name':'Product Operation','path':'/productOperation'},  
      {'name':'Anchoring Operation','path':'/anchorOperation'},
    ]
  },
  language: {
    title: 'Switch Language',
    languageTitles: 
    [
      {'name':'日本語','type':'ja','nameSign':'日','index': 0},    
      {'name':'中文','type':'zh-CN','nameSign':'中','index': 1},
      {'name':'English','type':'en-US','nameSign':'EN','index': 2},
    ],
  },
  src: {
    arrowBlue: require("@/assets/header/icon_arrow_blue@2x.png"),
    arrowTop: require("@/assets/header/arrow_top@2x.png")
  }
}

export default {
  data_CN,
  data_JA,
  data_EN
}