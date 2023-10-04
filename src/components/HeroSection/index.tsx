import React, { Component } from "react";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroH1,
  HeroP,
  HeroSection,
  VideoBg,
} from "./HeroSectionElements";
import Video from "../../videos/video.mp4";
import { Button } from "../Button";

export default class index extends Component {
  state: {
    hover: boolean;
  };
  constructor(props: any) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} />
        </HeroBg>
        <HeroSection>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today receive $256 in credit towards your
            next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={this.onHover}
              onMouseLeave={this.onHover}
              primary='true'
              dark='true'
            >
              Get started
              {this.state.hover ? (
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ marginLeft: "5px" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ marginLeft: "5px" }}
                ></i>
              )}
            </Button>
          </HeroBtnWrapper>
        </HeroSection>
      </HeroContainer>
    );
  }
}
