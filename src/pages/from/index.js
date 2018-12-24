import React, { Component } from 'react'
import {Card, Form, Button, Input, Icon} from 'antd'
const FormItem = Form.Item


class HorizontalLoginForm extends Component {
    render() {
        const {getFieldDecorator}  = this.props.form
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 10 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 14 },
            },
          }
        return (
            
            <Form>
                <FormItem
                label="用户名"
                {...formItemLayout}
                >
                {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input  placeholder="Username"  style={{width: '300px'}}/>
          )}   
                </FormItem>
                <FormItem
                label="密码"
                {...formItemLayout}
                >
                {getFieldDecorator('passWord', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input  placeholder="Password"  style={{width: '300px'}}/>
          )}   
                </FormItem>
            </Form>



        )
    }
}


export default Form.create()(HorizontalLoginForm);


