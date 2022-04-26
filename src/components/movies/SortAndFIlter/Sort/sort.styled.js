import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const SortWrapper = styledComponents.div`
border: 1px solid #e3e3e3;
box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
width: calc(100% - 50px);
margin: auto;
margin-bottom:15px;
border-radius: 6px;
}
`;

export const SortHeader = styledComponents.div`
border-bottom: 1px solid #e3e3e3ad;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
font-size: 1.2em;
font-weight: 600;
padding: 0 15px;
}
`;

export const SortBody = styledComponents.div`
padding: 10px 15px 20px 15px}
`;

export const SortSelect = styledComponents.select`
margin-top: 10px;
width: 100%;
height: 35px;
border-radius: 4px;
border: none;
background-color: #e4e7eb;
padding: 0 10px;
cursor: pointer;
}
`;
export const SortOption = styledComponents.option`
background-color : white;
cursor: pointer;
}
`;

export const SortText = styledComponents.span`
display: block;
`;

export const ExpandArrowImage = styledComponents.img`
width: 18px;
transform: ${(props) => (props.rotateStatus ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

ExpandArrowImage.propTypes = {
	rotateStatus: PropTypes.bool,
};
ExpandArrowImage.defaultProps = {
	rotateStatus: false,
};
