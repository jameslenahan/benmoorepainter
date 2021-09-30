
import './App.css';
import React, {useEffect, useState, setState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import ConsumerPage from './pages/consumerpage'
import ThankYouPage from './pages/thankyoupage'
import PainterPage from './pages/painterpage'
import CreateAccount from './components/createaccount';

function App() {
  const [userID, setUserID] = useState(null)


    useEffect(() => {
        loggedIn()
        }, [])






  function loggedIn () {
      fetch(`http://localhost:3600/users/${userID}`, {
          method: 'GET',
          headers: {
              "Content-type": "application/json",
              'Authorization': 'Bearer ' + ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTU1YmVjMmM3M2IxMGExNTRkZWQyYzEiLCJlbWFpbCI6ImphbWVzQG1ldGhvZGV5ZXMuY29tIiwicGVybWlzc2lvbkxldmVsIjoxLCJwcm92aWRlciI6ImVtYWlsIiwibmFtZSI6IkphbWVzIExlbmFoYW4iLCJyZWZyZXNoS2V5IjoiTHUweFFaa1F6dU9JUHUxVmMyZ0RqUT09IiwiaWF0IjoxNjMzMDEwMzEzfQ.PeIHlDh3vkAQAhEfkQn_i50VIwqmz1xQwQPD81H7YUo"), 
          },
      })
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {

          console.log('Request succeeded with JSON response', data);

          return true
      })
      .catch(function(error) {
          console.log('Request failed', error);
          return false
      });
  }
  loggedIn()
  
  return (
  <BrowserRouter>
      <Switch>


        <Route exact path='/'
        
          render={() =>

   
                
          <ConsumerPage>

          </ConsumerPage>

            
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
