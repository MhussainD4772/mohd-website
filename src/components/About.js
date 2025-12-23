import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Development Engineer</b> at <a href="https://www.fnb-online.com/about-us/corporate-information"> FNB Corporation</a>, working on teller application under team Argo Connects. At the same time, I am working on multiple full stack and AI/ML projects. I hold a <b> Master's of Science</b> in <b>Information Technology </b>at{" "}
        <a href="https://www.ucumberlands.edu">University of the Cumberlands</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments in AI. I am also a professional cricket player. And i like to play a lot of video games. And make Instagram videos.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      ".NET"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Profile" src={"/assets/about-image.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
