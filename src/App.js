import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import UserData from './components/UserData/UserData'
import Quiz from './components/Quiz/Quiz'
import { Box } from '@material-ui/core';


const App = () => {

  return (
    <Box margin="15px 15px 15px 15px">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <UserData />} />
          <Route exact path="/quiz" render={() => <Quiz />} />
        </Switch>

      </Router>
    </Box>
  );
}

export default App;
