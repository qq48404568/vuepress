module.exports = {
  title:'你真牛逼',
  description:'你真牛逼的详细描述哈哈哈哈',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/app.ico' }],
    ['meta', { name: 'author', content:'vuepress介绍说明' }],
    ['meta', { name: 'keywords', content:'vuepress介绍说明，你好牛逼的哈哈哈' }],
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'about', link: '/about' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1', items: [{ text: 'Home', link: '/' },
            { text: 'about', link: '/about' },]
          },
          {
            text: 'Group2', items: [{ text: 'Home', link: '/' },
            { text: 'about', link: '/about' },]
          }
        ]
      }
    ],
    sidebar: [
      '',
      'about',
      'about1'
    ],
  }
}