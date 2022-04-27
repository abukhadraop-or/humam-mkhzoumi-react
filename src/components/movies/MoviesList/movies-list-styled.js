import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const MoviesWrapper = styledComponents.div`
width:${(props) => (props.moviesAndButton ? 'calc(100% - 50px)' : '100%')};
margin: 40px auto;
@media only screen and (min-width: 850px) {
    margin: ${(props) => (props.moviesAndButton ? '103px 0px 41px 0px' : '41px 0px')};
    display:${(props) => (props.moviesAndButton ? 'flex' : 'grid')};
    grid-template-columns: repeat(2, 48%);
    flex-direction:${(props) => (props.moviesAndButton ? 'column' : '')};
    gap: 27px;
    & button{
        width: 100%;
    }
}
@media only screen and (min-width: 910px) {
    grid-template-columns: repeat(3, 31%);
}
@media only screen and (min-width: 1060px) {
    grid-template-columns: repeat(4, 23%);
}
@media only screen and (min-width: 1260px) {
    grid-template-columns: repeat(5, 18%);
}
`;
MoviesWrapper.propTypes = {
	moviesAndButton: PropTypes.bool,
};

MoviesWrapper.defaultProps = {
	moviesAndButton: false,
};

export const LoadMoreButton = styledComponents.button`
width: 100%;
text-align: center;
display: block;
margin: 20px auto;
min-height: 48px;
border-radius: 6px;
border: none;
font-weight: 700;
font-size: 1.3em;
cursor: default;
background-color: rgba(1,180,228);
color: white;
cursor: pointer;
&:hover{
    color:black;
}
`;
