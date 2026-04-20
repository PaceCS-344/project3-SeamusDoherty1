import styles from "./styles.css";
import { projects } from "./Projects";
const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects"
};
const aboutMeInformation = {
  name: "Seamus Doherty",
  DOB : "March 31st, 2006",
  University: "Pace University"
};
const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};
function aboutMeFunc(){
  return(
    <>
      <h1>{headerNames.aboutMe}</h1>
      <p1>{aboutMeInformation.name},<br></br>{aboutMeInformation.DOB}, <br></br>{aboutMeInformation.University}</p1>
      
    </>
  );
}
function skillsFunc(){
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
function projectsFunc(){
  return(
    <>
      <h1>{headerNames.Projects}</h1>
      <ul>
        {projects.map(project => 
          <li>
            <p>
              <b>{project.name}:</b>
              {' ' + project.description + ' '}
            </p>
            <img
              src= {project.img}
              alt = {project.name}
              width = "500"
              height = "200"
            />
          </li>
        )}
      </ul>
    </>
  )
}
export default function Headers() {
   return (
     <>
     <div>
      {aboutMeFunc()}
     </div>
     <div>
      {skillsFunc()}
     </div>
     <div>
      {projectsFunc()}
     </div>
     </>
   );

}

