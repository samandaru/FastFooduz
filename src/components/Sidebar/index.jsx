import React from 'react'
import { Container , Header, Wrapper, Link, IconWrapper, activeStyle, Logout} from './style'
import { sidebar } from '../../utils/sidebar';
import logo from '../../assets/imgs/logo.png';
import {ReactComponent as Chiqish} from '../../assets/icons/logout.svg';

export const Sidebar = () => {
    return (
        <Container>
            <Header>
                <Header.Logo src={logo} alt="logo"/>
                <Wrapper>
                    <Wrapper.Title>Fast Food</Wrapper.Title>
                    <Wrapper.Dis>Online mahsulot sotuv</Wrapper.Dis>
                </Wrapper>
            </Header>
                <Wrapper >
                {sidebar.map(({title, Icon, path})=>(
                    <Link activeStyle={activeStyle} to={path}>
                        <IconWrapper>
                            <Icon/>
                        </IconWrapper>
                        {title}    
                    </Link>
                    ))}
                    <Logout>
                        <IconWrapper>
                            <Chiqish/>
                        </IconWrapper>
                        Chiqish
                    </Logout>
                </Wrapper>
        </Container>
    )
}

export default Sidebar
