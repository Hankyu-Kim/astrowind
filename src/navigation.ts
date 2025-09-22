import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
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
        {
          text: 'Fluid mechanics',
          href: getPermalink('fluid-systems', 'post'),
        }
      ],
    },
    {
      text: 'Control',
      links: [
        {
          text: 'Automatic Control',
          href: getPermalink('automatic-contol', 'post'),
        },
        {
          text: 'PID Control',
          href: getPermalink('pid-control', 'post'),
        },
        {
          text: 'Dynamic Compensation',
          href: getPermalink('dynamic-compensation', 'post'),
        },
      ],
    },
    {
      text: 'Robotics',
      links: [
        {
          text: 'Transformation Matrix',
          href: getPermalink('transformation-matrix', 'post'),
        },
        {
          text: 'DH Parameters',
          href: getPermalink('dh-parameters', 'post'),
        },
        {
          text: 'Analytical Inverse Kinematics',
          href: getPermalink('analytical-inverse-kinematics', 'post'),
        },
        {
          text: 'Numerical Inverse Kinematics',
          href: getPermalink('numerical-inverse-kinematics', 'post'),
        },
        {
          text: 'FABRIK',
          href: getPermalink('fabrik', 'post'),
        }
      ],
    },
    {
      text: 'PhysicalAI',
      links: [
        {
          text: 'ACT',
          href: getPermalink('act', 'post'),
        },
        {
          text: 'Diffusion Policy',
          href: getPermalink('diffusion-policy', 'post'),
        },
        {
          text: 'OpenVLA',
          href: getPermalink('openvla', 'post'),
        },
        {
          text: 'Pi0',
          href: getPermalink('pi0', 'post'),
        },
      ],
    },
    {
      text: 'More',
      links: [
        { text: 'Blog Lists',
          href: getBlogPermalink(),
        },
        { text: 'Contact',
          href: '/homes/contact',
        },
      ],
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/hankyu_kim' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/hankyukimm' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61553479105638' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Hankyu-Kim' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/Hankyu-Kim"> Hankyu Kim</a> · All rights reserved.
  `,
};
