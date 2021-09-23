import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100vh;
border: 1px solid red;
padding: 30px 0;
`;


export const Header = styled.div`
display: flex;
height: 100px;
align-items: center;
margin-left: 24px;
margin-bottom: 64px;
`;


Header.Logo = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
margin-right: 20px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-right: 24px;
/* border-left:${({left})=> left && '4px solid #FCB600'}; */
`;

Wrapper.Title = styled.div`
font-family: SFProDisplay;
font-size: 16px;
line-height: 19px;
color: #2D3A45;
`;

Wrapper.Dis = styled.div`
font-size: 12px;
line-height: 14px;
text-align: center;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.5;
`;

export const Link = styled(NavLink)`
text-decoration: none;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
width: 100%;
padding: 6px 40px;
margin-bottom: 20px;
margin-right:24px;
display:flex;
align-items: center;
color: #2D3A45;
border-radius: 0 6px 6px 0;
transition: all 0.3s;
`;


export const IconWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 36px;
height: 36px;
background: #F6F6F6;
border-radius: 6px;
margin-right:9px;
`;

export const activeStyle = {
    background: "#FCB600",
    color: "white",
}

export const Logout = styled.div`
display: flex;
align-items: center;
margin-top: auto;
padding-left: 40px;
font-size: 16px;
line-height: 19px;
color: #2d3a45;
cursor: pointer;
`;