import styles from "./styles.css";
import { ProjectsAPI } from "./Projects";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects",
  Photo : "../Rathalos_flying.png",
  gitHub: "SeamusDoherty1"
};
const aboutMeInformation = {
  name: "Seamus Doherty",
  DOB : "March 31st, 2006",
  University: "Pace University",
  Photo : "../Rathalos_flying.png"
};
const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};
function AboutMeFunc() {
  const [isShown, setIsShown] = useState(false);
  const [githubData, setGithubData] = useState(null); // State to store GitHub profile info

  useEffect(() => {
    fetch("https://api.github.com/users/SeamusDoherty1")
      .then(response => response.json())
      .then(data => setGithubData(data))
      .catch(err => console.error("Error fetching GitHub profile:", err));
  }, []); // Only runs once

  return (
    <>
    <div id = "centered">
      <h1>{headerNames.aboutMe}</h1>
      <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{ border: '1px solid black', padding: '10px', width: '250px' }}
      >
        {/* User Info from aboutMeInformation[cite: 5] */}
        <p>{aboutMeInformation.name},<br />{aboutMeInformation.DOB}, <br />{aboutMeInformation.University}</p>

        {/* Display GitHub API Data */}
        {githubData && (
          <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
            <img 
              src={githubData.avatar_url} 
              alt="GitHub Avatar" 
              style={{ width: '50px', borderRadius: '50%' }} 
            />
            <p>
              <b>Followers:</b> {githubData.followers}<br />
              <b>Public Gists:</b> {githubData.public_gists}<br />
              {/* Note: Organizations and Stars require separate API calls or specialized fields */}
              <b>GitHub Profile:</b> <a href={githubData.html_url} target="_blank" rel="noreferrer">View</a>
            </p>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
function SkillsFunc(){
  return(
    <>
      <h1>{headerNames.Skills}</h1>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>Java</li>
        <li>Python</li>
        <li>Experience with Data Prediction software</li>
        <li>Experience with API Navigation and Application</li>
      </ul>
    </>
  )
}
function Contact(){
  return(
    <>
    <div id="contacts">
      <h2>Contact Details</h2>
      <p2><a href={contactDetails.linkedIn}>LinkedIn</a> | <a href={contactDetails.gitHub}>Github</a> | {contactDetails.email} </p2>
    </div>
    </>
  )
}
function darkMode(){
    var element = document.body;
    element.classList.toggle(".dark-mode");
}
function EasterEgg(){
  return(
    <>

    </>
  )
}
export default function Headers() {
   return (
    <div className="app-container"> {/* Use a div instead of body[cite: 5] */}
      <button onClick={darkMode}>Toggle Dark and Light mode</button> {/* Use onClick[cite: 5] */}
      <BrowserRouter>
        <div id="Nav-Header">
          <nav>
            <Link to="/aboutme">About Me</Link> |{" "}
            <Link to="/contact">Contact</Link> | {" "}
            <Link to="/skills">Skills</Link> | {" "}
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/aboutme" element={<AboutMeFunc />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<SkillsFunc />} />
          <Route path="/projects" element={<ProjectsAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
   );
}

