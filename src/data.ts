import gpug from './assets/homepage/gpug.svg';
import devLondon from './assets/homepage/dev-ldn.svg';
import kwjs from './assets/homepage/kwjs-logo.svg';

// TODO: temporary  data for one of the eventCard that is located near footer of the home-page : need to remove after the proper data structure is made.

enum EventVariation {
  Primary = 'section-title',
  secondary = 'card-title',
}

const tempEventCardCollectionData = [
  {
    content:
      'For all PHP developers who want to dig a bit deeper into modern day code, join us for discussions about increasing your PHP skills in a relaxed environment, supplied with drinks, food, and fun!',
    imageURL: gpug,
    link: 'View on meetup.com',
    title: 'GPUG',
  },
  {
    content:
      'Are you currently living or working in Kitchener Waterloo, and want a local group to meet people, and talk about JavaScript? That\'s what we\'re all about! Join us as we talk all things JavaScript and learn about it at our monthly events!',
    imageURL: kwjs,
    link: 'View on meetup.com',
    title: 'KW JavaScript',
  },
  {
    content:
      'Dev London is your opportunity to gather insights and get inspired by the most influential software professionals. Hear their stories, ask them questions, and network with others in the industry. Refreshments are on us!',
    imageURL: devLondon,
    link: 'View on meetup.com',
    title: 'Dev London',
  },
];

export { EventVariation, tempEventCardCollectionData };
