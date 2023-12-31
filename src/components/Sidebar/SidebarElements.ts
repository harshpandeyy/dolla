import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

interface SideBarContainerProps{
    isOpen:boolean;
}

export const SidebarContainer = styled.aside<SideBarContainerProps>`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity: ${({isOpen}:any)=>(isOpen ? '100%':'0')};
top: ${({isOpen}:any)=>(isOpen ? '0':'-100%')};
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

export const CloseIcon = styled.div`
color:#fff;
`


export const SidebarWrapper = styled.div`
color:#fff;
`

export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
list-style:none;
font-size: 1.5rem;
transition: 0,2s ease-in-out;
color: #fff;
cursor:pointer;

&:hover{
    color:#01bf71;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`

export const SideBtnRoute = styled(LinkR)`
border-radius:50px;
background:#01bf71;
padding:16px 64px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background:#fff;
    color:#010606;
}`

export const SidebarMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and(max-width:480px){ 
grid-template-rows:repeat(6,60px);
}`

export const SideBtnLink = styled(LinkS)`
display:flex;
`