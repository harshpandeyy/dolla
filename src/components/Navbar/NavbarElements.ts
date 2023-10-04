import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
background:#000;
height:80px;
/* margin-top: -80px; */
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;


export const NavContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`;

export const Navlogo = styled(LinkR)`
display:flex;
background:#000;
position:absolute;
color:#fff;
font-weight:bold;
align-items:center;
text-decoration:none;
height:100%;
font-size:22px;
margin-left:24px;
`;

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:22px;
justify-content:flex-end;
width:100%;

@media screen and (max-width:768px){
    display:none;
}`;

export const NavItem = styled.div`
height:80px;

`

export const Navlinks = styled(LinkS)`
align-items:center;
color: #fff;
display:flex;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;

&.active {
    border-bottom: 3px solid #01bf71
}
`;

export const MobileIcon = styled.div`
color:#fff;
display:none;
align-items:center;
width:100%;
justify-content:flex-end;
margin-right:20px;
font-size:20px;

@media screen and (max-width:768px){
    display:flex;
}
`;


export const  NavBtn=styled.nav`
    display:none;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space:nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;