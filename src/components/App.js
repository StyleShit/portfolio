import React, { useState } from 'react'
import './css/App.css'

// modules
import Modal from './Modal'
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer'

// data
import projectsData from '../data/projects.js'


function App() 
{
	// modal open state
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ showcaseLimit, setShowcaseLimit ] = useState( 6 );
	const [ modalProject, setModalProject ] = useState( {} );

	function dispatch({ action, payload })
	{
		switch( action )
		{
			case 'open-modal':
				openModal();
				break;
			
			case 'close-modal':
				closeModal();
				break;

			case 'view-project':
				viewProject( payload.project );
				break;

			case 'show-more':
				showMore();
				break;

			default:
				break;
		}
	}

	function openModal()
	{
		setModalOpen( true );
		document.documentElement.classList.add( 'modal-open' );
	}

	function closeModal()
	{
		setModalOpen( false );
		document.documentElement.classList.remove( 'modal-open' );
	}

	function viewProject( project )
	{
		setModalProject( project );
		openModal();
	}

	function showMore( count = 3 )
	{
		setShowcaseLimit( prev => { return prev + count });
	}

	return (
		<>
		<Modal isModalOpen={ isModalOpen } dispatch={ dispatch } project={ modalProject } />
		<Hero title="Hello" subtitle={ `My Name is Evyatar Daud<br/>And I'm a Web-Developer` } />
		<Projects dispatch={ dispatch } projects={ projectsData } limit={ showcaseLimit } />
		<Footer />
		</>
	);
}

export default App;