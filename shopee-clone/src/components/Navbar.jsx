import React from 'react';
import {
	navLinksRight,
	navLinksLeft,
	navCTA,
	navCategories,
} from '../data/data';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
	return (
		<nav className="bg-mainColor">
			<div className="container mx-auto text-white flex justify-between">
				<div>
					{navLinksLeft.map((item) => {
						return (
							<small key={item.id}>
								<a href="#" className="mx-3">
									{item.name}
								</a>{' '}
								|
							</small>
						);
					})}
				</div>
				<div>
					{navLinksRight.map((item) => {
						return (
							<small key={item.id}>
								<a href="#" className="mx-3">
									{item.name}
								</a>
							</small>
						);
					})}

					{navCTA.map((item) => {
						return (
							<small key={item.id}>
								<a href="#" className="mr-3 font-bold">
									{item.name}
								</a>
							</small>
						);
					})}
				</div>
			</div>

			<div className="container mx-auto flex items-center justify-between mt-1">
				<img
					src="https://logolook.net/wp-content/uploads/2021/11/Shopee-Logo.svg"
					alt="logo"
					className="logo flex-1 mr-8"
				/>
				<div className=" w-2/3">
					<div className="flex">
						<input
							type="text"
							name="text"
							id="text"
							className="shrink  w-full px-3 shadow"
							placeholder="Sign up and get 100% off on your first order"
						/>
						<div className="bg-white p-1">
							<button className="bg-mainColor px-6 py-2 rounded">
								<FiSearch className="icons" size={20} />
							</button>
						</div>
					</div>
					<div>
						{navCategories.map((item) => {
							return (
								<small key={item.id} className="mr-3 text-white">
									<a href="#">{item.name}</a>
								</small>
							);
						})}
					</div>
				</div>
				<BsCart2 className="icons flex-1" size={35} />
			</div>
		</nav>
	);
};

export default Navbar;
