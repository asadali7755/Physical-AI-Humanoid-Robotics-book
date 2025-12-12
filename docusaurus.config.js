const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Textbook on Physical AI and Humanoid Robotics',

  // ✅ Use a valid URL for Vercel deploy
  url: 'https://physical-ai-humanoid-robotics-book.vercel.app', 
  baseUrl: '/',

  // ✅ Ignore broken links for deploy
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  favicon: 'img/favicon.ico',
  organizationName: 'asadali7755', 
  projectName: 'physical-ai-humanoid-robotics-book', 

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book/edit/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: {
        alt: 'PAIHR Logo',
        src: 'img/robot-icon.svg',
      },
      items: [
        { type: 'doc', docId: 'introduction', position: 'left', label: 'Textbook' },
        { href: 'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book', label: 'GitHub', position: 'right' },
      ],
      hideOnScroll: false,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            { label: 'Introduction', to: '/introduction' },
            { label: 'Foundations', to: '/chapter1' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Panaversity', href: 'https://panaversity.org' },
            { label: 'AI/Native Course', href: 'https://ai-native.panaversity.org' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/asadali7755/Physical-AI-Humanoid-Robotics-book' },
          ],
        },
      ],
      copyright: 'Copyright © 2025 Asad Ali. Built with Docusaurus.',
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌜',
        darkIconStyle: {},
        lightIcon: '🌞',
        lightIconStyle: {},
      },
    },

    docs: { versionPersistence: 'localStorage' },
    hideableSidebar: false,
    metadatas: [],
  },

  baseUrlIssueBanner: true,
  i18n: { defaultLocale: 'en', locales: ['en'], localeConfigs: {} },
  onDuplicateRoutes: 'warn',
  customFields: {},
  plugins: [
    // ✅ Optional: comment out or remove sitemap plugin if still causing errors
    // '@docusaurus/plugin-sitemap',
  ],
  themes: [],
  titleDelimiter: '|',
  noIndex: false,
});
