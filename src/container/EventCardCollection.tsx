import EventCard from './EventCard';
import { EventVariation } from '../data';

import { EventCardProps } from '../type';

interface EventCardCollectionProps {
  cardData: EventCardProps[];
}

const EventCardCollection = ({ cardData }: EventCardCollectionProps) => (
    <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
      {cardData.map((items) => (
        <EventCard
          content={items.content}
          imageURL={items.imageURL}
          link={items.link}
          title={items.title}
          variation={EventVariation.secondary}
        />
      ))}
    </div>
  )

export default EventCardCollection;
