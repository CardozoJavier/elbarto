const header = {
  left: [
    {
      text: 'el barto',
      type: 'image',
      href: '/',
      src: 'elbarto.png',
    },
  ],
  center: [
    {
      text: 'about',
      type: 'link',
      href: '/about'
    },
    {
      text: 'portfolio',
      type: 'link',
      href: '/portfolio'
    },
    {
      text: 'resume',
      type: 'link',
      href: '/resume'
    },
  ],
  right: [
    {
      text: 'contact',
      type: 'link',
      href: 'mailto:cardozojavier.c@gmail.com',
      passHref: true,
      target: '_blank',
    },
  ]
};

export default header;
