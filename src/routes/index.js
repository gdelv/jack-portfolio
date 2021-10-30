import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Default from '../screens/Default';
import SelectedWork from '../screens/SelectedWork'
import WritingList from '../screens/WritingList'
import DirectorList from '../screens/DirectorList'
import Contact  from '../screens/Contact'

export const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={SelectedWork} />
            <Route path='/writing' component={WritingList} />
            <Route path='/films' component={DirectorList} />
            <Route path='/contact' component={Contact} />
            <Route component={Default} />
        </Switch>
    );
};