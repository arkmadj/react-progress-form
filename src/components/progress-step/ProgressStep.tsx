import React from "react";

type ProgressProps = {
	steps: Step[];
	currentStep: number;
};

const ProgressStep = ({ steps, currentStep }: ProgressProps) => {
	return (
		<ul className="flex justify-between my-12 w-96 gap-2">
			{steps.map((step, index) => (
				<li
					className={`uppercase text-app-orange flex flex-col items-center relative list-none w-1/3 text-[9px] before:w-5 before:leading-5 before:rounded before:bg-app-orange before:${
						currentStep <= index - 1 ? "bg-app-green" : null
					} before:contdent-['${steps.length}'] ${
						index > -1 ? "before:content-['"+ JSON.stringify(index) +"']" : null
					} before:text-white before:flex before:justify-center before:block before:mx-auto before:mt-0 before:mb-1 before:z-10 after:w-full after:h-1 after:bg-app-green after:${
						currentStep >= index ? "bg-app-orange" : null
					} after:absolute after:-left-1/2 after:top-2 after:z-0 first:after:content-none`}
					key={index}
				>
					{step.name}
				</li>
			))}
		</ul>
	);
};

export default ProgressStep;
