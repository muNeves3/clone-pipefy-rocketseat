import React from 'react';

import { Container } from './styles';

import { AiFillBell } from 'react-icons/ai';

export default function Header() {
  return (
  <Container> 
    <div className="Header">
      <h1>Rocketfy</h1>
    </div>
    <div className="personal">
      <div className="profile">
      <AiFillBell  className="bell"/>
      <img src={"https://i0.wp.com/d39k3r5odlh0df.cloudfront.net/images/user-avatar-default.png?ssl=1"} alt="imagem de perfil" className="perfilImg"/>
      </div>
      <a href="#"> 
        <span> Convidar time</span>
        </a>
    </div>
  </Container>
  );
}
