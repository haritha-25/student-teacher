import React from 'react'
import ProgressBar from './ProgressBar'
function ProjectProgress() {
    const Projects = [
        {
            topic : "student attendence",
            value : "20",
            color : "danger"
        },
        {
            topic : "student fees",
            value : "40",
            color : "warning"
        },
        {
            topic : "teachers salary",
            value : "60",
            color : "primary"
        },
        {
            topic : "teachers attendance",
            value : "80",
            color : "info"
        },
        {
            topic :"Account Setup",
            value : "Complete!",
            color : "success"
        }
    ]
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
                {
                    Projects.map((project,index) => <ProgressBar key={index} project = {project} />)
                }
                
            </div>
        </div>
    )
}

export default ProjectProgress