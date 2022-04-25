/* eslint-disable indent */
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const Box = styledComponents.div`
position: absolute;
top: -46px;
left: 10px;
width: 44px;
height: 44px;
display: none;
align-items: center;
justify-content: center;
background-color: #081c22;
box-shadow: 0 30px 60px grba(0, 0, 0, 0.2);
border-radius: 50%;

@media only screen and (min-width: 850px) {
    display: flex;
}
`;

export const Percent = styledComponents.div`
position: relative;
left: -1px;
width: 44px;
top: 1px;
height: 44px;
`;

export const Svg = styledComponents.svg`
position: relative;
width: 44px;
height: 44px;
transform: rotate(-0.25turn);
`;

export const Circle = styledComponents.circle`
width: 38px;
height: 38px;
fill: none;
stroke-width: 3;
stroke: #000;
transform: translate(5px, 5px);
stroke-dasharray: 190;
stroke-dashoffset: 190;

&:nth-child(1){
	stroke-dashoffset: 0;
	stroke:  ${(props) =>
		props.percent <= 110.9
			? '#204529'
			: props.percent <= 144.8
			? '#423d0f'
			: props.percent === 190
			? '#666666'
			: '#481631'};
}
&:nth-child(2){
	stroke-dashoffset: ${(props) => (props.percent ? props.percent : '190')};
	stroke:  ${(props) =>
		props.percent <= 110.9 ? '#21d07a' : props.percent <= 144.8 ? '#d2d531' : '#db2360'};
}

`;
Circle.propTypes = {
	percent: PropTypes.number,
};
Circle.defaultProps = {
	percent: 190,
};

export const PercentageWrapper = styledComponents.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
`;

export const PercentageNumber = styledComponents.h2`
font-size: 17px;
margin-left: 4px;
`;

export const PercentageSign = styledComponents.sup`
font-size: 7px;`;
