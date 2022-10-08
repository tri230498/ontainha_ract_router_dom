import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//setup react-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Page404 from './pages/Page404/Page404';
import ProductManagement from './pages/Form_Values_Validation/ProductManagement';
import ReactLifeCycle from './ReactLifeCycle.jsx/ReactLifeCycle';
import Home from './Components/Home/Home.jsx';
//Setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoTangGiamSoLuong from './pages/DemoRedux/DemoTangGiamSoLuong/DemoTangGiamSoLuong';
import DemoChangeColor from './pages/DemoRedux/DemoChangeColor/DemoChangeColor';
import DemoQLSV from './pages/DemoRedux/DemoQuanLySinhVien/DemoQLSV';
import DemoGioHang from './pages/DemoRedux/DemoGioHang/DemoGioHang';
import DemoBurger from './pages/DemoRedux/DemoBurger/DemoBurger';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './State/DemoState';
import StyleRender from './StyleRender/StyleRender';
import BaiTapState from './State/BaiTapState';
import BaiTapRenderMap from './RenderWithMap/BaiTapRenderMap';
import RenderWithMap from './RenderWithMap/RenderWithMap';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='home' element={<Home />}></Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='about' element={<About />}></Route>
                    <Route path='reactForm' element={<ProductManagement />}></Route>
                    <Route path='reactLifeCycle' element={<ReactLifeCycle />}></Route>
                    <Route path='demoRedux' element={<DemoTangGiamSoLuong/>}></Route>
                    <Route path='demoChangeColor' element={<DemoChangeColor/>}></Route>
                    <Route path='demoqlsv' element={<DemoQLSV/>}></Route>
                    <Route path='demoGioHang' element={<DemoGioHang />}></Route>
                    <Route path='demoBurger' element={<DemoBurger />}></Route>
                    <Route path='handleEvent' element={<HandleEvent />}></Route>
                    <Route path='DemoState' element={<DemoState />}></Route>
                    <Route path='StyleRender' element={<StyleRender />}></Route>
                    <Route path='BaiTapState' element={<BaiTapState />}></Route>
                    <Route path='BaiTapRenderMap' element={<BaiTapRenderMap />}></Route>
                    <Route path='RenderWithMap' element={<RenderWithMap />}></Route>
                    {/* <Route path='*' element={<Page404/>}></Route> */}
                    <Route path='*' element={<Navigate to="/home" />}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
