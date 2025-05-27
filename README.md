# gwebsite

> General Website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

```
.
├── build/                                 # webpack配置文件
│   └── ...           
├── config/           
│   ├── index.js                           # 主要项目配置
│   └── ...           
├── dist/                                  # build后的打包文件
│   └── ...           
├── node_modules/                          # 依赖包管理工具
│   └── ...           
├── src/           
│   └── assets/                            # 模块资源（由webpack处理）
│       └── ...           
│   ├── common/                            # 公共组件
│   │   └── ...           
│   ├── components/                        # 公共组件
│   │   ├── common/                        # 可供其他项目直接使用的公共组件
│   │   │   └── ...                  
│   │   └── content/                       # 本项目使用的公共组件
│   │   │   └── ...             
│   ├── route/                             # 路由
│   │   └── ...           
│   ├── views/                             # 功能页面
│   │   ├── homepage/                      # 主页
│   │   │   ├── childComps/                # 子组件
│   │   │   │   └── ... 
│   │   │   └── Homepage.vue               # 主页页面
│   │   ├── productServices/               # 产品服务
│   │   │   ├── brandOperation/            # 品牌运营
│   │   │   │   ├── childComps/            # 子组件
│   │   │   │   │   └── ... 
│   │   │   │   └── BrandOperation.vue     # 品牌运营页面
│   │   │   ├── productOperation/          # 产品运营
│   │   │   │   ├── childComps/            # 子组件
│   │   │   │   │   └── ... 
│   │   │   │   └── ProductOperation.vue     # 产品运营页面
│   │   │   └── anchorOperation/           # 主播运营
│   │   │   │   ├── childComps/            # 子组件
│   │   │   │   │   └── ... 
│   │   │   │   └── AnchorOperation.vue    # 主播运营页面
│   │   ├── channelServices/               # 渠道服务
│   │   │   ├── childComps/                # 子组件
│   │   │   │   └── ... 
│   │   │   └── ChannelServices.vue        # 渠道服务页面
│   │   ├── contactUs/                     # 联系我们
│   │   │   ├── childComps/                # 子组件
│   │   │   │   └── ... 
│   │   │   └── ContactUs.vue              # 联系我们页面
│   │   ├── header/                        # Header
│   │   │   └── Header.vue                 # Header页面
│   │   └── footer/                        # Footer
│   │   │   └── Footer.vue                 # Footer页面
│   ├── App.vue                            # 主应用程序组件
│   ├── main.js                            # 应用入口文件
├── static/                                # 纯静态资源（直接复制）
├── .babelrc                               # babel 配置
├── .editorconfig                          # editor 配置
├── .gitignore                             # git忽略项
├── .postcssrc.js                          # postcss 配置
├── index.html                             # index.html模板
└── package.json                           # 构建脚本和依赖关系
```           


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
