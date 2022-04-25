import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Percent,
	Svg,
	Circle,
	PercentageWrapper,
	PercentageNumber,
	PercentageSign,
} from 'components/shared/RateCircle/rate-circle.styled';

function RateCircle({ voteAverage }) {
	return (
		<Box>
			<Percent>
				<Svg>
					<Circle cx='18' cy='18' r='18' percent={190 - (113 * voteAverage) / 10}></Circle>
					<Circle cx='18' cy='18' r='18' percent={190 - (113 * voteAverage) / 10}></Circle>
				</Svg>
				<PercentageWrapper>
					<PercentageNumber>
						{voteAverage === 0 ? 'NR' : voteAverage * 10}
						{voteAverage != 0 && <PercentageSign>%</PercentageSign>}
					</PercentageNumber>
				</PercentageWrapper>
			</Percent>
		</Box>
	);
}

RateCircle.propTypes = {
	voteAverage: PropTypes.number,
};

RateCircle.defaultProps = {
	voteAverage: 0,
};
export default RateCircle;
