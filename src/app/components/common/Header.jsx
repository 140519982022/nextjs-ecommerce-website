import React from 'react'
import { Col, NavLink, NavbarBrand, NavbarCollapse, NavbarToggle, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png';
import '../../assets/css/header.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

export default function Header() {
    return (
        <>
            {/* <header className='container-fluid'> */}
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-lg position-sticky top-0 z-3">
                <Container>
                    <NavbarBrand>
                        <Image src={logo} />
                        {/* <img src={logo} alt="logo" /> */}
                    </NavbarBrand>

                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink>Women</NavLink>
                            <NavLink >Men</NavLink>
                            <NavLink >Sale</NavLink>
                            <NavLink >OurStory</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink eventKey={2} href="#memes">
                                <IoIosSearch />
                            </NavLink>
                            <NavLink><FaRegUserCircle /></NavLink>
                            <NavLink><FaRegHeart /></NavLink>
                            <NavLink><MdOutlineLock />
                            </NavLink>

                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>

            

            {/* </header> */}

        </>
    )
}
