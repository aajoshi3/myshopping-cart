import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import {  CartState} from "./context/Context";

const SingleProduct = (props) => {
  const {state:{cart},dispatch}=  CartState()
  return (
  <div className='products'>
      <Card>
          <Card.Img variant='top'  src={props.prod.image} alt={props.name}/>
          <Card.Body>
              <Card.Title>{props.prod.name}</Card.Title>
              <Card.Subtitle style={{paddingBottom:10}}>
                  <span>₹ {props.prod.price.split('.')[0]}</span>
                  {props.prod.fastDelivery?(
                      <div>Fast Delivery</div>
                  ):(
                      <div>4 days delivery</div>
                  )}
                  <Rating rating={props.prod.ratings}/>
              </Card.Subtitle>
              {
                  cart.some((p)=>p.id===props.prod.id)?( <Button variant='danger'  onClick={()=>{dispatch({type:'REMOVE_FROM_CART',payload:props.prod})}}>Remove from Cart</Button>):(
                    <Button disabled={!props.prod.inStock} onClick={()=>{dispatch({type:'ADD_TO_CART',payload:props.prod})}}>{!props.prod.inStock?'Out of Stock':'Add To Cart '}</Button>
                  )
              }
             
              
          </Card.Body>

      </Card>
  </div>)
};

export default SingleProduct;
