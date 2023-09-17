import img from "./../img/projects/02-big.jpg"
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    return ( 
        <main classNameName="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link="http://github.com" />
                    )}
                </div>
            </div>
        </main>
    );
}

export default Project;