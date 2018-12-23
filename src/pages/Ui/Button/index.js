import React, { Component } from 'react'
import './index.css'
import { Card, Button } from 'antd';

export default class button extends Component {

    render() {
        return(
            <div>
                <Card title='一般按钮'  className='showButton' hoverable={true}>
                    <Button type="primary">按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button >按钮</Button>
                </Card>
                <Card title='带图标按钮'  className='showButton' hoverable={true}>
                    <Button type="primary" icon="enter">按钮</Button>
                    <Button type="dashed" icon="plus">按钮</Button>
                    <Button type="danger" icon="close">按钮</Button>
                    <Button icon="delete">按钮</Button>
                </Card>
                <Card title='其他按钮'  className='showButton' hoverable={true}>
                    <Button type="primary" shape="circle" size='large'>点</Button>
                    <Button type="dashed" disabled>按钮</Button>
                    <Button type="danger"loading={true}>按钮</Button>
                    <Button block>按钮</Button>
                </Card>
            
            </div>
        )
    }
}