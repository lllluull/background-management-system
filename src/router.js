import React, { Component } from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Button from './pages/Ui/Button'
import Toast from './pages/Ui/Toast'
import Home from './pages/home/home'
import Nomatch from './pages/noMatch'
import LoginForm from './pages/from'
import RegisterForm from './pages/register'
import MyTable from './pages/table'

export default class MyRouter extends Component {


    render() {
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' render = { () => 
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/button' component={Button}/>
                                <Route path='/admin/ui/toast' component={Toast}/>
                                <Route path='/admin/ui/input' component={LoginForm}/>
                                <Route path='/admin/ui/register' component={RegisterForm}/>
                                <Route path='/admin/ui/table' component={MyTable}/>
                                 <Route path='/admin/home' component={Home}/>
                                <Route  component={Nomatch}/>
                            </Switch>
                        </Admin>   
                    }/>
                </App>


            </HashRouter>
        )
    }

}