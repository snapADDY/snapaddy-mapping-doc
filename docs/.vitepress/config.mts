import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'snapAddy',
  description: 'snapAddy is a sales tool that saves you a lot of time and effort when researching and collecting contact data. Automatic maintenance of contact data in your CRM system! This reference helps customers to make a custom CRM mapping with snapAddy.',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'snapAddy Mapping Documentation' }],
    ['meta', { property: 'og:description', content: 'Comprehensive documentation for snapAddy CRM mapping configurations' }]
  ],

  themeConfig: {
    logo: {
      light: '/assets/snapAddy-logo.svg',
      dark: '/assets/snapAddy-logo-dark.svg'
    },
    siteTitle: false,
    externalLinkIcon: true,

    aside: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/getting-started' },
      { text: 'snapAddy.com', link: 'https://snapaddy.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'TEST', link: '/test' },
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Basics', link: '/basics' },
          { text: 'Integrations', link: '/integrations' }
        ]
      },
      {
        text: 'Configuration Sections',
        items: [
          { text: 'Meta', link: '/meta' },
          { text: 'Default Export', link: '/defaultExport' },
          { text: 'Visit Report', link: '/visitReport' },
          { text: 'Mappings', link: '/mappings' },
          { text: 'Variables', link: '/variables' },
          { text: 'Workflows', link: '/workflows' },
          { text: 'Components', link: '/components' },
          { text: 'Code', link: '/code' }
        ]
      },
      {
        text: 'Advanced Topics',
        items: [
          { text: 'Custom Fields', link: '/customFields' },
          { text: 'Notifications', link: '/notifications' },
          { text: 'Debugging', link: '/debugging' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/snapADDY/snapaddy-mapping-doc' }
    ],

    footer: {
      message: 'snapAddy Mapping Documentation',
      copyright: 'Copyright © 2025 snapAddy'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light-default',
      dark: 'solarized-dark'
    },
    lineNumbers: true
  }
})