import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NavLeft from './components/NavLeft/NavLeft'





export default class Admin extends Component {


    render() {
        return (
                <div>
                    <Row>
                        <Col span={3}>
                        <NavLeft/>
                        </Col>
                        
                        <Col span={21}>
                            <Header/>
                            <Footer/>
                        </Col>
                    </Row>





                </div>



        )
    }


}