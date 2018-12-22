import React, { Component } from 'react'
import './NavLeft.css'
import menuLIst from '../../config/menuLIst'
import { Menu} from 'antd';
const SubMenu = Menu.SubMenu;



export default class NavLeft extends Component {
    componentWillMount() {
        const MyMenu = this.renderMenu(menuLIst)
        this.setState({
            MyMenu
        })
    }
    renderMenu = data => {
        return(
            data.map(item => {
                
                    if(item.children){
                        return (
                            <SubMenu title={item.title} key={item.key}>
                                {this.renderMenu(item.children)}
                            </SubMenu>
                        )
                    }
                    return (
                        <Menu.Item key={item.key}>{item.title}</Menu.Item>
                    )
                    
               
            })
        )
    }

    render() {
        return (
            <div>
                <div className = 'NavHeader'>
                    导航栏头部
                </div>                
                <Menu theme='dark' className='NavContent'>
                    {this.state.MyMenu}
                </Menu>
            </div>    
        )
            
            
    }
}