import Switch from '../components/Switch';

const header = {
  left: [
    {
      text: 'el barto',
      type: 'image',
      href: '/',
      src: 'elbarto.png',
      className: 'header-icon'
    },
  ],
  center: [
    {
      text: 'code shop',
      type: 'link',
      href: '/code-shop'
    },
    {
      text: 'portfolio',
      type: 'link',
      href: '/portfolio'
    },
    {
      text: 'about',
      type: 'link',
      href: '/about'
    },
    {
      text: 'resume',
      type: 'link',
      href: '/resume'
    },
    {
      text: 'blog',
      type: 'link',
      href: '/blog'
    },
  ],
  right: [
    {
      text: 'contact',
      type: 'link',
      href: '/contact'
    },
    {
      text: '',
      type: 'component',
      href: '',
      component: Switch
    }
  ]
};

export default header;
