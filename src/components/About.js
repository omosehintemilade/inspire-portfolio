import React, { Component } from "react";
import { Icon } from "@iconify/react";
import HtmlIcon from "@iconify/icons-logos/html-5";
import Css3Icon from "@iconify/icons-logos/css-3";
import BootstrapIcon from "@iconify/icons-logos/nodejs-icon";
import Image from "../../src/images/myProfile.jpg";

class About extends Component {
  constructor() {
    super();
    this.resumeBasicInfo = {
      description_header: "Hi",
      description:
        "I'm a software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Eager to obtain a challenging position at a prestigious company like Dream Version that will expand my learning and build upon my developer skills.",
    };
  }
  render() {
    var hello = this.resumeBasicInfo.description_header;
    var about = this.resumeBasicInfo.description;

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>About me</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img height="250px" src={Image} alt="Avatar placeholder" />
                  <Icon
                    icon={HtmlIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={Css3Icon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={BootstrapIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
