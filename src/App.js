import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//Components
import BadgeNew from './pages/BadgeNew';
import BadgeEdit from './pages/BadgeEdit';
import BadgeDetails from './pages/BadgeDetailsContainer';
import Badges from './pages/Badges.js';
import Layout  from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App =()=>{
  return(
  <div>
    <BrowserRouter basename={'/platzi-badges/'}>
      <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                <Route component={NotFound}/>
            </Switch>
      </Layout>
    </BrowserRouter>
  </div>
  )
}

export default App;

