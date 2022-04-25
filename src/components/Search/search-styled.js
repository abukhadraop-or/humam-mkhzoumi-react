import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const SearchWrapper = styledComponents.div`
min-height: 48px;
position: absolute;
top:64px;
background-color: white;
width: 100%;
z-index: 2;
`;

export const SearchInputBox = styledComponents.div`
height: 48px;
width: 100%;
border-bottom: 1px #ebebeb solid;
display: flex;
align-items: center;
justify-content: center;
`;

export const SearchImg = styledComponents.img`
width: ${(props) => (props.small ? '18px' : props.smallest ? '16px' : '22px')};
margin-left:${(props) => (props.small ? '28px' : '')};
cursor:${(props) => (props.smallest ? 'pointer' : '')};
`;
SearchImg.propTypes = {
	small: PropTypes.bool,
	smallest: PropTypes.bool,
};
SearchImg.defaultProps = {
	small: false,
	smallest: false,
};

export const InputArea = styledComponents.input`
width: calc(100% - 90px);
text-indent: 5px;
font-size: 1em;
color: #acacac;
border: none;
outline:none;
height: 45px;
&:active{
    border:none;
    outline:none;
}
::placeholder {
    color: #b2b2b2;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #b2b2b2;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
   color: #b2b2b2;
  }
`;

export const ResultsList = styledComponents.ul`
background-color: white;
list-style: none;
padding: 0px;
margin: 0px;
`;

export const ResultItem = styledComponents.li`
border-bottom: 1px solid rgba(33,37,41,0.15);
padding: 5px;
font-size: 0.95em;
color: #828282;
cursor: pointer;
display: flex;
gap: 7px;

&:hover{
    background-color: #ececec;
}
`;

export const EmptySearchResult = styledComponents.div`
text-align: center;
font-weight: 700;
font-size: 1.3em;
color: grey;
background-color: white;
width: 100%;
min-height: 57px;
padding-top: 20px;
border-bottom: 1px solid rgba(33,37,41,0.15);
`;
