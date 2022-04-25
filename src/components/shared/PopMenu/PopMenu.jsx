import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import {
	OptionItem,
	OptionList,
	OptionText,
	OptionWrapper,
} from 'components/shared/PopMenu/pop-menu-styled';

function PopMenu({ options, handlePopMenu }) {
	const ListRef = useRef();
	/**
	 * call the closing function of the PopMenu, when click outside.
	 * @param   {event} event the click event
	 */
	const handleClickOutside = (event) => {
		if (ListRef.current && !ListRef.current.contains(event.target)) {
			document.removeEventListener('mousedown', handleClickOutside);
			handlePopMenu();
		}
	};
	document.addEventListener('mousedown', handleClickOutside);

	return (
		<OptionList ref={ListRef}>
			{options.map((option, index) => {
				return (
					<OptionWrapper key={index}>
						{option.text != '' && <OptionText>{option.text}</OptionText>}
						<OptionItem>{option.option}</OptionItem>
					</OptionWrapper>
				);
			})}
		</OptionList>
	);
}

PopMenu.propTypes = {
	options: PropTypes.array,
	handlePopMenu: PropTypes.func,
};
PopMenu.defaultProps = {
	options: [],
	handlePopMenu: () => {},
};

export default PopMenu;
