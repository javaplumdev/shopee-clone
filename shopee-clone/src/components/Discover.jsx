import React, { useContext } from 'react';
import { ContextVar } from '../context/context';

const Discover = () => {
	const { dailyDiscover } = useContext(ContextVar);

	console.log(dailyDiscover);

	return (
		<div className="container mx-auto mt-5  p-3">
			<div className="border-4 border-white border-b-mainColor mb-5 shadow bg-white">
				<h1 className="font-bold text-mainColor text-center py-5">
					DAILY DISCOVER
				</h1>
			</div>

			<div className="grid grid-cols-6 gap-3">
				{dailyDiscover.slice(0, 50).map((item) => {
					return (
						<div key={item.id} className="bg-white shadow">
							{item.images.slice(1, 2).map((img) => {
								return <img src={img} alt={item.name} className="product" />;
							})}
							<div className="p-2">
								<small>{item.title}</small>

								<p className="text-mainColor font-bold mt-5">₱{item.price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Discover;
