import styledComponents from 'styled-components';

export const OptionItem = styledComponents.li`
z-index:2;
border-bottom: 1px solid rgba(33,37,41,0.15);
width: calc(100% - 20px);
padding: 10px;
font-size: 0.8em;
color: #828282;
cursor: pointer;

&:hover{
    background-color: #032541;
    color: white;
}
`;

export const OptionList = styledComponents.ul`
background-color: white;
list-style: none;
position: absolute;
z-index:1;
top: 18px;
border: 1px solid rgba(33,37,41,0.15);
border-radius: 3px;
padding: 0px;
min-width: 169px;
display: 'flex';
flex-direction: column;

&:before{
    content: "";
    position: absolute;
    top: -8px;
    right: 40px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
}
`;

export const OptionText = styledComponents.p`
margin: 10px 15px 5px 10px;
font-size: 0.9em;
font-weight: 600;
`;

export const OptionWrapper = styledComponents.div`

`;
