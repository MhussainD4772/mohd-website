import React from "react";
import {
  SiPython,
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiFastapi,
  SiSpring,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiSelenium,
  SiCucumber,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiLinux,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiJunit5
} from "react-icons/si";
import { FaGitAlt, FaDatabase } from "react-icons/fa";
import "../styles/TechStack.css";

class TechStack extends React.Component {
  render() {
    // Map tech names to their icons and display names
    const techStack = [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiSpringboot }, // Using Spring Boot icon for Java
      { name: "C#", icon: SiSharp },
    //   { name: ".NET", icon: SiDotnet },
    //   { name: "ASP.NET Core", icon: SiDotnet },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: FaDatabase }, // Using generic database icon
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Microsoft SQL Server", icon: FaDatabase }, // Using generic database icon
      { name: "Supabase", icon: SiSupabase },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Spring Boot", icon: SiSpring },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Playwright", icon: SiSelenium }, // Using Selenium icon as placeholder
      { name: "Selenium", icon: SiSelenium },
      { name: "Cucumber", icon: SiCucumber },
      { name: "TestNG", icon: SiSpringboot }, // Using Spring Boot icon as placeholder
      { name: "JUnit", icon: SiJunit5 },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon },
      { name: "GitHub", icon: SiGithub },
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: SiLinux },
      { name: "PyTorch", icon: SiPytorch },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "Hugging Face", icon: SiHuggingface }
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedTechStack = [...techStack, ...techStack];

    return (
      <div id="tech-stack">
        <div className="tech-stack-container">
          <div className="tech-stack-scroll">
            {duplicatedTechStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="tech-item" title={tech.name}>
                  <IconComponent className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
