import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import img1 from "../../src/images/p1.png";
import img2 from "../../src/images/p2.png";
import img3 from "../../src/images/p3.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        title: "A Simple Form",
        startDate: "2022",
        description:
          "This is my first hands-on CSS project and the first project I could showcase happily. I had to put to use all of my knowledge from background positioning, creating overlays to CSS positioning and more.",
        image: img1,
        url: "http://ui-challenge-form.surge.sh/",
        technologies: [
          {
            class: "devicon-html5-plain",
            name: "HTML 5",
          },
          {
            class: "devicon-css3-plain",
            name: "CSS 3",
          },
        ],
      },
      {
        title: "Yabatech Hostels",
        startDate: "2022",
        description:
          "This is a responsive website for a fictional estate agency that showcases their properties and services. I made sure the website is user-friendly, visually appealing, and optimized for search engines. Some of the key features are: Property listings, advanced search filters, contact form, and social media integration.",
        image: img2,
        url: "http://yabatech-hostels.surge.sh/",
        technologies: [
          {
            class: "devicon-html5-plain",
            name: "HTML5",
          },
          {
            class: "devicon-css3-plain",
            name: "CSS3",
          },
          {
            class: "devicon-bootstrap-plain",
            name: "Bootstrap",
          },
          {
            class: "devicon-javascript-plain",
            name: "Javascript",
          },
        ],
      },
      {
        title: "Video Player",
        startDate: "2022",
        description: "",
        image: img3,
        url: "https://imaginary-lunchroom.surge.sh",
        technologies: [
          {
            class: "devicon-html5-plain",
            name: "HTML5",
          },
          {
            class: "devicon-css3-plain",
            name: "CSS3",
          },
          {
            class: "devicon-javascript-plain",
            name: "Javascript",
          },
        ],
      },
    ];
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    var projects = this.projects.map(function (project, i) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={i}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            <div className="foto" onClick={() => detailsModalShow(project)}>
              <div>
                <img
                  src={project.image}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">{project.title}</p>
              </div>
            </div>
          </span>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>PROJECTS</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
