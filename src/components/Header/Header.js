import React, { Component } from 'react'
import {Row, Col} from 'antd'
import './Header.css'
import moment from 'moment'



export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '胡鹏鹏',
        }
    }
    async componentDidMount() {
        setInterval(() => this.getNowTime(), 1000)
    }
    getNowTime = () => {
        let now = moment().format("YYYY-MM-DD HH:mm:ss A")
        this.setState({
            now
        })
    }
   
    render() {
        return (
            <div className='header'>
                <Row className='headerTop'>
                    <Col span={20} className='headerTopLeft'><span>你好,{this.state.name}!</span></Col>
                    <Col span={4} className='headerTopRight'><span>退出</span></Col>
                </Row>
                <Row className='headerBottom'>
                    <Col span={20} className='headerBottomLeft'><span>{this.state.now}</span> </Col>
                    <Col span={4} className='headerBottomRight'><span>阴转多云</span> </Col>

                </Row>
            </div>
        )
    }
}