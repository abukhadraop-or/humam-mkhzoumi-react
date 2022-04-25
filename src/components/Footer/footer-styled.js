import styledComponents from 'styled-components';

export const FooterWrapper = styledComponents.div`
padding: 40px 0px 60px 26px;
background-color: #032541;
color: white;

@media only screen and (min-width: 850px) {
    display: flex;
    justify-content: center;
    gap: 40px;
}
`;

export const FooterSection = styledComponents.div`
margin-bottom: 35px;

&:not(:first-of-type){
    margin-top: 32px;
}
`;

export const FooterList = styledComponents.ul`
list-style: none;
padding: 0;
`;

export const FooterListItem = styledComponents.li`
width: fit-content;

&:first-of-type{
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 10px;
}

&:not(:first-of-type){
    cursor:pointer;
}
`;

export const FooterButton = styledComponents.button`
width: 222px;
height: 45px;
background-color: white;
border-radius: 5px;
border: none;
color: #235ea7;
font-weight: 700;
font-size: 1em;
margin-bottom: 29px;
cursor: pointer;
@media only screen and (min-width: 850px) {
    margin-top: 45px;
    color: rgb(1,180,228);
}
`;

export const FooterImg = styledComponents.img`
display: none;

@media only screen and (min-width: 850px) {
    display: inline-block;
    width: 130px;
    float: right;
}
`;
