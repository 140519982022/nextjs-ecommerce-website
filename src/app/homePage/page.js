// pages/index.js
"use client"
import React from 'react';
import { CardBody, CardImg, CardText, CardTitle, Col, Container, NavLink, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PiFlowerLight } from "react-icons/pi";
import '../assets/css/homePage.css'
import '../assets/css/homeResponsive.css'
import Image from 'react-bootstrap/Image';
// import product1 from '../assets/images/product1.png'

export default function HomePage() {
    return (
        <>

            <video className='w-100 videoHeight position-relative ' muted loop autoPlay src='https://cdn.shopify.com/videos/c/o/v/e016d5b604e1492d9720409a548eed41.mp4 ' />

            <Container fluid>
                <Container>
                    <Row>
                        <Col md={8} className='mx-auto'>
                            <div className='position-absolute top-50 start-50 translate-middle text-center'>
                                <div className='fs-1 text-white'>A Mallorca Story</div>
                                <div className='fs-3 text-white'>Summer 2024</div>
                                <div>
                                    <button className='px-4 border border-0 py-2 me-4 mt-3'>Women</button>
                                    <button className='px-4 border border-0 py-2'>Men</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row>
                    <Col md={12} className='py-5'>
                        <div className='fs-3'>
                            Featured Categories
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>


            </Container>

            <Container>
                <Row>
                    <Col md={12} className='py-5'>
                        <div className='fs-3'>
                            Season's must-haves
                        </div>
                    </Col>
                </Row>

                <Row sm={12} md={12}>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_6643b154-36da-408d-9825-39e60d6a2e02_900x.jpg?v=1716820345" />
                            {/* <Image src={product1}/> */}
                            <CardBody>
                                <CardText>
                                    Womens T-Shirts & Tops
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='bgset'>
                <Container >
                    <Row>
                        <Col md={12} className='py-5'>
                            <div className='fs-3'>
                                Season's must-haves
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} lg={6} xl={6}>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className='' lg={6} xl={6}>

                            <Row className='px-4'>
                                <div className='border border-black rounded-5 border-2 flowerWidth'>


                                    <PiFlowerLight className=' fs-3' />
                                </div>
                            </Row>
                            <Row className='px-4'>

                                <div className='fs-3 py-3'>
                                    Linen, the fabric of summer
                                </div>

                                <div className='text-secondary'>
                                    Discover a natural material that creates easy-going and breezy styles.
                                </div>

                                <Row className='py-5'>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>



                                </Row>
                                <div>
                                    <NavLink><u>Shop Now</u></NavLink>
                                </div>
                            </Row>

                        </Col>


                    </Row>

                </Container>
            </Container>

            <Container fluid className='bgset my-3'>
                <Container className='' >
                    <Row className=' py-5 '>
                        
                        <Col lg={6} xl={6}>
                            <Row className='px-4'>
                                <div className='border border-black rounded-5 border-2 flowerWidth'>


                                    <PiFlowerLight className=' fs-3' />
                                </div>
                            </Row>
                            <Row className='px-4'>
                                <div className='fs-3 py-3'>
                                    Linen, the fabric of summer
                                </div>
                                <div className='text-secondary'>
                                    Discover a natural material that creates easy-going and breezy styles.
                                </div>
                                <Row className='py-5'>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_c52152f0-d23e-48ce-b572-5d9c4fabb882_2160x.jpg?v=1717534755" />
                                            {/* <Image src={product1}/> */}
                                            <CardBody>
                                                <CardText>
                                                    Womens T-Shirts & Tops
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <div>
                                    <NavLink><u>Shop Now</u></NavLink>
                                </div>
                            </Row>
                        </Col>
                        <Col md={12} lg={6} xl={6}>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/imgcol_e1104082-3e5b-4945-8e96-7f2aec101164_2160x.jpg?v=1713363824" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='bgset'>
                <Container >
                    <Row>
                        <Col md={12} className='py-5'>
                            <div className='fs-3 text-center'>
                                You didn’t hear it from us
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg variant="top" src="https://www.frankandoak.com/cdn/shop/files/2120364-4LR.01.jpg?crop=center&height=880&v=1715357630&width=672" />
                                {/* <Image src={product1}/> */}
                                <CardBody>
                                    <CardText>
                                        Womens T-Shirts & Tops
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className=' my-3'>
                <Container className='' >
                    <Row className=' py-5 '>
                        <Col sm={12} md={12} lg={6} xl={6}  className='d-flex align-items-center'>

                            <Row className='px-4'>
                                <div className='fs-1 py-3'>
                                    Inspire Better Living.
                                </div>
                                <div className='text-secondary para-txt'>
                                    Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.
                                </div>

                                <div className='py-3 fw-semibold'>
                                    <NavLink><u>Who We Are</u></NavLink>
                                </div>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <Row>

                                <Col>
                                    <Card>
                                        <Image variant="top" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213" className='position-relative ' fluid />
                                        {/* <Image src={product1}/> */}
                                        {/* <CardBody> */}
                                        <CardText className='position-absolute bottom-0 start-50 py-3 text-white translate-middle-x  translate-middle text-center'>
                                            Womens T-Shirts & Tops
                                        </CardText>
                                        {/* </CardBody> */}
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>
                                        <Image variant="top" src="https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804" className='position-relative ' fluid />
                                        {/* <Image src={product1}/> */}
                                        {/* <CardBody> */}
                                        <CardText className='position-absolute bottom-0 start-50 py-3 text-white translate-middle-x  translate-middle text-center'>
                                            Womens T-Shirts & Tops
                                        </CardText>
                                        {/* </CardBody> */}
                                    </Card>

                                </Col>
                            </Row>
                            <Row className='py-5'>

                                <Col>
                                    <Card>
                                        <Image variant="top" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263" className='position-relative ' fluid />
                                        {/* <Image src={product1}/> */}
                                        {/* <CardBody> */}
                                        <CardText className='position-absolute bottom-0 start-50 py-3 text-white translate-middle-x  translate-middle text-center '>
                                            Womens T-Shirts & Tops
                                        </CardText>
                                        {/* </CardBody> */}
                                    </Card>

                                </Col>
                                <Col>
                                    <Card>

                                        <Image variant="top" src="https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804" className='position-relative ' fluid />
                                        {/* <Image src={product1}/> */}
                                        {/* <CardBody> */}
                                        <CardText className='position-absolute bottom-0 start-50 py-3 text-white translate-middle-x  translate-middle text-center'>
                                            Womens T-Shirts & Tops
                                        </CardText>
                                        {/* </CardBody> */}
                                    </Card>

                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
}
