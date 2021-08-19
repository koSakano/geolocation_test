import * as React from "react";
import * as ReactDOM from "react-dom";
import Geolocation from "./Geolocation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Geolocation />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
