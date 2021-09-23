import React, {useEffect, useState, setState} from "react";
import '../css/thankyou.css'

function ThankYouPage() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
       <div className="thankyoupage">
       <div className="section">
       
       <section class="hero">
            <div class="hero-body">
                <p class="title">
                Thank you for submitting your project!
                </p>
                <p class="subtitle">
                A painter will be in touch if you are a good fit.
                </p>
               
            </div>
            </section>
            <div className="thankyoubuttons">

        <button class="button is-primary is-rounded">Go to Account</button>
              

                </div>
            </div>
            
        </div>

        </div>
    )
}

export default ThankYouPage