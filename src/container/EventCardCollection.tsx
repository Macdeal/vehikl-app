import EventCard, { EventCardProps } from './EventCard';
import { EventVariation } from '../data';


interface EventCardCollectionProps {
  cardData: EventCardProps[];
}

const EventCardCollection = ({ cardData }: EventCardCollectionProps) => {
  const eventCards = cardData.map((items: EventCardProps) => (
    <EventCard
      content={items.content}
      imageURL={items.imageURL}
      link={items.link}
      title={items.title}
      variation={EventVariation.secondary}
    />
  ));

  return <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">{eventCards}</div>;
};

export default EventCardCollection;
