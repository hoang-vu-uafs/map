import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    this.setState({
      ready: true,
    });
  }

  componentDidUpdate() {
    this.initMap();
  }

  initMap() {
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -34.397,
        lng: 150.644,
      },
      zoom: 8,
    });
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: 400, height: 300 }} id="map"></div>
      </div>
    );
  }
}

export default App;
