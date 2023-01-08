import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

//data
import { heroCarouselImages, menus } from '../data/data';

const Hero = () => {
	return (
		<div className="bg-white pb-3 shadow">
			<div className="container mx-auto pt-7 grid grid-rows-1 grid-flow-col gap-2 ">
				<div className="carousel row-span-4 col-span-2 h-56 rounded">
					<Swiper
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper w-full"
					>
						{heroCarouselImages.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<img
										src={item.name}
										alt={item.name}
										className="carousel-image"
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="col-span-12 rounded">
					<img
						src="https://cf.shopee.ph/file/6ace9e5a357447c50db68e4e91d7eeba"
						alt="https://cf.shopee.ph/file/6ace9e5a357447c50db68e4e91d7eeba"
						className="hero-image"
					/>
				</div>
			</div>
			<div className="container mx-auto flex justify-between">
				{menus.map((item) => {
					return (
						<div key={item.id} className="menus hover:cursor-pointer">
							<div className="border rounded p-2 " style={{ maxWidth: '60px' }}>
								<img src={item.image} alt={item.image} />
							</div>

							<small>{item.name}</small>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Hero;
