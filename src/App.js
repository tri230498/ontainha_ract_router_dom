// import logo from './logo.svg';
// import './App.css';

// setup react-dom
import { NavLink, Outlet } from "react-router-dom";

// Component ( function trong react gọi là component)
// Sử dụng App giống như sử dụng một thẻ
function App() {
  return (
    <div>
      <h3 className="text-center">App component react-router-dom</h3>
      {/* Nội dung thay đổi bởi patch  con */}
      <h5>
        Đây là header để liên kết các component lại và chuyển qua lại component chủ
        động
      </h5>
      <div className="header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
          <NavLink className="navbar-brand" to="/">
            Cybersoft
          </NavLink>
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
                <NavLink
                  className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link active"}
                  to="/home"
                  aria-current="page"
                >
                  Home <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/handleEvent">
                  handleEvent
                </NavLink>
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
                  State
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/DemoState">
                    DemoState
                  </NavLink>
                  <NavLink className="dropdown-item" to="/BaiTapState">
                  BaiTapState
                  </NavLink>
                </div>
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
                  RenderWithMap
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/BaiTapRenderMap">
                  BaiTapRenderMap
                  </NavLink>
                  <NavLink className="dropdown-item" to="/RenderWithMap">
                  RenderWithMap
                  </NavLink>
                </div>
              </li>











              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/StyleRender">
                  StyleRender
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'bg-white text-dark nav-link rounded-1' : "nav-link"} to="/reactLifeCycle">
                  LifeCyCle
                </NavLink>
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
                  React Form
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/reactForm">
                    ProductManagement(values_validation)
                  </NavLink>
                </div>
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
                  React-Redux
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink className="dropdown-item" to="/demoRedux">
                    Demo tăng giảm số lượng
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demoChangeColor">
                    DemoChangeColor
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demoqlsv">
                    Demo Quản Lý Sinh Viên
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demoGioHang">
                    Demo Gio Hang
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demoBurger">
                    Demo Burger
                  </NavLink>

                </div>
              </li>
            </ul>
            {/* <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>

      <section style={{ minHeight: 450 }}>
        <Outlet />
      </section>
      <footer className="bg-dark text-white text-center p-5">Footer</footer>
    </div>
  );
}

export default App;

/**
 Các Hàm LifeCycle này sẽ chạy ngầm (trình tự chạy của mộ component react)
 
Mounting: Khi component được sinh ra

Updating: Component có sự thay đổi
- Component setState() hoặc thay đổi props

Unmounting: Khi component mất khổi giao diện
- Khi di chuyển component qua lại sẽ thay đổi giao diện 

 */
