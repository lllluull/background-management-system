import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavLeft from './components/NavLeft/NavLeft'

import './admin.css'





export default class Admin extends Component {


    render() {
        return (
                <div className='main'>
                    <Row>
                        <Col span={3}>
                        <NavLeft/>
                        </Col>
                        
                        <Col span={21} className='mainContent'>
                            <Header/>
                                <div >
                                    {this.props.children}

                                </div> 
                            <Footer/>
                        </Col>
                    </Row>
                </div>



        )
    }


}