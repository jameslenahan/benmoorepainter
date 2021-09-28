import React, {useEffect, useState, setState} from "react";
import '../css/painters.css'

function PainterPage() {
    let projectLocation = ["Example 1", "Example 2"]
    let projectData = ["data1", "data2"]
    let projectInformation = ({
        projectLocation,
        projectData
    })
  

    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <div className="feedcontainer">

       
        <div class="container">
            <div class="notification is-primary">
                See the available <strong>projects</strong> below.
            </div>
            {projectInformation.map(element => {return ( 
                
                            <section class="section is-medium">
                <h1 class="title">{element}</h1>
                <h2 class="subtitle">
                    
                </h2>
                </section>
            )})}
            </div>
            </div>

        </div>
    )
}

export default PainterPage