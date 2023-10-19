import EventCard from "../container/EventCard";
import Header from "../components/Header";

import { tempEventCardData, advisorsCardData } from "../data"; //
import AdvisorsCard from "../components/advisorsCard/AdvisorsCard";

const HomePage = () => (
  <div>
    <Header />
    <EventCard
      content={tempEventCardData.content}
      imageURL={tempEventCardData.imgURL.gpub}
      link={tempEventCardData.link}
      title={tempEventCardData.title}
    />
    <AdvisorsCard
      imageURL={advisorsCardData.imageURL}
      name={advisorsCardData.name}
      position={advisorsCardData.position}
      socials={advisorsCardData.socials}
    />
  </div>
);

export default HomePage;
