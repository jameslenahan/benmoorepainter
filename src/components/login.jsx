import React, {useEffect, useState, setState} from "react";
import '../css/logincreate.css'

function LogIn () {
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
            <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>
        <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" defaultValue="bulma" />
            <span className="icon is-small is-left">
                <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check" />
            </span>
            </div>
            <p className="help is-success">This username is available</p>
        </div>
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" defaultValue="hello@" />
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
            <button className="button is-link">Submit</button>
            </div>
            <div className="control">
            <button className="button is-link is-light">Cancel</button>
            </div>
        </div>
        </div>

  </div>  
    )}

export default LogIn;