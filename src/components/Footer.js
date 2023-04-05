import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.socials = [
      {
        name: "github",
        url: "https://github.com/inspire01",
        class: "fab fa-github",
      },
    ];

    this.name = "Inspire";
  }

  render() {
    var networks = this.socials.map(function (network) {
      return (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      );
    });

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>Copyright &copy; {this.name}</small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
