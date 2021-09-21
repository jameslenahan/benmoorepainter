import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import ConsumerPage from './pages/consumerpage'

function App() {
  return (
<BrowserRouter>
      <Switch>
        {/* <Route exact path='/'
          render={() =>
          <Home>

          </Home>
          }>
        
        </Route> */}
        <Route exact path='/'
          render={()=> 
          <ConsumerPage>

          </ConsumerPage>}
        
        >

        </Route>

      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
