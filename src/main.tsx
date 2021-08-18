import * as React from "react";
import * as ReactDOM from "react-dom";
import {Geolocation} from "./geolocation";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        <Geolocation />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
