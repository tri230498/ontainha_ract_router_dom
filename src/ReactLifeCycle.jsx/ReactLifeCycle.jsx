//rcc
import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    // Mặc định sẽ chạy hàm lifecycle

    constructor(props) {
        super(props);
        this.state = {
            number : 1,
            like : 1,
            count : 60,
            product: {
              id: 1,
              name: 'product 1',
              like: 1
              
            }
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(newProps,newState){
        console.log('shouldComponentUpdate');
        return true
        // false: chặn render
        // true: render
    }



  render() {
    console.log('render');
    return (
      <div className='container mt-2'>
        <h3>{this.state.count}</h3>
        <h3>Number : {this.state.number}</h3>
        <button className='btn btn-success' onClick={() => {
            this.setState({
                number: this.state.number + 1
            })
        }}>+</button>
        <h3>Like : {this.state.product.like}</h3>
        <button className='btn btn-danger' onClick={() => {
          // Ví dụ 1:
            // this.setState({
            //     like: this.state.like + 1
            // })

            //Ví dụ 2: truyền like trong 1 object 
          let product = this.state.product;
          product.like += 1;

          this.setState({
            product: {...product}
          })


        }}>+</button>
        <Child number = {this.state.number} product = {this.state.product}/>
      </div>
    )
  }
  timeout = {}
  componentDidMount() {
    // Chạy mỗi lần state hoặc props thay đổi
    // Hạn chế setState trong này, nếu có lệnh setState phải có if ( không sẽ bị vòng lặp vô tận)
    this.timeout = setInterval(() => { 
      this.setState({
        count : this.state.count -1
      })
      console.log(this.state.count)
    }, 1000)
    console.log('componentDidMount')
  }
  componentWillUnmount () {
    // WillUnmount chạy trước khi component mất khỏi giao diện
    clearInterval(this.timeout)
  }

}

/**
  static: Giúp 1 function bất kì chứa trong class và sẽ không được dùng this vì nó không liên quan class
  chỉ chứa mà thui 
  
 */
