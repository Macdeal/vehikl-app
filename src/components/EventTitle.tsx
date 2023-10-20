import classNames from 'classnames';

import { EventVariation } from '../data';

interface EventTitleProps {
  text: string;
  variation: string;
}

const EventTitle = ({ text, variation }: EventTitleProps) => {
  const eventTitleStyle = classNames(
    'font-semibold w-fit h-fit text-white mb-8 relative after:absolute after:contents-[] after:-bottom-[0.75rem] after:w-[3rem] after:h-[0.25rem] after:rounded-lg after:bg-orange-500 after:origin-center',
    {
      'text-4xl after:left-1/2 after:-translate-x-1/2': variation === EventVariation.Primary,
      'text-3xl after:left-0': variation === EventVariation.secondary,
    }
  );

  return <h1 className={eventTitleStyle}>{text}</h1>;
};

export default EventTitle;
