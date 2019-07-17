import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem
  } from "reactstrap";
  import ScrollchorItem from "./scrollchor-item";
  import Scrollspy from "react-scrollspy";
  import "./navigation.css";
  import "bootstrap/dist/css/bootstrap.min.css"


class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          hasScrolledDown: false,
          isOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
      }
    
      handleScroll() {
        const bodyScrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let scrolledDownEnough = bodyScrollTop > 75 ? true : false;
        this.setState({
          hasScrolledDown: scrolledDownEnough
        });
      }
    
      toggleNavbar() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      handleCloseCollapse() {
        if (this.state.isOpen) {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
      }
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      render() {
        const whiteBackground = this.state.hasScrolledDown
          ? "white-background navbar-border navbar navigation"
          : "navigation";
          const maskcolor = this.state.isOpen
          ? "blackBackGround"
          : ""
          const menuOpen = this.state.isOpen
          ? "fa-times"
          : "fa-navicon"
        // const fontColor = this.state.hasScrolledDown ? "blue-font" : "white-font";
        const fontColor = "white-font"
    
        return (
          <Navbar className={`${whiteBackground}` + " " + `${maskcolor}`} fixed={"top"} expand="lg">
            <NavbarBrand href="/" className={fontColor}>
              
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar}>
              <i className={`fa ${menuOpen} ${fontColor}`} />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} className={`${fontColor}`} navbar>
              <Scrollspy
                items={["about", "gps_timetable", "livestream", "videolist", "oceanwiki", "guesscard"]}
                currentClassName="active"
                className={`${fontColor} ml-auto navbar-nav`}
                navbar
              >
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#about" className="nav-link">
                    主題企劃
                  </ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#gps_timetable" className="nav-link">
                    GPS / 節目表
                  </ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#livestream" className="nav-link">
                    深海研究直播
                  </ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#videolist" className="nav-link">
                    航海筆記
                  </ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#oceanwiki" className="nav-link">
                    深海探險去
                  </ScrollchorItem>
                </NavItem>
                <NavItem onClick={this.handleCloseCollapse}>
                  <ScrollchorItem to="#guesscard" className="nav-link">
                    猜猜我是誰
                  </ScrollchorItem>
                </NavItem>
              </Scrollspy>
            </Collapse>
          </Navbar>
        );
      }
}

export default Navigation