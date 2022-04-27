import styledComponents from 'styled-components';

export const PageWrapper = styledComponents.div`
max-width: 1330px;
margin: auto;
@media only screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 300px auto;
    padding-left: 14px;
    }
`;

export const PageName = styledComponents.h2`
margin-left: 25px;
margin-top: 94px;
@media only screen and (min-width: 850px) {
    font-size: 1.6em;
}
`;

export const Wrapper = styledComponents.div`

}
`;
