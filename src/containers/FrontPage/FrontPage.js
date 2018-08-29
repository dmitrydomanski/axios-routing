import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import { Route, NavLink } from 'react-router-dom';

import './FrontPage.css';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import NoMatch from '../../component/NoMatch/NoMatch';

class FrontPage extends Component {

    render() {
        return (
            <div className='FrontPage'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to={{
                                         pathname : '/users',
                                         hash: '',
                                         search: ''}}

                                         activeClassName='my-active'
                                         activeStyle={{
                                         color: '#fa923f',
                                         textDecoration: 'underline'}}>
                                         Users
                                </NavLink></li>

                            <li><NavLink to={{
                                         pathname : '/courses',
                                         hash: '',
                                         search: ''}}>
                                         Courses
                                </NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <ol style={{ textAlign: 'left' }}>
                            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
                            <li>Load the "Course" component as a nested component of "Courses"</li>
                            <li>Add a 404 error page and render it for any unknown routes</li>
                            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
                        </ol>
                    </div>
                </header>
                <Switch>
                    <Route path='/users' component={Users}/>
                    {/* <Route path='/courses/:courseId' component={Course}/>                     */}
                    <Route path='/courses' component={Courses}/> 
                    <Redirect from="/all-courses" to="courses" />
                    <Route component={NoMatch}/>                   
                </Switch>
            </div>
        )
    }
}

export default FrontPage;