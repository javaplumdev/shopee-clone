import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextVar } from '../context/context';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Product = () => {
	const { id } = useParams();
	const { dailyDiscover, mouseHovered } = useContext(ContextVar);

	const filter = dailyDiscover.filter((item) => item.id === +id);

	return (
		<div className="container mx-auto bg-red-700 mt-3">
			{filter.map((item) => {
				return (
					<div key={item.id} className="bg-white shadow flex p-4">
						<div>
							{item.images.slice(1, 2).map((img) => {
								return (
									<img
										key={item.id}
										src={img}
										alt={item.name}
										className="image-holder mr-8"
										style={{
											maxWidth: '350px',
											height: '450px',
											objectFit: 'cover',
										}}
									/>
								);
							})}
						</div>
						<div className="p-2 w-full">
							<h1 className="text-gray-700 font-bold text-2xl">{item.title}</h1>
							<div className="flex my-3">
								<div className="flex content-center mr-3">
									<p className="mr-2 text-mainColor font-bold  border-white border-b-mainColor">
										4.6
									</p>
									<BsStarFill className="text-mainColor" />
									<BsStarFill className="mx-1 text-mainColor" />
									<BsStarFill className="text-mainColor" />
									<BsStarFill className="mx-1 text-mainColor" />
									<BsStarHalf className="text-mainColor" />
								</div>
								|<p className="mx-3">101 Ratings</p>
								<p>695 Sold</p>
							</div>
							<p className="text-mainColor font-bold text-3xl mt-2 bg-gray-50 p-3">
								₱{item.price}
							</p>
							<div className="grid grid-cols-8 mt-5">
								<p className="mr-3 text-gray-500">Type</p>
								<div className="flex col-span-7">
									{item.images.map((img) => {
										return (
											<img
												src={img}
												alt={item.name}
												className="mr-3"
												style={{
													maxWidth: '100px',
													height: '100px',
													objectFit: 'cover',
												}}
												onMouseEnter={() => mouseHovered(img)}
											/>
										);
									})}
								</div>
							</div>
							<div className="grid grid-cols-8 mt-5">
								<p className="mr-3 text-gray-500">Quantity</p>
								<div className="flex col-span-2">
									<button
										className="border px-2 border-gray-200 text-gray-400 font-bold text-2xl
"
									>
										-
									</button>
									<p
										className="border px-5 border-gray-200 text-lg
"
									>
										0
									</p>
									<button
										className="border px-2 border-gray-200 text-gray-400 font-bold text-2xl
"
									>
										+
									</button>
								</div>
							</div>
							<div className="flex mt-8">
								<button className="mr-3 border-mainColor border p-3 text-mainColor bg-orange-100">
									Add To Cart
								</button>
								<button className="bg-mainColor p-3 text-white">Buy Now</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Product;
