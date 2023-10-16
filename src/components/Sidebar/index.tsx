import React, { Component } from 'react'
import { CloseIcon, Icon, SideBtnRoute, SideBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

interface Props {
  isOpen:boolean,
  toggle: () => void
}

export default class index extends Component<Props> {
  render() {
    return (
      <SidebarContainer isOpen={this.props.isOpen}>
            <Icon onClick={this.props.toggle}>
                <CloseIcon><i className="fa-solid fa-xmark"></i></CloseIcon>
        </Icon>
        <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to="about" onClick={this.props.toggle}>
                    About
                </SidebarLink >
                    <SidebarLink to="discover" onClick={this.props.toggle}>
                    Discover
                </SidebarLink>
                    <SidebarLink to="services" onClick={this.props.toggle}>
                    Services
                </SidebarLink>
                    <SidebarLink to="signup" onClick={this.props.toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                    <SideBtnRoute to="signin" onClick={this.props.toggle}>
                    Sign in
                </SideBtnRoute>
            </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    )
  }
}
