import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import './styles.css';

const browserHistory = createBrowserHistory();

const routes = (
  <Router history={ browserHistory }>
    <Route component={ Main }>
        <IndexRoute component={ Home }/>
        <Route path="portfolio" component={ Portfolio }/>
        <Route path='portfolio/:project' component={ Project }/>
        <Route path="contact" component={ Contact }/>
    </Route>
  </Router>
);
 
Inferno.render(routes, document.getElementById('app'));