import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "FNB Corporation": {
      jobTitle: "Software Development Engineer @",
      duration: "NOV 2024 - PRESENT",
      desc: [
        "Process Lead for two enterprise-scale platforms (Argo Connects & Argo Teller), owning test architecture, automation strategy, and cross-team technical alignment across releases.",
        "Led development of a real-time customer–loan officer chat application using React, Socket.IO, and REST APIs, supporting live messaging, session handling, and multi-user workflows in a production environment.",
        "Contributed directly to product development and feature enhancements across Argo Connects and Argo Teller, collaborating with backend and frontend teams to deliver production-grade improvements.",
        "Actively driving AI/ML adoption within engineering workflows, finding ML-based use cases into automation and internal tooling."
      ]
    },
    "University of the Cumberlands": {
      jobTitle: "Research Software Engineer @",
      duration: "JUL 2023 - JUN 2024",
      desc: [
        "designed and implemented research-grade software systems to support data analysis, experimentation, and reproducible workflows in an academic research environment.",
        "Developed and optimized Python-based pipelines and scripts for data processing, analysis, and model experimentation, improving research iteration speed and result reliability.",
        "Collaborated with faculty and graduate researchers to translate research requirements into production-quality code, documentation, and repeatable experiments suitable for publication and long-term use."
      ]
    },
    Amazon: {
      jobTitle: "Software Engineer @",
      duration: "AUG 2020 - AUG 2022",
      desc: [
        "Associate Software Engineer at Amazon (2 years), contributing to backend systems used at scale, with a strong focus on reliability, performance, and production-readiness in a fast-paced engineering environment.",
        "Designed, developed, and maintained software components and services following Amazon engineering best practices (clean architecture, code reviews, operational excellence), ensuring high availability and long-term maintainability.",
        "Collaborated cross-functionally with senior engineers and stakeholders to deliver features end-to-end, debug production issues, and continuously improve system quality and developer efficiency."
      ]
    },
    // Centivizer: {
    //   jobTitle: "Software Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    // "Orange Gate": {
    //   jobTitle: "Software Developer Intern @",
    //   duration: "MAY 2019 - AUG 2019",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
