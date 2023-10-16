import EventTitle from '../components/eventTitle/EventTitle';
import { EventVariation } from '../data';

interface EventCardProps {
  content: string;
  imageURL: string;
  link: string;
  title: string;
}

const EventCard = ({ content, imageURL, link, title }: EventCardProps) => (
  <div className="w-full h-full p-4 lg-p-8 rounded-lg border border-gray-800 bg-gray-900">
    <div className="bg-gray-800 h-48 flex items-center justify-center rounded mb-6 p-4">
      <img className="w-32 max-h-24" src={imageURL} alt="event" />
    </div>
    <div className="flex flex-col items-start">
      <EventTitle text={title} variation={EventVariation.Primary} />
      <div className="mb-8 text-white">{content}</div>
      <a href="/" className="mt-8 text-orange-500 font-light hover:underline ">
        {link}
      </a>
    </div>
  </div>
);

export default EventCard;
