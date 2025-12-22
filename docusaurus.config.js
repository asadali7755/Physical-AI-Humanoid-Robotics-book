const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Textbook on Physical AI and Humanoid Robotics',

  // 🔴 IMPORTANT: yahan apna Vercel project URL lagao
  url: 'https://ai-humanoid-robotics-book-mu.vercel.app',
  baseUrl: '/',
  trailingSlash: undefined,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'asadali7755',
  projectName: 'physical-ai-humanoid-robotics-book',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book/edit/main/',
          routeBasePath: 'docs', // Use docs path for all documentation
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: {
        alt: 'PAIHR Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Textbook',
          to: '/docs',
        },
        {
          href: 'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            { label: 'Introduction', to: '/docs' },
            { label: 'Foundations', to: '/docs/chapter1' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Panaversity', href: 'https://panaversity.org' },
            {
              label: 'AI Native Course',
              href: 'https://ai-native.panaversity.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href:
                'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book',
            },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Asad Ali. Built with Docusaurus.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};
