//rcc
import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {prod} = this.props;


    return (
      <div className='card '>
        <img src={prod.image} alt="..." />
        <div className="card-body border-top">
            <h3 style={{fontSize: 20, height: 50}}>{prod.name}</h3>
            <p>{prod.price}$</p>
            <button className='btn bg-dark text-white'>
                Add to carts
            </button>
        </div>
      </div>
    )
  }
}
