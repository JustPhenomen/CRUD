import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RestrictUnauthorizedAccess } from './components/_restrict-unauthorized-access/restrict-unauthorized-access';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <RestrictUnauthorizedAccess>
          <Switch>
            <Route path='/login'>

            </Route>
          </Switch>
        </RestrictUnauthorizedAccess>
      </BrowserRouter>
    </div>
  );
}

export default App;
