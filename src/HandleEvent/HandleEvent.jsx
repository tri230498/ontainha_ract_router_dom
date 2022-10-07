//rcc
// function nặc danh không đăc tên viết ngay trên thẻ
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        alert("hello cybersoft")
    };

    showMessage = (name) => {
            
        console.log('Hello ', name);
        alert('hello ' + name)
    }

    // thuộc tính object chấm tới các thuộc tính để render
    userLogin = {
        username: "Trí",
        password: "123"
    }

    // render ra giao diện chỉ render primitive value: string, boolean, number, jsx (thẻ html của react)
  render() {
    return (
      <div className='container'>
        <h3>Handle Event</h3>
        <p>username: {this.userLogin.username}</p>
        <p>password: {this.userLogin.password}</p>
        <button className='btn btn-danger' onClick={(e) => {
            // alert('Hello')
            // Gọi hàm khác
            this.showMessage('Trí')
        }}>Click</button>

        <button className='btn btn-success ms-2' onClick={this.handleClick}>Click</button>

        <hr />
        <h3>Handle event change</h3>
        <input type="text" className='form-control w-25' id='id' name='id' onChange={(e) => {
            //e.target: chính là thẻ input
            var tagInput = e.target;

            console.log('id: ', tagInput.id);
            console.log('value: ', tagInput.value);
            console.log('name: ',  tagInput.name);


        }}/>
      </div>
    )
  }
}
