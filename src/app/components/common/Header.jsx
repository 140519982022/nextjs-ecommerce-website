"use client"

import React, { useEffect } from 'react'
import { Col, NavItem, NavLink, NavbarBrand, NavbarCollapse, NavbarToggle, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../assets/images/logo.png';
import imag1 from '../../assets/images/logo.png'
import '../../assets/css/header.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";

import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    // console.log(imag1);
    const cartItemCount = useSelector((state) => state.cart.cart)

    useEffect(() => {
        const bootstrap = import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-lg position-sticky top-0 z-3">
                <Container>
                    <NavbarBrand>
                        <Link href={'/'}><Image src={imag1.src} /></Link>
                    </NavbarBrand>

                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavItem>
                                <NavLink href='/women'>Women</NavLink>
                                <div className='megaMenu'>
                                    <Row className='p-2'>
                                        <Col md={6}>
                                            <Row className=''>
                                                <Col md={4}>
                                                    <NavLink className='fs-6'>Featured</NavLink>
                                                    <NavLink className='our-link'>New In</NavLink>
                                                    <NavLink className='our-link'>Best Sellers</NavLink>
                                                    <NavLink className='our-link'>Linen, the fabric of summer</NavLink>
                                                    <NavLink className='our-link'>The Originals</NavLink>
                                                    <NavLink className='our-link'>Workwear</NavLink>
                                                    <NavLink className='our-link'>Best of Instagram</NavLink>
                                                    <NavLink className='our-link'>Gift Cards</NavLink>
                                                    <NavLink className='our-link text-danger'>Sale</NavLink>
                                                </Col>
                                                <Col md={4}>
                                                    <div>
                                                        <NavLink className='fs-6'>Clothing</NavLink>
                                                        <NavLink className='our-link'>Shop All</NavLink>
                                                        <NavLink className='our-link'>T-shirts & Tops</NavLink>
                                                        <NavLink className='our-link'>Blouses & Shirts
                                                        </NavLink>
                                                        <NavLink className='our-link'>Dresses & Jumpsuits</NavLink>
                                                        <NavLink className='our-link'>Skirts & Shorts</NavLink>
                                                        <NavLink className='our-link'>Swimwear
                                                        </NavLink>
                                                        <NavLink className='our-link'>Matching Sets</NavLink>
                                                        <NavLink className='our-link'>Sweaters & Cardigans</NavLink>
                                                        <NavLink className='our-link'>Blazers & Overshirts</NavLink>
                                                        <NavLink className='our-link'>Jackets & Coats
                                                        </NavLink>
                                                        <NavLink className='our-link'>Denim
                                                        </NavLink>
                                                        <NavLink className='our-link'>Pants</NavLink>

                                                    </div>

                                                </Col>
                                                <Col md={4}>
                                                    <NavLink className='fs-6'>Accessories</NavLink>
                                                    <NavLink className='our-link'>Shop All</NavLink>
                                                    <NavLink className='our-link'>Caps & Hats</NavLink>
                                                    <NavLink className='our-link'>Shoes & Boots
                                                    </NavLink>
                                                    <NavLink className='our-link'>Bags</NavLink>

                                                </Col>
                                            </Row>

                                        </Col>
                                        <Col md={6}>
                                            <Row className='p-3'>
                                                <Col md={6}>
                                                    <Image src="https://www.frankandoak.com/cdn/shop/files/DRESSES_01_1_600x.jpg?v=1715888744" fluid />
                                                </Col>

                                                <Col md={6}>
                                                    <Image src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_ea86bb3a-3987-4f5f-a049-f19784dbfa55_600x.jpg?v=1717698790" fluid/>


                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </div>

                            </NavItem>

                            <NavItem>
                                <NavLink>Men</NavLink>
                                {/* <div className='megaMenu'></div> */}
                            </NavItem>
                            <NavItem>
                                <NavLink>Sale</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>OurStory</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavLink eventKey={2} href="#memes">
                                <IoIosSearch />
                            </NavLink>
                            <NavLink><FaRegUserCircle /></NavLink>
                            <NavLink><FaRegHeart /></NavLink>
                            <NavLink class="position-relative">
                            <IoCartOutline className='fs-5'/>
                                <span class="position-absolute top-5 start-30 translate-middle badge rounded-pill bg-danger crtvalue">

                                    {
                                        (cartItemCount.length <= 9) ? cartItemCount.length : '9+'
                                    }
                                </span>
                            </NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    )
}
