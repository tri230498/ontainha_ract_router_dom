//rcc
import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
            <th>type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>1</td>
                <td><img src="https://i.pravatar.cc/50" alt="..." /></td>
                <td>product 1</td>
                <td>1000</td>
                <td>iphone</td>
                <td>
                    mobile
                </td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Edit</button>
                </td>
            </tr> */}
          
          {arrProduct.map((prod, index) => {
            return (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>
                  <img src={prod.img} alt="..." className="w-100"/>
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.description}</td>
                <td>
                  {prod.productType}
                </td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={() => {
                    this.props.delProduct(prod.id)
                  }}>Delete</button>
                  <button className="btn btn-primary mx-2"  onClick={() => {
                    this.props.editProduct(prod);
          }}>Edit</button>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>
    );
  }
}
