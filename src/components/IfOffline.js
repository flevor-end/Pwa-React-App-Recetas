import React from "react";

export default class IfOffline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onLine: navigator ? navigator.online : true };
  }

  componentDidMount() {
    if (!window) return;
    window.addEventListener("online", this.goOnline);
    window.addEventListener("offline", this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.goOnline);
    window.removeEventListener("offline", this.goOffline);
  }

  goOnline = () => this.setState({ onLine: true });
  goOffline = () => this.setState({ onLine: false });

  render() {
    // <IfOffline>Esto se ve cuando estamos offline</IfOffline>
    const { children } = this.props;
    const { online } = this.state;

    if (online) {
      return null;
    }
    return <span>{children}</span>;
  }
}
