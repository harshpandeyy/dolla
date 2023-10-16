import React, { Component } from "react";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";
import { Button } from "../Button";
import { homeObjOne } from "./Data";

export default class index extends Component {
  render() {
    const {
      lightBg,
      id,
      imgStart,
      lightText,
      darkText,
      description,
      headline,
      topLine,
      buttonLabel,
      img,
      alt,
      dark,
      primary
    }={...homeObjOne}
    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart} id={id}>
              <Column1>
                <TextWrapper>
                  <TopLine lightText={lightText}>
                    {topLine}
                  </TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>
                    {description}
                  </Subtitle>
                  <BtnWrap>
                    <Button
                      //@ts-ignore
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                
                  {/* < Img src={img} alt={alt}></Img> */}
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
}
