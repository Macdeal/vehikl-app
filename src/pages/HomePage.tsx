import { tempEventCardCollectionData } from '../data';

import EventCardCollection from '../container/EventCardCollection';
import Header from '../components/Header';
import Footer from '../components/Footer';

import TextContainer from '../components/TextContainer';
import TextAlign from '../constants/types';

const HomePage = () => (
  <div>
    <Header />
    <EventCardCollection cardData={tempEventCardCollectionData} />
    <TextContainer title="Hello World" description="#include stdio.h" variation={TextAlign.CENTER} />
    <Footer />
  </div>
);

export default HomePage;
