import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  render() {
    const projects = {
      "Mirror AI": {
        desc:
          "AI-powered personal reflection and emotional analysis system.",
        techStack: "Python (FastAPI), Next.js, TypeScript, Supabase, Hugging Face",
        link: "https://github.com/MhussainD4772/Mirror-AI",
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "React Chat Application": {
        desc:
          "A real-time chat application where customers can initiate conversations and loan officers manage a shared queue of unassigned chats.",
        techStack: "React.js, Node.js express.js Socket.IO, REST APIs",
        link: "https://github.com/MhussainD4772/React-Chat-App-POC",
        // open: "https://gazijarin.github.io/AdamAI/"
      },
      "Task Manager App": {
        desc:
          "A modern responsive React & TypeScript task management app with category filters and theme toggle.",
        techStack: "React.js, TypeScript, Vite, Bootstrap",
        link:
          "https://github.com/MhussainD4772/Task-Manager-App"
      },
      "QA Sentinel": {
        desc:
          "QA Sentinel is a fully automated, production-style multi-agent QA pipeline powered by Google’s Agent Development Kit (ADK) and Gemini models.",
        techStack: "Python, Google ADK, Gemini models, FAISS, Docker",
        link: "https://github.com/MhussainD4772/Capstone-Project-Agentic-AI-",
        // open: ""
      },
      "Machine Learning Portfolio": {
        desc:
          "A growing collection of ML models built to learn core machine-learning fundamentals and industry-ready workflows.",
        techStack: "Python, PyTorch, Scikit-learn, Pandas, Matplotlib, Seaborn",
        link: "https://github.com/MhussainD4772/Machine-Learning-Portfolio",
        // open: ""
      },
      "Mini ETL": {
        desc:
          "A lightweight, modern ETL (Extract, Transform, Load) pipeline built with .NET 8 for processing Excel data into SQLite databases.",
        techStack: ".NET 8, C#, SQLite",
        link: "https://github.com/MhussainD4772/MiniETL",
        // open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
