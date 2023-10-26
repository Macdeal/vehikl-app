import classNames from 'classnames';

import { EventVariation } from '../../data';
import TextAlign from '../../constants/types';

import EventTitle from '../eventTitle/EventTitle';

interface TextContainerPropsType {
	description: string;
	descriptionStyle?: string;
	title: string;
	variation: TextAlign;
}
const TextContainer = ({
	description,
	descriptionStyle,
	title,
	variation,
}: TextContainerPropsType) => {
	const container = classNames('w-full', {
		'text-center': variation === TextAlign.CENTER,
		'text-left': variation === TextAlign.LEFT,
	});
	const descriptionContainer = classNames('w-full', descriptionStyle);

	return (
		<div className={container}>
			<EventTitle text={title} variation={EventVariation.Primary} />
			<p className={descriptionContainer}>{description}</p>
		</div>
	);
};

export default TextContainer;

TextContainer.defaultProps = {
	descriptionStyle: 'text-xl lg:text-2xl',
};
