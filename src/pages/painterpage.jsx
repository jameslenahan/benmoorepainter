import React, {useEffect, useState, setState} from "react";
import '../css/painters.css'

function PainterPage() {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <div className="feedcontainer">

       
        <div className="content is-medium">
            <h1>Project in Waxhaw </h1>
            <p>See details of this project below:</p>
            <ul>
                <li>Type of Project: Interior</li>
                <li>Start Date: ~October 10</li>
                <li>Description: Project is for two bedrooms & living room in downstairs</li>
                <li>Paint Type: Regal</li>
                <li>Estimated Square Footage: 1200 sqft</li>
                <li>This will be ordered by the <strong>customer</strong></li>
            </ul>
            </div>
            </div>

        </div>
    )
}

export default PainterPage