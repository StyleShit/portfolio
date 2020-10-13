import React from 'react'

export default function Mockups({ leftProject, rightProject, dispatch })
{
    // get mockup image extension & URL

    var [ leftMockupExtension ] = leftProject.mockup.split( '.' ).slice( -1 );
    var [ rightMockupExtension ] = rightProject.mockup.split( '.' ).slice( -1 );
    
    // get fallback mockup URL
    var leftFallback = leftProject.fallbackMockup ? leftProject.fallbackMockup : leftProject.mockup;
    var rightFallback = rightProject.fallbackMockup ? rightProject.fallbackMockup : rightProject.mockup;


    return (
        <>
        <div className="mockup-devices">
            <span className="click-animation">
                <span className="click-animation-cursor"></span>
                <span className="click-animation-drop"></span>
            </span>

            <div className="mockup-left" 
                onClick={ () => { dispatch({ action: 'view-project', payload: { project: leftProject }}) } }>

                <picture>
                    <source srcSet={ leftProject.mockup } type={ `image/${ leftMockupExtension }` } />
                    <img alt={ leftProject.title } src={ leftFallback } />
                </picture>
                                
                <span className="mockup-description">
                    <i className="las la-search-plus"></i>&nbsp;
                    { leftProject.title }
                </span>
            </div>

            <div className="mockup-right" 
                onClick={ () => { dispatch({ action: 'view-project', payload: { project: rightProject }}) } }>

                <picture>
                    <source srcSet={ rightProject.mockup } type={ `image/${ rightMockupExtension }` } />
                    <img alt={ rightProject.title } src={ rightFallback } />
                </picture>

                <span className="mockup-description">
                    <i className="las la-search-plus"></i>&nbsp;
                    { rightProject.title }
                </span>
            </div>
        </div>
        </>
    )
}
