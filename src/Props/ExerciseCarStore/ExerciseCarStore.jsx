//rcc 
// Đây là component cha chưa tất cả các component con 
import React, { Component } from 'react'
import ExModal from './ExModal'
import ExProductList from './ExProductList'

export default class ExerciseCarStore extends Component {

    // Đặt state và setState tại component chứa các component con có liên quan đến state và setState
    state = {
        modalState: {
            id: 1,
            name: "black car",
            img: "./img/products/black-car.jpg",
            price: 1000,
          },
    }
    // Hàm setState 
    xemChiTiet = (sanPhamClick) => {
        // console.log(sanPhamClick);
        this.setState({
            modalState : sanPhamClick
        })
    }

  render() {

    return (
      <div className='container'>
        <h3>ExerciseCarStore</h3>
        <ExModal modalState = {this.state.modalState}/>
        <ExProductList xemChiTiet={this.xemChiTiet}/>
      </div>
    )
  }
}
