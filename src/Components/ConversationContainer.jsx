import React, { Component } from "react";
import styled from "styled-components";
import ConversationBox from "./ConversationBox";

export default function AppContainer() {
  return (
    <>
      <Container>
        <ConversationBox />
      </Container>
      <BackGround/>
      <FakeHeader/>
    </>
  );
}

const Container = styled.div`
  background-color: white;
  position: absolute;
  width: 100vw;
  height: 100vh;
  max-width: 1400px;
  max-height: 850px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

const BackGround = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #d7dbd6 /**/ ;
  z-index: -2;
  display: flex;
  flex-direction: column;
`;

const FakeHeader = styled.div`
  position: absolute;
  width: 100vw;
  height: 125px;
  background-color: #752728 /*#009688*/ ;
  z-index: -1;
`;
