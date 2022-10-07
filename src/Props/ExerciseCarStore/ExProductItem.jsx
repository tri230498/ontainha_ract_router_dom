//rcc
import React, { Component } from 'react'

export default class ExProductItem extends Component {
  render() {

    let {prod, xemChiTiet} = this.props;


    return (
      <div className='card'>
        <img src={prod.img} alt="..." />
        <div className="card-body">
            <p>{prod.name}</p>
            <p>{prod.price}</p>
            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                xemChiTiet(prod)
            }}>Detail</button>
        </div>
      </div>
    )
  }
}
