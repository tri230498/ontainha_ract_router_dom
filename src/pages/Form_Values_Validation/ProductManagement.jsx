//rcc
import React, { Component } from "react";
import FormProduct from "./ProductManagement/FormProduct";
import TableProduct from "./ProductManagement/TableProduct";
import axios from 'axios';
export default class ProductManagement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: "1000",
        description: "product 1 desc",
        img: "https://i.pravatar.cc/50",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: "2000",
        description: "product 2 desc",
        img: "https://i.pravatar.cc/50",
        productType: "tablet",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      desc: "",
    },
  };

  editProduct = (prodEdit) => {
    
    // setState this.state.productEdit
    this.setState({
      productEdit : prodEdit
    })
  };

  updateProduct = (productUpdate) => {
    // Lấy ra dữ liệu trong mảng (prodUpdate)
   let prodUpdate = this.state.arrProduct.find(prod => prod.id == productUpdate.id);

   if(prodUpdate) {
    for (let key in prodUpdate) {
      prodUpdate[key] = productUpdate[key]
    }
   }
   // Sau khi thay đổi thì setState() cập nhật lại
   this.setState({
    arrProduct: this.state.arrProduct
   })
    console.log(productUpdate);
  }
 
  //CRUD
  // Muốn thay đổi state nào thì viết hàm setState tại vị trí chứa state đó (lưu ý)

  // === createProduct === //
  createProduct = (newProduct) => {
    console.log("newProduct", newProduct);
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };
  // === delProduct === //
  delProduct = (idClick) => {
    // Xử lý mảng => setState
    // console.log('idClick', idClick)
    let arrProductUpdate = this.state.arrProduct;
    // Tìm ra vị trí của id cần xóa
    // Cách 1:
    // let indexDel = arrProductUpdate.findIndex((prod) => prod.id === idClick);

    // if(indexDel !== -1) {
    //   // Tìm thấy Update.splice(indexDel, 1);
    //   arrProductUpdate.splice(indexDel, 1);
    // }

    // Cách 2:
    // Dùng filter() không lấy ra object được chọn
    arrProductUpdate = arrProductUpdate.filter((prod) => prod.id !== idClick);

    //setState cho arrProduct
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };


  render() {

    return (
      <div className="container">
        <h3 className="text-center">ProductManagement</h3>
        <FormProduct
          productEdit={this.state.productEdit}
          createProduct={this.createProduct}
          updateProduct = {this.updateProduct}
        />
        <TableProduct
          editProduct={this.editProduct}
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
        />
      </div>
    );
  }

  componentDidMount() {
    let promise = axios ({
      url:"http://svcy.myclass.vn/api/Product/GetAll",
      method: "GET",
    })

    promise.then(result => {
      // thành công
      this.setState({
        arrProduct: result.data
      })
    })

    promise.catch(err => {
      console.log(err)
    })


  }




}
