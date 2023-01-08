import React, { useContext } from 'react';
import { ContextVar } from '../context/context';

const Categories = () => {
	const { categories } = useContext(ContextVar);

	return (
		<div className="container mx-auto mt-5 bg-white p-3">
			<h1 className="my-3 font-bold text-gray-500">CATEGORIES</h1>

			<div className="flex justify-between ">
				{categories.slice(0, 6).map((item) => {
					return (
						<div key={item.id} className="border">
							<img
								className="categories-image p-3"
								src={item.image}
								alt={item.name}
							/>
							<p className="text-center my-1">{item.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
