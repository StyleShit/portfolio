import React from 'react'

export default function Thumbnails({ projects, dispatch, limit })
{
    var showcase = projects.filter( p => { return !p.isMockup });
    var showMore = limit < showcase.length;

    showcase = showcase.slice( 0, limit );

    return (
        <>
        <div className="thumbnails-clip-path"></div>

        <div className="thumbnails-container">

            {
                showcase.map(( p, i ) => {
                    
                    // get fallback image URL & the original image extension
                    var fallbackImage = p.fallbackImage ? p.fallbackImage : p.image;
                    var [ imageExtension ] = p.image.split( '.' ).slice( -1 );

                    return(
                        <div className="thumbnail" key={ `thumb-${ i }` } 
                            onClick={ () => { dispatch({ action: 'view-project', payload: { project: p }}) } }>
                            
                            <h4 className="thumbnail-title">
                                { p.title }
                            </h4>

                            <div className="thumbnail-img">
                                <picture>
                                    <source srcSet={ p.image } type={ `image/${ imageExtension }` } />
                                    <img alt={ p.title } src={ fallbackImage } />
                                </picture>
                            </div>
                            
                        </div>
                    )

                })
            }

            {
                showMore &&
                    <div className="show-more-btn-container" key={ new Date().getTime() }>
                        <button className="btn show-more-btn" onClick={ () => { dispatch({ action: 'show-more' }) } }>
                            Show More
                        </button>
                    </div>
            }
        </div>
        </>
    )
}
