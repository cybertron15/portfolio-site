import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
	return (
		<div className="text-center">
			<div className="font-roboto text-5xl mt-32">
				Hello, My name is Palash Dhavle and I'm a 
			</div>
			<div className="font-roboto text-5xl mt-2">
				Software developer from Goa, India.
			</div>

			<div className="mt-4">Keep Scrolling</div>
			<div className="flex justify-center mt-4">
				<div className="animate-bounce">
					<ChevronDown width={50} height={50} />
					<ChevronDown width={50} height={50} className="relative bottom-9" />
				</div>
			</div>
			<img
				src="images/main_bg.jpg"
				alt=""
				className="relative bottom-96 -z-10"
			/>
		</div>
	);
};

export default Hero;
