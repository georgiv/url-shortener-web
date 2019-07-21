import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import RedirectWrapper from './RedirectWrapper'
import RegisterWrapper from './RegisterWrapper'

const Entrance = () => {
    return (
        <React.Fragment>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={RegisterWrapper} />
                        <Route path='/:id' component={RedirectWrapper} />
                    </Switch>
                </BrowserRouter>
            </div>
        </React.Fragment>
    )
}

export default Entrance
