import React, { Component } from 'react'
import './NavLeft.css'
import menuLIst from '../../config/menuLIst'
import { Menu} from 'antd';
import {NavLink} from 'react-router-dom'
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
                        <Menu.Item key={item.key}><NavLink to={item.key}>{item.title} </NavLink></Menu.Item>
                    )
                    
               
            })
        )
    }

    render() {
        return (
            <div >
                <div className='NavContent'>
                <div className = 'NavHeader'>
                    导航栏头部
                </div>                
                <Menu theme='dark' >
                    {this.state.MyMenu}
                </Menu>

                </div>
                
            </div>    
        )
            
            
    }
}