import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartState } from './context/Context';
import Rating from './Rating';

const Filters = () => {
    const [rate, setrate] = useState(2);
    const {productState:{byStock,byFastDelivery,sort,byRating,searchQuery},productDispatch} =CartState()
    console.log("product",byStock,byFastDelivery,sort,byRating);
  return (
  <div className='filters'>
  <span className='title'>Filter Products</span>
  <span>
      <Form.Check
       inline
       label='Ascending'
       name='group1'
       type='radio'
       id={'inline-1'}
       onChange={()=>productDispatch({type:"SORT_BY_PRICE",payload:'lowtoHigh'})}
       checked={sort==='lowtoHigh'?true:false}
       />
  </span>
  <span>
      <Form.Check
       inline
       label='Descending'
       name='group1'
       type='radio'
       id={'inline-2'}
       onChange={()=>productDispatch({type:"SORT_BY_PRICE",payload:'hightoLow'})}
       checked={sort==='hightoLow'?true:false}

       />
  </span>
  <span>
      <Form.Check
       inline
       label='include out of stock'
       name='group1'
       type='radio'
       id={'inline-3'}
       onChange={()=>productDispatch({type:"FILTER_BY_STOCK"})}
  checked={byStock}
       />
  </span>
  <span>
      <Form.Check
       inline
       label='Fast Delivery only'
       name='group1'
       type='radio'
       id={'inline-4'}
       onChange={()=>productDispatch({type:"FILTER_BY_DELIVERY",payload:'hightoLow'})}
  checked={byFastDelivery}
       />
  </span>
  <span>
      <label style={{paddingRight:10}}>Rating:</label>
      <Rating rating={byRating} onClick={(i)=>productDispatch({type:"FILTER_BY_RATING",payload:i})} style={{cursor:'pointer'}}/>

  </span>
  <Button variant='light' onClick={()=>productDispatch({type:"CLEAR_FILTERS"})} >Clear Filters</Button>

  </div>)
};

export default Filters;
