import { hopeTheme as HopeTheme, navbar as Navbar, sidebar as Sidebar } from "vuepress-theme-hope";

export default HopeTheme({
  hostname: "https://xiaohejs.myhdg.top",
  author: {
    name: "小何同学",
    url: "https://github.com/xiaohe0601",
    email: "HeDianGeng0601@outlook.com"
  },
  locales: {
    "/": {
      navbar: Navbar(["/guide", "/utils", "/about"]),
      sidebar: Sidebar({
        "/guide": [
          "feature",
          "getting-started"
        ],
        "/utils": [
          "string",
          "array",
          "geometry"
        ],
        "/about": [
          "changelog",
          "discuss",
          "license",
          "xiaohe"
        ]
      })
    }
  },
  logo: "/logo.svg",
  repo: "https://github.com/xiaohe0601/xiaohejs",
  editLink: false,
  displayFooter: true,
  copyright: `MIT License | Copyright ©️ 2022 <a href="https://github.com/xiaohe0601" target="_blank">小何同学</a>`,
  iconAssets: "iconfont",
  darkmode: "toggle",
  themeColor: true,
  fullscreen: true,
  pageInfo: ["Author", "Date", "Word", "ReadingTime", "Category", "Tag"],
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      footnote: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true
    },
    copyCode: {
      duration: 1000,
      showInMobile: true,
      fancy: false
    }
  }
});