import React, { Component } from "react";
import IPAddress from "./IPAddress";

let xhr;

class IPAddresContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip_address: "...",
    };

    this.proccessRequest = this.proccessRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ipinfo.io/json", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.proccessRequest, false);
  }

  proccessRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);

      this.setState({
        ip_address: response.ip,
      });
    }

    return;
  }

  render() {
    return (
        <IPAddress ip={this.state.ip_address}/>
    );
  }
}

export default IPAddresContainer;
