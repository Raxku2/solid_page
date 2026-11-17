/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.jsx'
import { Router, Route } from '@solidjs/router'
import HomePage from './page/HomePage.jsx'
import AlertsPage from './page/AlertsPage.jsx'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route component={App}>

            <Route path='/' component={<HomePage />} />
            <Route path='/alert' component={<AlertsPage />} />
        </Route>

    </Router>
), root)
