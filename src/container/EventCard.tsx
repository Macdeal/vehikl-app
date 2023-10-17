import EventTitle from '../components/eventTitle/EventTitle';
import { EventVariation } from '../data';

export interface EventCardProps {
  content: string;
  imageURL: string;
  link: string;
  title: string;
  variation?: string;
}

const EventCard = ({
  content,
  imageURL,
  link,
  title,
  variation,
}: EventCardProps) => (
    <div className="w-full h-full p-4 lg:p-8 flex flex-1 flex-col justify-between rounded-lg border border-gray-800 bg-gray-900">
      <div className="bg-gray-800 h-48 flex items-center justify-center rounded mb-6 p-4">
        <img className="w-32 max-h-24" src={imageURL} alt={title} />
      </div>
      {/* TODO: need to revert hardcodeed value after the availability of proper data. */}
      <EventTitle text={title} variation={variation || 'card-title'} />
      <div className="mb-8 text-base text-white/70">{content}</div>
      <a href="/" className="mt-8 text-orange-500 font-light hover:underline ">
        {link}
      </a>
    </div>
  );

EventCard.defaultProps = {
  variation: EventVariation.secondary
}

export default EventCard;
