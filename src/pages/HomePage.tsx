import EventCard from '../container/EventCard';
import Header from '../components/Header';

import { tempEventCardData } from '../data'; //

const HomePage = () => (
  <div>
    <Header />
    <EventCard
      content={tempEventCardData.content}
      imageURL={tempEventCardData.imgURL.gpub}
      link={tempEventCardData.link}
      title={tempEventCardData.title}
    />
  </div>
);

export default HomePage;
