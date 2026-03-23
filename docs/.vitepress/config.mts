import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ApexPathing Docs",
  description: 'ApexPathing Docs',
  base: '/Supernova-Docs/',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Guide', link: '/guide'}
    ],
    sidebar:[
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          { text: 'guide', link: '/guide' },
        ]
      }

    ],
    search: {
      provider: 'local'
    }
  }

})
