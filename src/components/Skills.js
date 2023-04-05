import React, { Component } from "react";

class Skills extends Component {
  constructor() {
    super();
    this.skills = [
      {
        name: "HTML 5",
        class: "devicon-html5-plain",
      },
      {
        name: "CSS 3",
        class: "devicon-css3-plain",
      },

      {
        name: "JavaScript",
        class: "devicon-javascript-plain",
      },
      {
        name: "Sass",
        class: "devicon-sass-original",
      },
      {
        name: "Bootstrap",
        class: "devicon-bootstrap-plain",
      },
      {
        name: "NodeJs",
        class: "devicon-nodejs-plain",
      },
    ];
  }
  render() {
    var skills = this.skills.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Skills</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
