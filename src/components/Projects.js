import React from 'react'
import Mockups from './Mockups';
import Thumbnails from './Thumbnails';

export default function Projects({ projects, dispatch, limit })
{
    return (
        <>
        <div className="projects-container" id="my-projects">
            <h2 className="projects-title">
                My <span>Projects</span>
            </h2>
            <p className="projects-subtitle">
                Here are some of my recent projects
            </p>

            <Mockups dispatch={ dispatch }
                leftProject={ projects[1] }
                rightProject={ projects[0] } />

            <Thumbnails dispatch={ dispatch } projects={ projects } limit={ limit } />

        </div>
        </>
    )
}
