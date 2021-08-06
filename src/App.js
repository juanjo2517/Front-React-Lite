import React from 'react'
import Header from './components/Header';
import Bussines from './components/Bussines';
import NewBussines from './components/NewBussines';
import EditBussines from './components/EditBussines';

import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
      <Router>
        <Provider store={store}>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Bussines} />
              <Route exact path="/empresas/nuevo" component={NewBussines} />
              <Route exact path="/empresas/editar/:id" component={EditBussines} />
            </Switch>
          </div> 
        </Provider>
      </Router>
  );
}

export default App;
