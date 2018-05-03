import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router"

import Dashboard from '../dashboard_sem_redux/dashboard'
import BillingCycles from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycles} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)