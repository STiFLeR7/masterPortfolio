import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  // props.name can be passed from the route or parent. Fallback to "Hill Patel".
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{
          backgroundColor:
            (props.theme && props.theme.splashBg) || "rgba(6,57,111,0.98)",
        }}
      >
        {/* pass desired name here */}
        <LoaderLogo
          id="logo"
          theme={props.theme}
          name={props.name || "Hill Patel"}
        />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };

    this.id = null;
  }

  componentDidMount() {
    // keep same 5.5s timeout as your existing code
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillUnmount() {
    // proper cleanup (componentWillMount is deprecated & wrong place)
    if (this.id) {
      clearTimeout(this.id);
      this.id = null;
    }
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
