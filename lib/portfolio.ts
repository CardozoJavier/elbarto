import {
  KNOWLEDGE,
  TECHNOLOGIES,
  ABOUT_PROJECT,
  ABOUT_LANDING_PROJECT,
  LANDING_KNOWLEDGE,
  LANDING_TECHNOLOGIES,
  LANDING_TECHNOLOGIES_ACCESSORY,
} from '../utils/constants';
import getDeviceType from '../utils/getDeviceType';

const device = getDeviceType();

const portfolio = {
  title: 'My frontend portfolio and more',
  description: 'Take a look to some of the projects I built for end clients or when I tested others technologies.',
  projects: [
    {
      id: 'ui-library',
      title: 'UI library',
      description: 'It\'s a react components library built on storybook.',
      image: `/images/hero-jampp-thumbnail.svg`,
      alt: 'ui kit image',
      technologies: {
        title: 'Technologies used:',
        list: ['React.js', 'Storybook', 'Docker', 'Webpack'],
      },
      sections: [
        {
          id: 'client',
          title: 'What the client needed?',
          description: 'A react components library that are easy to extends and re-use.', 
          image: `/images/jampp-${device}.svg`,
          className: ABOUT_PROJECT,
        },
        {
          id: 'technologies-used',
          title: 'What technologies I used?',
          description: `I decided to use storybook to show the progress and got feedback from the UX team.<br>
          On the other hand, I mainly used react and styled-components libraries. I packed up the code with Docker to ease the deploy job to the client\'s developers.`,
          image: `/images/dropdown-${device}.svg`,
          className: TECHNOLOGIES,
        },
        {
          id: 'knowledge',
          title: 'What I learned?',
          description: `I learned a little bit more about storybook and his powerful API.<br>
            I had to solve a complex state management between the components, and with that I understood the pros about redux even though I used react Context because the project size it wasn't so large.
          `,
          image: `/images/jampp2-${device}.svg`,
          className: KNOWLEDGE,
        }
      ]
    },
    {
      id: 'data-privacy',
      title: 'Landing page',
      description: 'It\'s a data privacy landing page built on react, node.js, and server side rendering.',
      image: `/images/hero-landing-thumbnail.png`,
      alt: 'landing-page',
      technologies: {
        title: 'Technologies used:',
        list: ['React.js', 'Node.js', 'Webpack', 'Styled-components'],
      },
      sections: [
        {
          id: 'team-need',
          title: 'What the team needed?',
          description: 'A user friendly landing page to expose the company\'s privacy policies.',
          image: `/images/home-landing-${device}.png`,
          className: ABOUT_LANDING_PROJECT,
        },
        {
          id: 'landing-technologies',
          title: 'What technologies I used?',
          description: `I used the mercadolibre technology stack for build frontend web:<br>
            - React.js<br>
            - Node.js (SSR)<br>
            And others like:<br>
            - Styled-components<br>
            - Intersection observer API
          `,
          image: '/images/tooltip-landing-mobile.png',
          iframe: {
            src: 'https://www.mercadolibre.com.ar/privacidad',
          },
          accessory: {
            src: '/images/arrow-yellow.gif',
            className: LANDING_TECHNOLOGIES_ACCESSORY,
          },
          className: LANDING_TECHNOLOGIES
        },
        {
          id: 'landing-knowledge',
          title: 'What I learned?',
          description: 'In this project I learned to use the Intersection Observer API, which allowed me to know the page section into the viewport and let bold its title in the sidebar.',
          image: `/images/section-landing-${device}.png`,
          className: LANDING_KNOWLEDGE,
        }
      ]
    }
  ]
};

export default portfolio;
