// Giá trị thay đổi gọi là State
import React, { Component } from "react";
 
export default class DemoState extends Component {
  username = "TriNguyen";
  /* 
    status = false; // false: Chưa đăng nhập, true: Đã đăng nhập
   
    this.state: là thuộc tính có sẵn được kế thừa từ class Component của thư viện reactjs
    Các giá trị thay đổi trên giao diện sẽ được chứa trong thuộc tính của this.state
  */

state = {
  status : false
}

  renderLogin = () => {
    // Nếu if có return thì không cần if else
    if (this.state.status) {
        return <span className="text-white">{this.username}</span>
    }
        return <button className="btn btn-success" onClick={(e) => {
          e.preventDefault(); // ngăn chặn reload browser lại (mất value) khi button trong form có type="submit"
          this.dangNhap();
        }}>Đăng nhập</button>
    
  };

  dangNhap = () => {
   console.log('Đăng nhập');
  //  this.status = true;
  //  console.log('status', this.status);
  //  this.render();
  this.setState({
    /*
      this.setState(newState) : this.setState nhận vào 1 object state mới thay thế cho object state cũ, 
      đồng thời render lại giao.

      setState là hàm bất đồng bộ 

      Nếu muốn đợi hàm setState thì phải dùng lện async await => Không nên vì sẽ làm drop ứng dụng các hàm logic 
    */  
    status : true
  },() => {
    // Hàm sẽ tự chạy sau khi state thay đổi và giao diện đã được render xong 
    console.log('state', this.state)

  })
  }


  render() {
    return (
      <div className="container">
        <h3 className="text-center">Demo State</h3>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              {/* <input className="form-control me-sm-2" type="text" placeholder="Search" /> */}
              {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              {/* {this.status ?  (
               <span className="text-white">{this.username}</span>
              ) : (
                <button className="btn btn-success">Đăng nhập</button>
              )} */}

              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

