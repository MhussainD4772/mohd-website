import React from "react";
import "../styles/TechStack.css";

class TechStack extends React.Component {
  render() {
    const techStack = [
      "Python",
      "Java",
      "C#",
      ".NET",
      "ASP.NET Core",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "Supabase",
      "FastAPI",
      "Spring Boot",
      "React",
      "Next.js",
      "Playwright",
      "Selenium",
      "Cucumber",
      "TestNG",
      "JUnit",
      "Docker",
      "AWS",
      "GitHub",
      "Git",
      "Linux",
      "PyTorch",
      "scikit-learn",
      "Hugging Face"
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedTechStack = [...techStack, ...techStack];

    return (
      <div id="tech-stack">
        <div className="tech-stack-container">
          <div className="tech-stack-scroll">
            {duplicatedTechStack.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;

