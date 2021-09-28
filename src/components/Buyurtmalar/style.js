import styled from "styled-components";
import {ReactComponent as plus} from '../../assets/icons/plus.svg'
import {ReactComponent as menuH} from '../../assets/icons/menuH.svg'
import {ReactComponent as menuV} from '../../assets/icons/menuV.svg'


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const Header = styled.div`
display: flex;
background-color: white;
height: fit-content;
`;


export const Wrapper = styled.div`
display: flex;
width: ${({center})=> (center ? '100%' : '300px') };
height: 90px;
border: 1px solid #E5E5E5;
padding:10px 40px;
`;

export const Add = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

Add.Plus = styled(plus)`
width: 36px;
height: 36px;
min-width: 36px;
min-height: 36px;
background:#20D472; 
border-radius: 50%;
padding: 11px;
cursor: pointer;
`;

Add.Title = styled.div`
font-family: SFProDisplay;
font-size: 12px;
line-height: 16px;
color: #2D3A45;
margin-left: 14px;
cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
  height: 60px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  border-radius: 18px;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({active }) => (active ? 'black' : '#b7bcc0')};
  cursor: pointer;
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  width: 100px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background: #edeff3;
  border-radius: 24px;
  height: 50px;
  padding: 0 6px;
`;
export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: ${({ active }) => active && 'white'};
  color:${({ active }) => active && '#8D9BA8'} ;
  padding: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
export const MenuH = styled(menuH)`
  width: 16px;
  height: 16px;
`;
export const MenuV = styled(menuV)`
  width: 16px;
  height: 16px;
`;

