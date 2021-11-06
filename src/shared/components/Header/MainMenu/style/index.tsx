import styled from 'styled-components';


export const BellButton = styled.div`
padding: 10px;
background-color: #212529;
/* &:hover {
    background-color: #ffffff;
    box-shadow: 5px 0 5px -5px rgba(51, 51, 51, 0.4), -5px 0 5px -5px rgba(51, 51, 51, 0.4) !important;
} */
`

export const UserProfileWrapper = styled.div`
    background-color: #212529 ;
    color: rgba(255, 255, 255, 0.75);
    &:hover {
        color: rgba(255, 255, 255, 0.55);
    }
    /* background-color: #f8f9fa; */
    /* border-right: 2px solid #f5f5f5;
    border-left: 2px solid #f5f5f5; */
    font-family: 'Roboto', sans-serif;
    min-width: 10rem;
`
export const CardBootstrap = styled.div`
    /* background-color: #fcfcfc; */
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 7px !important;
    padding-bottom: 8px !important;
    
    /* &:hover {
        background-color: #ffffff;
        box-shadow: 5px 0 5px -5px rgba(51, 51, 51, 0.4), -5px 0 5px -5px rgba(51, 51, 51, 0.4);
  } */
`
export const NameUserProfile = styled.h4`
text-decoration: none;
font-size: 1.4vw;
padding-right: 15px !important;
padding-left: 8px;
background-color: #212529 ;
color: rgba(255, 255, 255, 0.75);
&:hover {
    color: rgba(255, 255, 255, 0.55);
}
`
