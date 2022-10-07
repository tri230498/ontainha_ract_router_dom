import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className='d-flex' >
        <div className="w-25" style={{height: '300px'}}>
            <Navigation/>
        </div>
        <div className="w-75" style={{height: '300px'}}>
            <Content />
        </div>
        </section>
        <footer style={{height: '150px'}}>
            <Footer />
        </footer>
      </div>
    )
  }
}
