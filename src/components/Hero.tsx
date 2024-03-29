import { ChevronDown } from "lucide-react";
interface HeroProps {
	navbarController: (navigateTo: string) => void;
  };
const Hero: React.FC<HeroProps>  = ({ navbarController }) => {
	const mediumScreenSize = 768
	let chevronSize
	if (window.innerWidth < mediumScreenSize){
		chevronSize = 30
	}
		else{
		chevronSize = 50
	}
	return (
		<div className="text-center w-full">
			<div className="font-roboto md:text-7xl lg:text-8xl sm:text-5xl text-3xl">
				Welcome to <span className="font-pacifico">TronCodes</span>
			</div>
			<div className="font-roboto md:text-3xl sm:text-2xl text-lg md:mt-4 mt-2">
				I code, Therefore I am not broke.
			</div>
			<div className="font-roboto md:text-2xl sm:text-xl text-sm italic mt-2">&mdash; Palash Dhavle</div>
			<div className="flex gap-4 justify-center md:mt-1">
			<a href="files/PalashDhavleResume.pdf"
					target="_blank"
					rel="noreferrer"
					className="">
				<button type="button" className="ring-1 ring-orange-400 text-orange-400 md:text-2xl text-sm px-6 pt-1 pb-1 rounded-lg mt-3 cursor-pointer hover:scale-105">
					Resume
				</button>
			</a>
			<button
				type="button"
				className="ring-1 ring-orange-500 bg-orange-500 md:text-2xl text-sm px-6 pt-1 pb-1 rounded-lg mt-3 cursor-pointer hover:scale-105"
				onClick={()=>navbarController("contact")}
				>
				Hire me
			</button>
			</div>
			<div className="mt-2 md:text-lg text-xs">Scroll to know more</div>
			<div className="flex justify-center mt-4">
			<div className="animate-bounce">
					<ChevronDown width={chevronSize} height={chevronSize} />
					<ChevronDown width={chevronSize} height={chevronSize} className="relative bottom-9" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
