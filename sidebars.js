/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  textbookSidebar: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics Textbook',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Foundations',
          items: [
            'chapter1',
            'chapter2',
            'chapter3'
          ],
        },
        {
          type: 'category',
          label: 'Core Technologies',
          items: [
            'chapter4',
            'chapter5'
          ],
        },
        {
          type: 'category',
          label: 'Interaction and Applications',
          items: [
            'chapter6',
            'chapter7'
          ],
        },
      ],
    },
  ],
};
