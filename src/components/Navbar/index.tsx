import { Component } from "react";
import {
  Nav,
  NavContainer,
  Navlogo,
  NavItem,
  Navlinks,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

interface Props {
  toggle: () => void;
}

export default class index extends Component<Props> {
  state: {
    scrollNav: boolean;
  };
  constructor(props: any) {
    super(props);
    this.state = {
      scrollNav: false,
    };
  }

  changeNav = () => {
    if (window.scrollY >= 80) {
      this.setState({ scrollNav: true });
    } else {
      this.setState({ scrollNav: false });
    }
  };

  componentDidUpdate(): void {
    window.addEventListener("scroll", this.changeNav);
  }

  toggleHome = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav scrollNav={this.state.scrollNav}>
            <NavContainer>
              <Navlogo to="/" onClick={this.toggleHome}>
                dolla
              </Navlogo>
              <MobileIcon onClick={this.props.toggle}>
                <i className="fa-solid fa-bars"></i>
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <Navlinks
                    to="/about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    About
                  </Navlinks>
                </NavItem>
                <NavItem>
                  <Navlinks
                    to="/discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Discover
                  </Navlinks>
                </NavItem>
                <NavItem>
                  <Navlinks
                    to="/services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Services
                  </Navlinks>
                </NavItem>
                <NavItem>
                  <Navlinks
                    to="/signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Sign Up
                  </Navlinks>
                </NavItem>
              </NavMenu>

              <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
              </NavBtn>
            </NavContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  }
}
