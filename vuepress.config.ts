import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { FileList } from './src/node/index.js'
import { githubReleasesFilesAnalysis } from "./src/node/analysis/githubReleasesFilesAnalysis/index.js";
import { cloudflarePagesDownProxy } from "./src/node/proxy/cloudflarePagesDownProxy/index.js";
import { fileUrlTreeAnalysis } from "./src/node/analysis/fileUrlTreeAnalysis/index.js";
import { huggingFaceDatasetsAnalysis } from "./src/node/analysis/huggingFaceDatasetsAnalysis/index.js";
import { vercelDownProxy } from './src/node/proxy/vercelDownProxy/index.js';
import { netlifyDownProxy } from './src/node/proxy/netlifyDownProxy/index.js';
import { giteeReleasesFilesAnalysis } from './src/node/analysis/giteeReleasesFilesAnalysis/index.js';
import { githubReposAnalysis } from './src/node/analysis/githubReposAnalysis/index.js';
import { giteeReposAnalysis } from './src/node/analysis/giteeReposAnalysis/index.js';


/**
 * 站点配置文件，没有注释的选项如果不知道有什么作用不建议修改，有注释的选项可以根据注释修改
 * */
export default defineUserConfig({
  bundler: viteBundler(),
  pagePatterns: [],
  lang: 'zh-CN',
  public: `./public`,
  // 网站标题，标题颜色可在 src/client/css/main.css 中修改
  title: '在线预览和下载',
  // 网站的简介，有助于搜索引擎收录
  description: 'FList - 将 GitHub Releases 以类似网盘的形式展示在网页上，方便用户下载开源软件。 支持视频、音频、图片、PDF 等文件的在线预览。',
  // 页面 <head> 标签内添加的额外标签。 不要修改/logo.png可以替换掉这个文件，删除logo.png会导致构建出错。
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  // 页面预加载，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // 简单来说就是，如果你的文件不多就可以打开这个选项，可以大大提高页面切换的速度，如果文件非常多就不建议打开。建议超过100个文件就不要打开这个选项。
  shouldPrefetch: true,
  // 主题配置 FileList 是 vuepress 的一个主题，文件展示的功能全部由这个主题提供。
  theme: FileList([
    // {
    //   // 挂载路径
    //   mountPath: "/",
    //   // 文件解析器，这里使用githubReleasesFilesAnalysis,可以解析github的release文件
    //   analysis: githubReleasesFilesAnalysis({
    //     // 仓库所有者的用户名
    //     user: "Roubby",
    //     // 仓库所有者的仓库名
    //     repository: "download"
    //   }),
    //   downProxy: cloudflarePagesDownProxy(),
    // },
    // {
    //   mountPath: "/",
    //   analysis: githubReleasesFilesAnalysis({ user: "Roubby", repository: "download" }),
    //   // 下载代理配置,支持多个平台，参考:https://jjaw.cn/2024/8/3/flist-config-porxy/
    //   // 这个是为了解决github的国内下载慢的问题，和跨域问题，建议配置，不然pdf，txt，md等文件因为跨域无法预览
    //   // 如果你使用的不是 cloudflare Pages 部署需要删掉这一行，因为如果不是cloudflare Pages部署，这个代理是无法正常工作的
    //   downProxy: cloudflarePagesDownProxy(),
    // },

    { //      ".mp3": "",
      mountPath: "/-薛之谦",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
        " - 我好像在哪见过你.mp3" : "https://m801.music.126.net/20240822213733/dd8391f3baf1d3a00b8a2cac426b597c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681358/3770/e3f9/2670/46767d3133a5fd930d1e6681d50c314f.mp3?authSecret=000001917a37a956011e0a3b200c1bca",
        " - 天外来物.mp3" : "https://m801.music.126.net/20240822213736/d0d773629723d5f6a29c2c180c81fc9a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/25981409748/cd40/0fa2/f472/974fdfde535427de9ff6562124722d5c.mp3?authSecret=000001917a37b2f712710a3b201726ba",
        " - 演员.mp3" : "https://m801.music.126.net/20240822213739/e0014bd2da7826ff708b95dd8d335fbb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681523/a777/e66c/684b/077b8e3242636865d62c852761ca654b.mp3?authSecret=000001917a37bf220aa20a3b201202dc",
        " - 陪你去流浪.mp3" : "https://m801.music.126.net/20240822213741/52c14adb691c5ef9519102f49d18f130/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096608584/66c7/c013/3f5d/d16fd77296c03021fb3de5c5944f8b44.mp3?authSecret=000001917a37c8c81f2c0a3b201726ba",
        " - 认真的雪.mp3" : "https://m801.music.126.net/20240822213744/bbca4195de7c09924b28ee79ca2b37df/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481673276/2ad9/6c43/d71e/fd7564a38117ac63a63b9ca14e204bb2.mp3?authSecret=000001917a37d21405780a3b201726ba",
        " - 其实.mp3" : "https://m801.music.126.net/20240822213746/199575005ed73f7c5d7158d0fa1e782b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481670731/5a67/79cb/2aed/0588897c381935c368b3de44a02677f8.mp3?authSecret=000001917a37db78064e0a3b200f20ca",
        " - 意外.mp3" : "https://m801.music.126.net/20240822213749/a3a6f2468ee785bec73227afaa83e1a9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096513814/dfa2/a0c2/6b85/90897ae3bab8780d809d472a2c279efc.mp3?authSecret=000001917a37e4e401070a3b201202dc",
        " - 那是你离开了北京的生活.mp3" : "https://m801.music.126.net/20240822213751/857eee97a285d16125fcff9c2aab0f31/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481678479/93db/898d/b16e/99e26d93896a92f9b1399685ad634137.mp3?authSecret=000001917a37edce08c10a3b20132074",
        " - 刚刚好.mp3" : "https://m801.music.126.net/20240822213753/a879e9bf7834de3fe26967040f02e93e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481675855/f399/80db/f41f/c85189b22f8fc04c808d28a3d7cb605a.mp3?authSecret=000001917a37f68117a30a3b200e23ff",
        " - 像风一样.mp3" : "https://m801.music.126.net/20240822213756/3c725653b9ad51abade03ff139ac6987/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481683134/570d/1bc3/9705/7348f908c48ba80ce92eb7fe78a88cf9.mp3?authSecret=000001917a37ffd2041f0a3b20150a3c",
        " - 解解闷.mp3" : "https://m801.music.126.net/20240822213758/e420548ac2ba433a4011d2f9b2f06ca3/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/44970642649/e3a2/94d6/dfdd/98eee590e6367ec7a1d46b06605f596f.mp3?authSecret=000001917a380a3510060a3b200b0d71",
        " - 怪咖.mp3" : "https://m801.music.126.net/20240822213801/2b19e877e48816a9e427701d7520c5fa/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481686300/16f6/ba3e/48a1/03aa9fd07a7a7398433d4bf1469d22a0.mp3?authSecret=000001917a38141d1e390a3b20132074",
        " - 动物世界.mp3" : "https://m801.music.126.net/20240822213803/2cb2f3c542a811734d119279a1945e5f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481677814/6eb4/3046/6960/9b901ab631c2d30e1a93c8967ad74e97.mp3?authSecret=000001917a381d9a0a010a3b201a23bb",
        " - 违背的青春.mp3" : "https://m801.music.126.net/20240822213806/f19942d4e64e727532cebcc624029081/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481686971/0b8c/148f/457d/c78aba1be4407180144a54b3060af73d.mp3?authSecret=000001917a38279f09f90a3b20132074",
        " - 崇拜.mp3" : "https://m801.music.126.net/20240822213808/cbf13be5a9cb0ca86cf91a82e4984128/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28757203345/4ac2/6016/418b/58b09f6afa8e0f8a0e414adbc06dd235.mp3?authSecret=000001917a38314e12b30a3b200d17a7",
        " - 野心.mp3" : "https://m801.music.126.net/20240822213810/468ef5178e49c559db5ea05f9d05a99d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096519820/ff88/7c50/8acf/37f629d41d6e9094ea6159ce0c284de5.mp3?authSecret=000001917a383a3a01800a3b201726ba",
        " - 无数.mp3" : "https://m801.music.126.net/20240822213813/9f277af47ffed1cf30b7addfb43388da/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/19244333470/5db6/b80e/2f7b/de139d45522fe8b55cd63b34b39a13c3.mp3?authSecret=000001917a38439116850a3b201202dc",
        " - 绅士.mp3" : "https://m801.music.126.net/20240822213816/8605176e39aec17cce32ceda639c7af5/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681710/e4c8/616c/5d1b/f383dfa5ba859029f93e604ca67d2b38.mp3?authSecret=000001917a384e1207690a3b200f20ca",
        " - 念.mp3" : "https://m801.music.126.net/20240822213818/0dc8fbb6a8e3a133eb1586081f0654b4/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29364618018/bf1d/94a9/234c/fb35cc2d42e2aafecb6fe90f1da52345.mp3?authSecret=000001917a3857a30fb20a3b200e23ff",
        " - 暧昧.mp3" : "https://m801.music.126.net/20240822213820/dda1597b6a42e092eaeee3876b5db2d2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481696133/a2e4/e555/ca6c/550b5a0d42452c8f5152644af6f91b36.mp3?authSecret=000001917a38611f155c0a3b200e23ff",


        // "我好像在哪里见过你.mp3": "https://m801.music.126.net/20240822142156/2f2f98f836d5796ac69dcb5dfcb4921d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681358/3770/e3f9/2670/46767d3133a5fd930d1e6681d50c314f.mp3?authSecret=0000019178a8d7161e4d0a3b201a23bb",
        // "天外来物.mp3": "https://m801.music.126.net/20240822142413/95058965b06452f67472b19b56aa1ac1/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/25981409748/cd40/0fa2/f472/974fdfde535427de9ff6562124722d5c.mp3?authSecret=0000019178aaec740f4f0a3b200c1bca",
        // "演员.mp3": "https://m801.music.126.net/20240822142721/a615a49b8e39b47bf7755d5b9f4b90ee/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681523/a777/e66c/684b/077b8e3242636865d62c852761ca654b.mp3?authSecret=0000019178adcc6606b80a3b20181cc5",
        // // "/文件树测试/文件树-测试视频1.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
        // "测试视频.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm"
      }),
      downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    },
    {
      mountPath: "/软件下载",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
           "测试视频.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
            "Snipaste-2.9.2-Beta-x64.zip": "https://dl.snipaste.com/win-x64-beta",
            "Snipaste-1.16.2-x64.zip": "https://dl.snipaste.com/win-x64",
            "Todesk":"https://dl.todesk.com/windows/ToDesk_Setup.exe",
            "LocalSend-1.15.4-windows":"https://gitee.com/xiaohong321/download/releases/download/download/LocalSend-1.15.4-windows-x86-64.exe"

      }),
      downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    },
    // 以下是没有代理的文件
    // {
    //   mountPath: "/",
    //   // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
    //   analysis: fileUrlTreeAnalysis({
    //     "markdown简单语法.md": "https://gitee.com/xiaohong321/download/releases/download/download/markdown.md",
    //     '大数据思维导图.pdf' : 'https://gitee.com/xiaohong321/download/releases/download/download/bigdatqa.pdf',
    //     '测试壁纸.jpeg' : 'https://gitee.com/xiaohong321/download/releases/download/download/pexels-photo-2792070.jpeg'
    //   }),
    //   // downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    // },
    // {
    //   mountPath: "/huggingface测试",
    //   analysis: huggingFaceDatasetsAnalysis({
    //     userName: "Open-Orca",
    //     datasetsName: "OpenOrca",
    //     branchName: "main",
    //     path: "/",
    //     //最大深度,如果文件夹有很多层最大递归解析多少层，默认10
    //     maxDeep: 3
    //   }),
    // },
    // {
    //   mountPath: "/gitee测试/发行版",
    //   analysis: giteeReleasesFilesAnalysis({
    //     user: "jja8",
    //     repository: "flist-test",
    //     direction: "desc"
    //   })
    // },
    // {
    //   mountPath: "/gitee测试/仓库",
    //   analysis: giteeReposAnalysis({
    //     user: "jja8",
    //     repository: "flist-test"
    //   }),
    // },
    // {
    //   mountPath: "/ProgrammingVTuberLogos",
    //   analysis: githubReposAnalysis({
    //     user: "Aikoyori",
    //     repository: "ProgrammingVTuberLogos",
    //   }),
    //   downProxy: cloudflarePagesDownProxy()
    // },
    // // ... 可以配置多个挂载路径和仓库，以此类推
  ])
})
