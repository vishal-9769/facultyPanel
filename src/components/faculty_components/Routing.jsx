import React, { Component } from 'react'
import FacultyMainPage from './FacultyMainPage'
import Addassignment from './Addassignment'
import {
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';
import ViewAssignemnt from './ViewAssignment';

export class Routing extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        
                        <Route exact path="/" component={FacultyMainPage}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/Addassignment" component={Addassignment}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/Viewassign" component={ViewAssignemnt}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routing
