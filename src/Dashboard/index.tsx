import React from "react";

import { 
  Container, 
  Header, 
  UserWrapper,
  UserInfo, 
  Photo, 
  User,
  UserName, 
  UserGreeting,  } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo 
          source={{ uri: 'https://avatars.githubusercontent.com/u/85463497?v=4'}}
          />
          <User>
          <UserGreeting>Olá, </UserGreeting>
          <UserName>Jones Souza</UserName>
          </User>
        </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
}
