
import gpub from './assets/homepage/gpug.svg';
import taylor from './assets/homepage/taylor-otwell.jpg';
// TODO: temporary  data for one of the eventCard that is located near footer of the home-page : need to remove after the proper data structure is made.

enum EventVariation {
    Primary = 'section-title',
    secondary = 'card-title',
  }


const tempEventCardData = {
    content: 'For all PHP developers who want to dig a bit deeper into modern day code, join us for discussions about increasing your PHP skills in a relaxed environment, supplied with drinks, food, and fun!',
    imgURL : {gpub},
    link : 'View on meetup.com',
    title : 'GPUG',
}

const advisorsCardData = {
  imageURL : taylor,
  name: 'Taylor Otwell',
  position: 'founder & creator of laravel',
  socials:['Github', 'Twitter'],
}


export { 
    advisorsCardData,
    EventVariation,
    tempEventCardData,
};