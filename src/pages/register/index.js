import React, { Component } from 'react'
import {Card, Form, Button, Input, Icon, message, Select, Divider, Radio} from 'antd'
const FormItem = Form.Item
const RadioGroup = Radio.Group

class RegisterForm extends Component {


    render() {
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 2 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 8},
            }
        }
        const {getFieldDecorator} = this.props.form
        
        return (
            <div>
            <Card title='注册表单'>
                <Form> 
                    <FormItem label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    {required: true,message:'用户名不能为空'}
                                ]
                            })(<Input placeholder='请输入用户名'/>)
                        }

                    </FormItem>

                    <FormItem label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator('passwd', {
                                rules: [
                                    {required: true,message:'密码不能为空'}
                                ]
                            })(<Input placeholder='请输入密码'/>)
                        }

                    </FormItem>
                    <FormItem label="性别" {...formItemLayout}>
                        {
                            getFieldDecorator('gendar', {
                                initialValue: 'male'
                            })(
                                    <RadioGroup>
                                        <Radio value='male'>男</Radio>
                                        <Radio value='female'>女</Radio>
                                    </RadioGroup>
                            )
                        }

                    </FormItem>
                </Form>
            </Card>
        </div>




        )
        
    }

}


export default Form.create()(RegisterForm)
