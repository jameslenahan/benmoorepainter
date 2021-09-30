import React, {useEffect, useState, setState} from "react";
import {useHistory} from "react-router-dom"
import '../css/logincreate.css'
import axios from "axios"
import { faVihara } from "@fortawesome/free-solid-svg-icons";
import ConsumerPage from "../pages/consumerpage"

function CreateAccount () {
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    let history = useHistory()

    const CreateAccountSend = () => {

        fetch('http://localhost:3600/users/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTU1YmVjMmM3M2IxMGExNTRkZWQyYzEiLCJlbWFpbCI6ImphbWVzQG1ldGhvZGV5ZXMuY29tIiwicGVybWlzc2lvbkxldmVsIjoxLCJwcm92aWRlciI6ImVtYWlsIiwibmFtZSI6IkphbWVzIExlbmFoYW4iLCJyZWZyZXNoS2V5IjoiTHUweFFaa1F6dU9JUHUxVmMyZ0RqUT09IiwiaWF0IjoxNjMzMDEwMzEzfQ.PeIHlDh3vkAQAhEfkQn_i50VIwqmz1xQwQPD81H7YUo"), 
            },
            body: JSON.stringify({
                "firstName": firstname,
                "lastName": lastname,
                "email": email,
                "password": password
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log('Request succeeded with JSON response', data);
            return (
                <ConsumerPage userId={data}>
                    </ConsumerPage>
            )

        })
        .catch(function(error) {
            console.log('Request failed', error);
        });


  

        
    }
    




    return(
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <div className="createaccount">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
            <input className="input" type="text" placeholder="Text input" 
            value={firstname}
            onChange={e => setfirstName(e.target.value)}
            />
            </div>
        </div>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
            <input className="input" type="text" placeholder="Text input" 
            value={lastname}
            onChange={e => setlastName(e.target.value)}
            />
            </div>
        </div>
        
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" defaultValue="" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
            <span className="icon is-small is-left">
                <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check" />
            </span>
            </div>
            <p className="help is-success">This email is available</p>
        </div>
        <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" defaultValue="*****" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
            <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
            </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
        </div>


        <div className="field is-grouped">
            <div className="control">
            <a onClick={CreateAccountSend}>
            <button className="button is-link">Submit</button>
           

            </a>
            </div>
            
            <div className="control">
            <button className="button is-link is-light">Cancel</button>
            </div>
        </div>
        </div>

  </div>  
    )}

export default CreateAccount;