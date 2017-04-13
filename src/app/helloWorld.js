// console.log("it works..");

import React from "react";
import { render } from "react-dom";

class HelloWorld extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello World</h1>
                    </div>                    
                </div>
            </div>
        );
    }
}

render(<HelloWorld/>, window.document.getElementById("app"));