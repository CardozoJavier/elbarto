const resume = {
  title: 'Dig a little deeper.',
  technologies: {
    title: 'Technologies',
    comfortable: {
      title: 'Day-to-day comfort',
      list: [
        'Javascript',
        'React.js',
        'Node.js',
        'Redux',
        'Jest',
        'GraphQL',
        'Webpack',
        'HTML/CSS',
        'Storybook',
        'Styled components',
        'Version control (GIT)'
      ],
    },
    experience : {
      title: 'Experience with',
      list: [
        'Typescript',
        'Next.js',
        'PostgreSQL (sequelize)',
        'MongoDB',
        'Passport.js',
      ],
    }
  },
  experience: {
    title: 'Work experience',
    row: [
      {
        title: 'Front-end developer',
        subtitle: '<a href="https://www.mercadolibre.com" target="_blank">MercadoLibre</a> | Buenos Aires, Argentina - February 2019 - Present',
        description: [
          'Added and tested UI features to asset management section in Mercadopago.',
          'Built from scratch the <a href="https://www.mercadolibre.com.ar/privacidad" target="_blank">data privacy landing page</a>.',
          'Built and testing the UI of the KYC process which getting the identity validation from users, with an impact on million of these in several countries like Argentina, Brasil, México and Chile.',
        ],
      },
      {
        title: 'Full stack developer',
        subtitle: 'Freelance | Buenos Aires, Argentina - December 2018 - April 2020',
        description: ['Development of web applications to different end clients.'],
        project: {
          title: 'Projects',
          list: [
            '<a href="https://github.com/CardozoJavier/ui-toolkit" target="_blank">UI-kit</a> A UI library with several react components build on storybook.',
            '<a href="https://github.com/CardozoJavier/proximaCopa" target="_blank">Próxima copa</a> E-commerce related to selling wines and alcoholic drinks.',
            '<a href="https://github.com/CardozoJavier/juke" target="_blank">Juke</a> It\'s a music streaming platform.',
          ]
        }
      }
    ],
  },
  education: {
    title: 'Education',
    row: [
      {
        title: 'Full stack developer',
        subtitle: '<span className="bold-text">Plataforma 5 Coding Bootcamp</span> | September 2018 - December 2018',
        description: ['600 hours of an immersive full time course in which I learned in depth about the javascript MERN stack.'],
      },
      {
        title: 'Technician in automation, control and robotics',
        subtitle: 'ITUOM | February 2013 - December 2017',
        description: [
          'An upper formation degree principally focused on electronics and programming fundamentals.',
          'GPA: 3.88',
          'Total hours: 1984',
        ],
      }
    ],
  },
  course: {
    title: 'Courses and certifications',
    list: [
      '2018 — HTML, CSS & JavaScript fundamentals — <span className="bold-text">Plataforma 5</span>',
      '2018 — Java Standard Programming J2SE 8.0 — <span className="bold-text">EducaciónIT</span>',
      '2017 — Data bases & MySQL fundamentals — <span className="bold-text">EducaciónIT</span>',
      '2017 — Management and administration of automation projects — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2017 — Programming of ABB robotic arm — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2017 — PLC networking configuration — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2016 — PLC advance programming — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2016 — PLC basic programming — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2016 — Programmable logic controller fundamentals — <span className="bold-text">Universidad Técnologica Nacional</span>',
      '2016 — Arduino programming — <span className="bold-text">EducaciónIT</span>',
      '2010 — Office full operator — <span className="bold-text">IAC</span>',
    ],
  }
};

export default resume;
