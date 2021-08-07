import React from "react";
import "./style.css";
import styled from "styled-components";
import { ReactComponent as Blob } from "./blob.svg";

const HomePage = () => {
  return (
    <>
      <Blob className="blob-1" />
      <HeaderDiv>
        <div className="wrap">
          <TitleDiv>
            <Title>
              Achieving cognitive
              <br />
              enhancement through
              <br /> next-gen technology.
            </Title>
            <h2
              style={{
                fontWeight: "400",
                marginTop: "-40px",
                userSelect: "none",
              }}
            >
              Every day we’re building better tools for communicating with the
              <br />
              brain. With the right team, the applications for this technology
              <br />
              are limitless.
            </h2>
            <Button>LEARN MORE</Button>
          </TitleDiv>
          <img
            className="image"
            src="https://i.pinimg.com/originals/5b/09/a8/5b09a8031546b624ec1e06e342925ce1.png"
          />
        </div>
      </HeaderDiv>
    </>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 100px;
`;

const Title = styled.h1`
  font-size: 80px;
  cursor: default;
  user-select: none;
  margin-right: 140px;
`;

const Button = styled.button`
  height: 55px;
  width: 200px;
  background: white;
  box-shadow: 7px 7px 0px 3px #000000;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid black;
  margin-top: 20px;

  &:hover {
    background: ;
  }
`;

const TitleDiv = styled.div`
  margin-bottom: 80px;
`;
export default HomePage;
