'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Form, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart, removeCart, updateCartAddQty, updateCartMinusQty } from '../redux-toolkit/slices/cartSlice';
import axios from 'axios';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';



const ShoppingCart = () => {
  const getCartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const [promoCode, setPromoCode] = useState('');
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleApplyPromoCode = () => {
    // Implement promo code logic here (e.g., check validity, apply discount)
    setShowPromoModal(false);
  };


  useEffect(()=>{
    console.log(getCartItems)
    let totalPrice =  getCartItems.reduce((total, item) => total + (item.price * item.qty), 0);
    // console.log(totalPrice)

    setTotalPrice(totalPrice)
  },[])
  console.log("total price ")
  // console.log(total)

  return (
    <>
      <Header/>
      <Container>
        <Row className="py-5">
          <Col md={8}>
            <h2 className='text-dark'>Shopping Cart</h2>
            <hr className='text-dark' />
            {getCartItems.map((item, index) => (
              <Row key={index} className="mb-3">
                <Col md={3}>
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </Col>
                <Col md={6}>
                  <h3 className='text-dark'>{item.title}</h3>
                  <p>
                    <Button variant="outline-secondary" onClick={ () => dispatch(updateCartMinusQty(item.id)) } disabled={item.qty === 1}>-</Button>
                    {'  '}
                    {/* <span className='text-dark'>{item.qty}</span> */}
                    <input class="w-25 text-center" type="text" value={ item.qty }/>

                    {'  '}
                    <Button variant="outline-secondary" onClick={ () => dispatch(updateCartAddQty(item.id)) }>+</Button>
                  </p>
                </Col>
                <Col md={3}>
                  <p className="text-end text-dark">${(item.price * item.qty).toFixed(2)}</p>
                  <Button variant="outline-danger text-dark" onClick={ () => dispatch(removeCart(item.id))  }>Remove</Button>
                </Col>
              </Row>
            ))}
            <Button variant="outline-secondary" onClick={ () => dispatch(emptyCart())  }>Empty Cart</Button>
          </Col>
          <Col md={4}>
            <h2 className='text-dark'>Order Summary</h2>
            <hr className='text-dark'/>
            <p className='text-dark'>{getCartItems.length} Items</p>
            <p className='text-dark'>Shipping
              <DropdownButton id="shipping-dropdown" title="Standard shipping - $10.00" variant="outline-secondary">
                {/* Add other shipping options here */}
              </DropdownButton>
            </p>
            <p className='text-dark'>Promo Code
              <InputGroup className="mb-3">
                <FormControl placeholder="Enter your code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                <Button variant="outline-secondary" className='text-dark' onClick={() => setShowPromoModal(true)}>Apply</Button>
              </InputGroup>
            </p>
            <p className="text-end text-dark">Total cost: ${(totalPrice).toFixed(2)}</p>
            <Button variant="primary" size="lg" block>Checkout</Button>
          </Col>
        </Row>

        <Modal show={showPromoModal} onHide={() => setShowPromoModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className='text-dark'>Promo Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label className='text-dark'>Enter your promo code:</Form.Label>
              <Form.Control type="text-dark" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='text-dark' onClick={() => setShowPromoModal(false)}>
              Close
            </Button>
            <Button variant="primary" className='text-dark' onClick={handleApplyPromoCode}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Footer/>
    </>
  );
};

export default ShoppingCart;