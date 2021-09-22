import React, {useEffect, useState, setState} from "react";
import CreateAccount from "../components/createaccount";
import LogIn from "../components/login";

function Home () {
    return (
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello Bulma!</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />

        <CreateAccount>

        </CreateAccount>
        </div>

    )
}

export default Home;