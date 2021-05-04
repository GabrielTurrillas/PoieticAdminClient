import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import PatientDashboard from './pages/PatientDashboard'
import PatientReferral from './pages/PatientReferral'
import PatientFilePage from './pages/PatientFilePage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar2 />
        <Switch>
          <Route exact path='/' component={PatientDashboard} />
          <Route exact path='/derivacion/:id' component={PatientReferral} />
          <Route exact path='/ficha/:id' component={PatientFilePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
