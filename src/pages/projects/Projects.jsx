import "./Projects.scss";
import "swiper/css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import database from "../../database/database";

function Projects() {
	const [data, setData] = useState();

	useEffect(() => { if (database) setData(database);}, []);

	// function to add states to each item in the database
	const handlerState = (id) => {
		if (!data) return;
		const i = data.findIndex((obj) => obj.id === id);
		const arr = [...data];
		arr[i] = {
			...arr[i],
			isClicked: arr[i].isClicked ? !arr[i].isClicked : true,
		};
		setData(arr);
	};

	return (
		<div className="containerProjects" id="projects">
			<div className="body">
				<h1>Some of my Projects</h1>
				<Swiper
					className="cards mySwiper"
					autoplay={{
						delay: 10000,
						disableOnInteraction: true,
					}}
					modules={[Autoplay]}
				>
					{data?.map((res) => (
						<SwiperSlide className="mainCard" key={res.id}>
							<div className="card">
								<img
									src={res.img}
									alt={res.name}
									onClick={() => handlerState(res.id)}
								/>
								{!res.isClicked && (
									<div className="description">
										<h1>{res.name}</h1>
										<div className="about">
											<span>{res.description}</span>
										</div>
										<h5>Tecnolgies</h5>
										<ul>
											{res?.lenguajes?.map((itm) => (
												<li key={res.id * Math.random() * 100}>{itm}</li>
											))}
										</ul>
									</div>
								)}
								<div className="navigation">
									<div onClick={() => window.open(res.code)}>
										<BiCodeAlt className="code" />
										<span>code</span>
									</div>
									<div onClick={() => window.open(res.browse)}>
										<MdOutlineKeyboardDoubleArrowRight className="browse" />
										<span>online</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
export default Projects;
