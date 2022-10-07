//rcc
import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      desc: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "",
      desc: "",
    },
  };
  // ========================================= //

  // Hàm lấy value và xử lý validation
  handleChange = (e) => {
    let { id, value } = e.target;
    let dataType = e.target.getAttribute("data-type");
    //   console.log(id, value);
    // this.setState(
    //   {
    //     [id]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );

    // Xử lý product info
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;

    //Xử lý lỗi
    let newErrors = { ...this.state.errors };
    //check rổng validation

    let errorsMess = "";
    if (value.trim() === "") {
      errorsMess = id + " Không được bỏ trống !";
    } else {
      // Lỗi định dạng
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorsMess = id + " phải là số !";
        }
      }
    }
    newErrors[id] = errorsMess;

    //setState để có giá trị mới
    this.setState({
      productInfo: newValue,
      errors: newErrors,
    });
  };

  // Hàm ngăn chặn submit của button trong form và gửi dữ liệu đi khi thỏa các điều kiện
  handleSubmit = (e) => {
    e.preventDefault();
    // check trước khi submit dữ liệu
    let valid = true;
    let { errors, productInfo } = this.state;
    // check errors (tất cả error phải rổng (không lỗi))
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }
    //Check value (productInfo) tất cả value phải khác rỗng
    for (let key in productInfo) {
      if (productInfo[key].trim() === "") {
        errors[key] = key + " Không được bỏ trống !";
        valid = false;
        // break;
      }
    }

    if (!valid) {
      this.setState({
        errors: errors,
      });
      alert("Dữ liệu không hợp lệ");
      return;
    }
    //Hợp lệ
    // alert("submited");
    this.props.createProduct(productInfo);
  };

 
  static getDerivedStateFromProps(newProps, currentState) {
    // Lấy props.productEdit => Gán vào state.productInfo => sau đó giao diện lấy ra từ state

    if(newProps.productEdit.id !== currentState.productInfo.id) {
      // Bấm nút edit
      currentState.productInfo = newProps.productEdit;
      return currentState; // Hàm này sẽ tạo ra this.state mới
    }

    return null;


  } 





  render() {

    // console.log(this.props.productEdit)
    let {id, name, productType, img, desc, price} = this.state.productInfo;

    return (
      <form className="card">
        <div className="card-header fw-bold">Product info</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group my-2">
              <label htmlFor="id" className="fw-semibold">
                Id
              </label>
              <input
              value={id}
                type="text"
                id="id"
                name="id"
                className="form-control"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.id}</p>
            </div>
            <div className="form-group my-2">
              <label htmlFor="name" className="fw-semibold">
                Name
              </label>
              <input
              value={name}
                type="text"
                id="name"
                name="name"
                className="form-control"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.name}</p>
            </div>
            <div className="form-group my-2">
              <label htmlFor="price" className="fw-semibold">
                Price
              </label>
              <input
              value={price}
                type="text"
                id="price"
                name="price"
                className="form-control"
                onChange={this.handleChange}
                data-type="number"
              />
              <p className="text-danger">{this.state.errors.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group my-2">
              <label htmlFor="img" className="fw-semibold">
                Img link
              </label>
              <input
              value={img}
                type="text"
                id="img"
                name="img"
                className="form-control"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.img}</p>
            </div>
            <div className="form-group my-2">
              <label htmlFor="productType" className="fw-semibold">
                Product type
              </label>
              <select
              value={productType}
                name="productType"
                id="productType"
                className="form-control"
              >
                <option>mobile</option>
                <option>tablet</option>
                <option>laptop</option>
              </select>
            </div>
            <div className="form-group my-2">
              <label htmlFor="desc" className="fw-semibold">
                Product description
              </label>
              <textarea
              value={desc}
                name="desc"
                id="desc"
                rows="3"
                className="form-control"
                onChange={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.errors.desc}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2" onClick={this.handleSubmit}>
            Create
          </button>
          <button className="btn btn-primary mx-2" type="button" onClick={() => {
            this.props.updateProduct(this.state.productInfo)
          }}>Update</button>
        </div>
      </form>
    );
  }
}
