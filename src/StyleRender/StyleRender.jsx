//rcc
import React, { Component } from 'react'
// Cách này css sẽ ảnh hưởng toàn bộ ứng dụng
import './Style.css';
// Dùng khi class có thể bị thay đổi bởi event từ người dùng 
import style from './StyleRender.module.css'
// Cách style trực tiếp internal: Dùng khi giá trị style bị thay đổi bởi event từ người dùng
export default class StyleRender extends Component {
  render() {
    return (
      <div className='p-3'>
        StyleRender
        <p className='color-red'>Hello cybersoft</p>

        <p className={`${style['color-blue']} display-4`}>text blue</p>

        <p style={{color: "green", padding: "15px", backgroundColor: "black", display: "inline-block"}}>text green</p>
      </div>
    )
  }
}
