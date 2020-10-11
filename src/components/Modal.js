import React from 'react'

export default function Modal({ project, isModalOpen, dispatch })
{

    var imageURL = project.modalImage ? project.modalImage : project.image;

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

                    <div className="modal-buttons-container">
                        { project.link != null &&
                            <a className="btn modal-btn" href={ project.link } target="_blank" rel="noopener noreferrer">
                                <i className="las la-eye"></i>&nbsp;Preview
                            </a>
                        }

                        { project.github != null &&
                            <a className="btn modal-btn" href={ project.github } target="_blank" rel="noopener noreferrer">
                                <i className="lab la-github"></i>&nbsp;Github 
                            </a>
                        }
                    </div>
                </div>

                <span className="modal-close-btn" onClick={ () => { dispatch({ action: 'close-modal'}) } }></span>
            </div>
        </div>
        </>
    )
}
