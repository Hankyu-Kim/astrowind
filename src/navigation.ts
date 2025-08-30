import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'System Modeling',
      links: [
        {
          text: 'Dynamics',
          href: getPermalink('dynamics', 'post'),
        },
        {
          text: 'Electronic circuits',
          href: getPermalink('electronic-circuits', 'post'),
        },
        {
          text: 'Electromechanical',
          href: getPermalink('electromechanical', 'post'),
        },
        {
          text: 'Heat transfer',
          href: getPermalink('heat-transfer', 'post'),
        },
      ],
    },
    {
      text: 'Control',
      links: [
        {
          text: 'Automatic Control',
          href: getPermalink('/'),
        },
        {
          text: 'PID Control',
          href: getPermalink('/'),
        },
        {
          text: 'Dynamic Compensator',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: 'PhysicalAI',
      links: [
        {
          text: 'ACT',
          href: getPermalink('/'),
        },
        {
          text: 'Diffusion Policy',
          href: getPermalink('/'),
        },
        {
          text: 'RT-2',
          href: getPermalink('/'),
        },
        {
          text: 'OpenVLA',
          href: getPermalink('/'),
        },
        {
          text: 'Pi0',
          href: getPermalink('/'),
        },
      ],
    },
        {
      text: 'RL',
      links: [
        { text: 'Q-Learning',
          href: getPermalink('/'),
        },
        { text: 'Policy Gradient',
          href: getPermalink('/'),
        },
        { text: 'Actor-Critic',
          href: getPermalink('/'),
        },
        { text: 'TRPO',
          href: getPermalink('/'),
        },
        { text: 'PPO',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: 'Contact',
      href: 'homes/connect',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/Hankyu-Kim"> Hankyu Kim</a> · All rights reserved.
  `,
};
