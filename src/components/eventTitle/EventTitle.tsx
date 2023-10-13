import classNames from 'classnames';

enum Variation {
  Primary = 'section-title',
  secondary = 'card-title',
}

interface EventTitleProps {
  text: string;
  variation: string;
}

const EventTitle = ({ text, variation }: EventTitleProps) => {
  const eventTitleStyle = classNames(
    'font-semibold w-fit h-fit text-white mb-8 relative after:absolute after:contents-[] after:-bottom-3 after:w-1/2 after:h-[0.45rem] after:rounded-lg after:bg-orange-500',
    {
      'text-4xl after:left-1/4': variation === Variation.Primary,
      'text-3xl after:left-0': variation === Variation.secondary,
    }
  );

  return <h1 className={eventTitleStyle}>{text}</h1>;
};

export default EventTitle;
