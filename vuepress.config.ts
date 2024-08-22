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
      mountPath: "/",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
        "我好像在哪里见过你.mp3": "https://m801.music.126.net/20240822142156/2f2f98f836d5796ac69dcb5dfcb4921d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681358/3770/e3f9/2670/46767d3133a5fd930d1e6681d50c314f.mp3?authSecret=0000019178a8d7161e4d0a3b201a23bb",
        "天外来物.mp3": "https://m801.music.126.net/20240822142413/95058965b06452f67472b19b56aa1ac1/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/25981409748/cd40/0fa2/f472/974fdfde535427de9ff6562124722d5c.mp3?authSecret=0000019178aaec740f4f0a3b200c1bca",
        "演员.mp3": "https://m801.music.126.net/20240822142721/a615a49b8e39b47bf7755d5b9f4b90ee/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481681523/a777/e66c/684b/077b8e3242636865d62c852761ca654b.mp3?authSecret=0000019178adcc6606b80a3b20181cc5",
        // "/文件树测试/文件树-测试视频1.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm",
        "测试视频.mp4": "https://github.com/jianjianai/FList/releases/download/root/test.video.2.1080p.webm"
      }),
      downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
    },
    {
      mountPath: "/",
      // 这里使用 fileUrlTreeAnalysis 文件放到对应的文件路径中
      analysis: fileUrlTreeAnalysis({
           "童话镇.mp3": "https://m801.music.126.net/20240822142811/da8574325ba105a14f5ea33af1801a6c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/44999386841/fd1e/8b86/a419/a05bc3c522a248fba2ee63d7c8d779f4.mp3?authSecret=0000019178ae8d371d840a3b2010002f",
           "一人行 - 曾舜晞.mp3": "https://m801.music.126.net/20240822143025/fd838130dec3d616e21067f20e7998ee/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45185942865/4526/9d0c/eae2/3aff9b42c141a1b2420a4c27828f1170.mp3?authSecret=0000019178b098950ec20a3b201a23bb"
      //      ".mp3": ""
      //      ".mp3": ""
      //      ".mp3": ""

      }),
    //   downProxy: cloudflarePagesDownProxy(),//如果文件树地址下载比较慢，也可以配置代理
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
