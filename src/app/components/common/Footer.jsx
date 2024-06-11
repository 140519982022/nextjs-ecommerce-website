import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { FiTruck } from "react-icons/fi";
import { PiFlowerLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { FaGrinStars } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer bg-black">
                <Container>
                    <Row className='py-5'>
                        <Col className="text-center text-sm-start">
                            <div className='text-center text-white'>
                                <FiTruck className='text-white' />
                                <h6 className="footer-heading  text-white">Free Shipping</h6>
                                <p className="footer-heading  text-white">
                                    On orders over $79.
                                </p>
                            </div>

                        </Col>

                        <Col className="text-center text-sm-start">
                            <div className='text-center text-white'>
                                <FiTruck className='text-white' />
                                <h6 className="footer-heading  text-white">Free Returns</h6>
                                <p className="footer-heading  text-white">
                                    Only keep what you love.
                                </p>
                            </div>

                        </Col>

                        <Col className="text-center text-sm-start">
                            <div className='text-center text-white'>
                                <FiTruck className='text-white' />
                                <h6 className="footer-heading  text-white">Frank Rewards</h6>
                                <p className="footer-heading  text-white">
                                    Earn points and get rewards.
                                </p>
                            </div>
                        </Col>

                        <Col className="text-center text-sm-start">
                            <div className='text-center text-white'>
                                <FiTruck className='text-white' />
                                <h6 className="footer-heading  text-white">Buy Now, Pay Later</h6>
                                <p className="footer-heading  text-white">
                                    Select Klarna at checkout.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='py-5'>
                        <Col className="text-center text-sm-start">
                            <div className='text-start'>
                                <h6 className="footer-heading  text-white">Buy Now, Pay Later</h6>
                                <CiInstagram className='text-white fw-1' />
                                <FaGrinStars className='text-white fw-1' />
                            </div>

                        </Col>
                        <Col className="text-start text-sm-start">
                            <div className='text-start '>
                                <h6 className="footer-heading  text-white">Our Story</h6>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Who we are</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Sustainable practices</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Design Ideology</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Fabrics</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Circular denim™</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Partners and factories</NavLink>
                            </div>

                        </Col>
                        <Col className="text-start text-sm-start">
                            <div className='text-start '>
                                <h6 className="footer-heading  text-white">Discover</h6>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Gift Cards</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Frank Rewards</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Give $15, Get $15</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Affiliate</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Work with us</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Our Stores</NavLink>
                            </div>

                        </Col>

                        <Col className="text-start text-sm-start">
                            <div className='text-start '>
                                <h6 className="footer-heading  text-white">Customer Care
                                </h6>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Shipping Information</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Returns & Exchanges</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Coupon Codes
                                </NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>F.A.Q.</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Terms & Conditions</NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Refund Policy
                                </NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Privacy policy
                                </NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Accessibility Statement
                                </NavLink>
                                <NavLink className="text-white" style={{ fontSize: '10px' }}>Customer Data Requests
                                </NavLink>
                            </div>

                        </Col>

                        <Col className="text-start text-sm-start">
                            <div className='text-start '>

                                <h6 className="footer-heading  text-white">Stay in touch</h6>
                                <p className='text-white'>Join our newsletter and stay in the know about new collections, outfit inspiration, sales, and more.

                                </p>
                                <form action="">
                                    <input type="email" className='bg-transparent my-3 border border-white' placeholder='  Email' />
                                    <input type="text" className='bg-transparent border border-white' placeholder='  First Name ' />
                                    <div className='my-3'>
                                    </div>
                                    <label className='text-white px-2'>I shop for
                                    </label>
                                    <input type="radio" name="ishopfor" id="" />
                                    <label className='text-white px-2'>Women
                                    </label>
                                    <input type="radio" name="ishopfor" id="" />
                                    <label className='text-white px-2'>Men
                                    </label>
                                    <input type="radio" name="ishopfor" id="" />
                                    <label className='text-white px-2'>All
                                    </label>

                                    <br />

                                    <button type="submit" className='bg-transparent text-white w-100 my-3 border border-white py-1'>Subscribe</button>

                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="text-start bg-black text-white mt-4 p-1">
                    <p className="mb-0 text-white">© Frank And Oak 2024 , All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}
