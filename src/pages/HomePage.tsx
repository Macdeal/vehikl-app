import { tempEventCardCollectionData } from '../data';

import EventCardCollection from '../container/EventCardCollection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Header />
    <EventCardCollection cardData={tempEventCardCollectionData} />
    <Footer />
  </div>
);

export default HomePage;
