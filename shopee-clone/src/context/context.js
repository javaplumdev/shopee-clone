import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextVar = createContext();

const ContextProvider = (props) => {
	const [categories, setCategories] = useState([]);
	const [dailyDiscover, setDailyDiscover] = useState([]);

	useEffect(() => {
		axios
			.get('https://api.escuelajs.co/api/v1/categories')
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get('https://api.escuelajs.co/api/v1/products')
			.then((response) => {
				setDailyDiscover(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const mouseHovered = (img) => {
		console.log(img);
	};

	return (
		<ContextVar.Provider value={{ categories, dailyDiscover, mouseHovered }}>
			{props.children}
		</ContextVar.Provider>
	);
};

export default ContextProvider;
