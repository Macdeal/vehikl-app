import { tempEventCardCollectionData } from '../data';

import EventCardCollection from '../container/EventCardCollection';
import Header from '../components/Header';

const HomePage = () => (
    <div>
      <Header />
      <EventCardCollection cardData={tempEventCardCollectionData} />
    </div>
  );

export default HomePage;
