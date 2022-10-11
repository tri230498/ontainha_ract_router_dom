//rcc
import React, { Component } from "react";
const data = [
  {
    id: "1",
    name: "product 1",
    price: "1000",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "product 2",
    price: "2000",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "product 3",
    price: "3000",
    img: "https://i.pravatar.cc/150?img=3",
  },
];
export default class RenderWithMap extends Component {
  // Cách 1:
  //   renderProduct = () => {
  //     let jsxArr = [];
  //     for (let index = 0; index < data.length; index++) {
  //       // Mỗi lần duyệt lấy ra 1 object prod trong mảng data
  //       let prod = data[index];
  //       // Từ dữ liệu object tạo ra jsx
  //       let tr =
  //         <tr key={index}>
  //           <td>{prod.id}</td>
  //           <td>{prod.name}</td> <td>{prod.price}</td>
  //           <td>
  //             <img src={prod.img} alt="..." width={50}/>
  //           </td>
  //         </tr>
  //         // add các jsx vào arrJSX
  //       jsxArr.push(tr)
  //     }
  //     return jsxArr
  //   };

  // Cach2: for in trả về các thuộc tính có trong mảng cần render
  //   renderProduct = () => {
  //     let jsxArr = [];
  //     for (let index in data) {
  //         let prod = data[index]
  //       let tr = (
  //         <tr key={index}>
  //           <td>{prod.id}</td>
  //           <td>{prod.name}</td> <td>{prod.price}</td>
  //           <td>
  //             <img src={prod.img} alt={prod.name} width={50} />
  //           </td>
  //         </tr>
  //       );
  //       jsxArr.push(tr);
  //     }
  //     return jsxArr;
  //   };

  //Cách 3: Dùng map
  renderProduct = () => {
    return data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={50} />
          </td>
        </tr>
      );
    });
  };

  renderCardProduct = () => {
    return data.map((card,index) => {
        return <div className="col-4" key={index}>
            <div className="card">
                <img src={card.img} alt="..." />
                <div className="card-body">
                    <p>{card.name}</p>
                    <p>{card.price}</p>
                    <button className="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    })
  }


  render() {
    return (
      <div className="container">
        <h3 className="text-center">Table product</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3>Product list</h3>
        <div className="row">
            {this.renderCardProduct()}
        </div>
      </div>
    );
  }
}
