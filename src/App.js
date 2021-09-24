import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import ConsumerPage from './pages/consumerpage'
import ThankYouPage from './pages/thankyoupage'
import PainterPage from './pages/painterpage'

function App() {
  return (
<BrowserRouter>
      <Switch>
        <Route exact path='/'
          render={() =>
          <Home>

          </Home>
          }>
        
        </Route> 
        <Route exact path='/benmoorepainter'
          render={()=> 
          <ConsumerPage>

          </ConsumerPage>}
        
        >

        </Route>
        <Route exact path='/thankyou'
          render={()=> 
          <ThankYouPage>

          </ThankYouPage>}
        
        >

        </Route>
        
        <Route exact path='/portal'
          render={()=> 
          <PainterPage>

          </PainterPage>}
        
        >

        </Route>

      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
