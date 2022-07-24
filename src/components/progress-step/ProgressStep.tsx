import React from "react";

type ProgressProps = {
	steps: Step[];
};

const ProgressStep = ({ steps }: ProgressProps) => {
	return (
		<ul className="flex justify-between my-12 w-96">
			{steps.map((step, index) => (
				<li className="uppercase text-app-orange float-left relative list-none w-1/3 text-[9px] before:w-5 before:leading-5 before:rounded before:bg-app-orange  before:content-['3'] before:text-white before:flex before:justify-center before:block before:mx-auto before:mt-0 before:mb-1 before:z-10 after:w-full after:h-1 after:bg-app-green after:absolute after:-left-1/2 after:top-2 after:z-10 first:after:content-none" key={index}>{step.name}</li>
			))}
		</ul>
	);
};

export default ProgressStep;
