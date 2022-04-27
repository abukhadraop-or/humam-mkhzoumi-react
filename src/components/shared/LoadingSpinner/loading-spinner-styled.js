import styledComponents from 'styled-components';

export const LoadingWrapper = styledComponents.div`
display: inline-block;
position: relative;
width: 33px;
height: 23px;

& div{
    position: absolute;
    border: 4px solid grey;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

& div:nth-child(2){
    animation-delay: -0.5s;
}

@keyframes lds-ripple{
    0% {
      top: 10px;
      left: 15px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 10px;
      left: 15px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 10px;
      left: 15px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -10px;
      left: -5px;
      width: 40px;
      height: 40px;
      opacity: 0;
    }
  }
`;

export const AnimateWrapper = styledComponents.div`

`;
