import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, FooterLinkItems } from "./FooterElements";



export default class index extends Component {

  toggleHome = () => {
    scroll.scrollToTop();
  };
  
  render() {
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Testimonials</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Careers</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Investors</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={this.toggleHome}>
                dolla
              </SocialLogo>
              <WebsiteRights>dolla {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                  <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
      
    );
  }
}

