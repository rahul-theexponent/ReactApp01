import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import '../index.css'
//Components
import CurrentTime from './CurrentTime'
import ReactPost from './ReactPost'
import ReactGet from './ReactGet'

export default class Nav extends React.Component{
    render(){
        return(
        <>
            <Router>
                <ul style={{display:'flex'}}>
                    <li className='fontStyle' ><h1><Link to="/time">TIME</Link></h1></li>
                    <li className='fontStyle' ><h1><Link to="/register">POST</Link></h1></li>
                    <li className='fontStyle' ><h1><Link to="/get">GET</Link></h1></li>
                </ul>
            
                <Switch>
                    <Route exact path="/time" component={CurrentTime}/>
                    <Route exact path="/register" component={ReactPost}/>
                    <Route exact path="/get" component={ReactGet}/>
                </Switch>
            </Router>
        </>
        )
    }
}