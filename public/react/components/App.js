import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import singlepage from './singlepage';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [selectedpages,setselectedpages] = useState()
	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const handlepageclicks = (slug) => {
		setselectedpages(slug)

	}
	
	const backtolist = () => {
		setselectedpages()
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
		  <h1>WikiVerse</h1>
		  {selectedPageSlug ? (
			<SinglePageView slug={selectedPageSlug} onBackToList={backtolist} />
		  ) : (
			<div>
			  <h2>An interesting 📚</h2>
			  <PagesList pages={pages} onPageClick={handlepageclicks} />
			</div>
		  )}
		</main>

)}