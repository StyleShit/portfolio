import React from 'react'

export default function Modal({ project, isModalOpen, dispatch })
{

    var imageURL = project.modalImage ? project.modalImage : project.image;
    // imageURL = process.env.PUBLIC_URL + '/' + imageURL;
    
    var link = ( project.link != null ) ? project.link : '';
    // link += ( project.external ) ? '' : process.env.PUBLIC_URL + '/';

    return (
        <>
        <div className={ `overlay ${ isModalOpen ? '' :  'hidden-fade'}` } onClick={ () => { dispatch({ action: 'close-modal'}) } }></div>
        <div className={ `modal  ${ isModalOpen ? '' :  'hidden-slide-down'}` }>
            <div className="modal-content">
                <div className="modal-image">
                    <a href={ imageURL } target="__blank" rel="noopener noreferrer">
                        <img alt={ project.title } src={ imageURL } />
                    </a>
                </div>
    
                <div className="modal-text">
                    <h3 className="modal-title">
                        { project.title }
                    </h3>
    
                    <p className="modal-description" 
                        dangerouslySetInnerHTML={{ __html: project.description }}>
                    </p>

                    { project.link != null &&
                        <a className="btn modal-btn" href={ link } target="_blank" rel="noopener noreferrer">
                            View Code
                        </a>
                    }
                </div>

                <span className="modal-close-btn" onClick={ () => { dispatch({ action: 'close-modal'}) } }></span>
            </div>
        </div>
        </>
    )
}
