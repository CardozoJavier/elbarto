import {
  KNOWLEDGE,
  TECHNOLOGIES,
  ABOUT_PROJECT,
} from '../utils/constants';

const portfolio = {
  title: 'My frontend portfolio and more',
  description: 'Take a look to some of the projects I built for end clients or when I wanted to test others technologies.',
  projects: [
    {
      id: 'ui-library',
      title: 'UI library',
      description: 'It\'s a react components library built on storybook.',
      image: '/images/ui-kit-thumbnail.png',
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
          image: '/images/calendar.png',
          className: ABOUT_PROJECT,
        },
        {
          id: 'technologies-used',
          title: 'What technologies I used?',
          description: `I decided to use storybook to show the progress and got feedback from the UX team.<br>
          On the other hand, I mainly used react and styled-components libraries. I packed up the code with Docker to ease the deploy job to the client\'s developers.`,
          image: '/images/dropdown.svg',
          className: TECHNOLOGIES,
        },
        {
          id: 'knowledge',
          title: 'What I learned?',
          description: `I learned a little bit more about storybook and his powerful API.<br>
            I had to solve a complex state management between the components, and with that I understood the pros about redux even though I used react Context because the project size it wasn't so large.
          `,
          image: '/images/preview-structure-full.png',
          className: KNOWLEDGE,
        }
        // {
        //   id: 'code',
        //   title: 'A bit of code',
        //   description: '',
        //   image: '/images/code-inputfield.png',
        //   className: CUSTOM_SECTION_1,
        //   action: {
        //     text: 'About the code',
        //     href: '',
        //   }
        // }
      ]
    }
  ]
};

export default portfolio;
