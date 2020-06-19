// 配置
window.Config = {

  // 站点名
  SiteName: 'Nurl Status-监控系统',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785390447-f537c333a0c28774faaa0d4a',
    'm785390409-bdc6392f0a933e3be856acd9',
    'm785390441-4172b0408d2d61a3ba5b9916',
    'm785390714-ff4f5f51589fb07f2af38165',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Home',
      url: 'https://www.nurltech.eu.org/'
    },
    {
      text: 'About',
      url: 'https://www.nurltech.eu.org/about'
    }
  ]
};
