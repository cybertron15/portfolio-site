// import { useRef, useEffect } from "react";
import ScrollCarousel from "scroll-carousel-react";
import skills from "../data/skills";
// import TechTile from "./TechTile";

const Hero3: React.FC = () => {
	return (
		<div className="text-center w-full">
			<div className="font-roboto md:text-3xl sm:text-2xl lg:text-5xl text-xl">
				along with debts I have these skills
			</div>
			<ScrollCarousel
				autoplay
				autoplaySpeed={8}
				speed={7}
			>
				{skills.map((item) => (
					<a
						key={item.name}
						className="rounded lg:h-48 lg:w-40 h-30 w-24 md:mx-7 flex flex-col justify-center items-center mt-10"
						href={item.link}
						target="blank"
					>
						<img
							src={`images/techstack/${item.img}`}
							alt="icon"
							className="object-contain rounded-xl lg:w-32 lg:h-32 h-20 w-20 hover:scale-105 transition-transform duration-300 transform cursor-pointer hover:ring-1 ring-orange-500"
						/>
						<div className="mt-2 md:text-xl lg:text-2xl text-sm">
							{item.name}
						</div>
					</a>
				))}
			</ScrollCarousel>
		</div>
	);
};

export default Hero3;
