import styledComponents from 'styled-components';
import PropTypes from 'prop-types';
import threeDots from 'assets/svg/threeDots.svg';
import threeDotsBlue from 'assets/svg/threeDotsBlue.svg';

export const Card = styledComponents.div`
display:flex;
gap: 20px;
border-radius: 5px;
overflow: hidden;
border: 1px solid #ebebeb;
box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
max-height: 140px;
margin-bottom: 20px;

@media only screen and (min-width: 850px) {
    position: relative;
    display: grid;
    grid-template-rows: 5fr 1.5fr;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ebebeb;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    max-width: 315px;
    max-height: 480px;
    margin-bottom: 0px;
    height: 100%;
}
`;

export const ThreeDotsMenu = styledComponents.div`
display: none;
@media only screen and (min-width: 850px) {
    display: inline;
    z-index:1;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 1.5em;
    height: 1.5em;
    opacity:0.6;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${threeDots});
    cursor: pointer;

    &:hover{
        background-image: url(${threeDotsBlue});
        opacity:1;
    }
}
`;

export const CardImage = styledComponents.img`
width: 95px;
height: 140px;
cursor: pointer;
@media only screen and (min-width: 850px) {
    width: 100%;
    height: 100%;
}
`;

export const MovieTitle = styledComponents.h2`
font-size: 1em;
margin-top: 22px;
margin-bottom: 0px;
cursor: pointer;
&:hover{
    color: rgb(1,180,228);
}

@media only screen and (min-width: 850px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    margin: 0 0 0 10px;
}
`;

export const MovieDate = styledComponents.span`
color: #999;
font-size: 0.9em;
white-space: pre-line;
@media only screen and (min-width: 850px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1em;
    margin: 0 0 0 10px;
}
`;

export const MovieDescription = styledComponents.p`
font-size: 0.9em;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;

@media only screen and (min-width: 850px) {
display: none;
}
`;

export const Wrapper = styledComponents.div`
width: fit-content;
position: relative;
filter: ${(props) => (props.isThreeDotsClicked ? 'blur(20px)' : 'none')}
`;
Wrapper.propTypes = {
	isThreeDotsClicked: PropTypes.bool,
};
Wrapper.defaultProps = {
	isThreeDotsClicked: false,
};

export const CardWrapper = styledComponents.div`
position: relative;
&>ul{
    display:${(props) => (props.isThreeDotsClicked ? 'flex' : 'none')};
    width: max-content;
    left:${(props) => (props.isLastCardOnRight ? '10px' : '-auto')};
    right:${(props) => (props.isLastCardOnRight ? 'auto' : '10px')};
}
&>ul:before{
    display: none;
}
`;
CardWrapper.propTypes = {
	isThreeDotsClicked: PropTypes.bool,
	isLastCardOnRight: PropTypes.bool,
};
CardWrapper.defaultProps = {
	isThreeDotsClicked: false,
	isLastCardOnRight: false,
};
