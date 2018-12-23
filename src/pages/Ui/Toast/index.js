import React, { Component } from 'react'
import './index.css'
import { Card, Button, Drawer, Modal, message,  Popover} from 'antd';

export default class toast extends Component {

    state = { 
            visible: false ,
            visibles: false
        
        };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    showModal = () => {
        this.setState({
        visibles: true,
        });
    };
    onCloseM = () => {
        this.setState({
        visibles: false,
        });
    };
    info = () => {
        message.info('This is a normal message');
      };
    content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );

    render() {
        return(
            <div>
                <Card title='基础模块'  hoverable={true}>
                    <Button onClick={this.showDrawer}>抽屉</Button>
                    <Button onClick={this.showModal}>自定义</Button>
                    <Button onClick={this.info}>信息展示</Button>
                    <Popover content={this.content} title="气泡">
                        <Button>Open</Button>
                    </Popover>
                
                </Card>
                <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Modal
            visible={this.state.visibles}
            title="例子"
            onOk={this.showModal}
            onCancel={this.onCloseM}
        >
            <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Popover></Popover>
            </div>
        )
    }
}