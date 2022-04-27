import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const SearchButton = styledComponents.button`
text-align:center;
width: calc(100% - 50px);
display:block;
margin: 20px auto;
min-height: 45px;
border-radius:50px;
border:none;
font-weight: 600;
font-size: 1em;
cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
background-color: ${(props) => (props.disabled ? '#ececec' : '#01b4e4')};
color: ${(props) => (props.disabled ? 'rgba(0,0,0,0.5)' : 'white')};
&:hover{
background-color: ${(props) => (props.disabled ? '#ececec' : '#032541')};
}
`;
SearchButton.propTypes = {
	disabled: PropTypes.bool,
};
SearchButton.defaultProps = {
	disabled: false,
};

export const AllSectionWrapper = styledComponents.div``;
