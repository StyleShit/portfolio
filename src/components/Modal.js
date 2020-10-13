import React from 'react'

export default function Modal({ project, isModalOpen, dispatch })
{
    if( project.title )
    {
        // get original image & fallback image URLs
        var imageURL = project.modalImage ? project.modalImage : project.image;
        var fallbackImage = project.fallbackImage ? project.fallbackImage : imageURL;

        // get project image extension
        var [ imageExtension ] = imageURL.split( '.' ).slice( -1 );
    }

    return (
        <>
        <div className={ `overlay ${ isModalOpen ? '' :  'hidden-fade'}` } onClick={ () => { dispatch({ action: 'close-modal'}) } }></div>
        <div className={ `modal  ${ isModalOpen ? '' :  'hidden-slide-down'}` }>
            <div className="modal-content">
                <div className="modal-image">
                    <a href={ imageURL } target="__blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet={ imageURL } type={ `image/${ imageExtension }` } />
                            <img alt={ project.title } src={ fallbackImage } />
                        </picture>

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

                        { project.codepen != null &&
                            <a className="btn modal-btn" href={ project.codepen } target="_blank" rel="noopener noreferrer">
                                <i className="lab la-codepen"></i>&nbsp;Codepen 
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
