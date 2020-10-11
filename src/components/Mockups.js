import React from 'react'

export default function Mockups({ leftProject, rightProject, dispatch })
{
    return (
        <>
        <div className="mockup-devices">
            <span className="click-animation">
                <span className="click-animation-cursor"></span>
                <span className="click-animation-drop"></span>
            </span>

            <div className="mockup-left" 
                onClick={ () => { dispatch({ action: 'view-project', payload: { project: leftProject }}) } }>

                {/* <img alt={ leftProject.title } src={ process.env.PUBLIC_URL + '/' + leftProject.mockup } /> */}
                <img alt={ leftProject.title } src={ leftProject.mockup } />
                <span className="mockup-description">
                    <i className="las la-search-plus"></i>&nbsp;
                    { leftProject.title }
                </span>
            </div>

            <div className="mockup-right" 
                onClick={ () => { dispatch({ action: 'view-project', payload: { project: rightProject }}) } }>

                {/* <img alt={ rightProject.title } src={ process.env.PUBLIC_URL + '/' + rightProject.mockup } /> */}
                <img alt={ rightProject.title } src={ rightProject.mockup } />
                <span className="mockup-description">
                    <i className="las la-search-plus"></i>&nbsp;
                    { rightProject.title }
                </span>
            </div>
        </div>
        </>
    )
}
