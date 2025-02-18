import React, { useState } from 'react'
import logo from '/vite.svg';
import './Header.css';
import { styled } from 'styled-components'


const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  background: #fafafa;
`

export const Header = () => {
  const [now, setNow] = useState(new Date());

  // setInterval(() => {
  //   setNow(new Date())
  // }, 1000)


  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <h3>Hello!!</h3>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}
