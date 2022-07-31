import React, { useState } from "react";

type FormProps = {
	title: string;
	description?: string;
	inputs: Input[];
	onSubmit?: () => void;
	onNext?: () => void;
	onBack?: () => void;
	currentStep: number;
	steps: number;
};

const Form = ({
	title,
	description = "",
	inputs,
	onSubmit,
	onNext,
	onBack,
	currentStep,
	steps,
}: FormProps) => {
	const [loading, setLoading] = useState<Boolean>(true);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (onSubmit) {
			// onSubmit();
			alert("I was submitted");
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
			}, 5000);
		}
	};

	const goBack = () => {
		if (onBack) {
			onBack();
		}
	};

	const goNext = () => {
		if (onNext) {
			onNext();
		}
	};
	return (
		<>
			{!loading ? (
				<form
					onSubmit={handleSubmit}
					className="bg-white w-[400px] flex flex-col rounded shadow-form-shadow px-7 py-5"
				>
					<div className="flex flex-col items-center mb-3">
						<span className="uppercase font-mono text-app-gray mb-3">
							{title}
						</span>
						{description !== "" && (
							<span className="text-app-gray mb-3">{description}</span>
						)}
					</div>
					{inputs.map((input, index) => (
						<input
							className="p-4 border border-input-border focus:border-app-green focus:outline-none hover:border-app-orange text-sm rounded mb-3 w-full"
							type={input.type}
							placeholder={input.name}
							key={index}
						/>
					))}
					<div className="flex justify-center">
						{currentStep !== 0 && (
							<input
								type="button"
								onClick={goBack}
								value="Previous"
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"
							/>
						)}
						{currentStep !== steps - 1 && (
							<input
								type="submit"
								onClick={goNext}
								value="Next"
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"
							/>
						)}
						{currentStep === steps - 1 && (
							<input
								type="submit"
								value="Submit"
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"
							/>
						)}
					</div>
				</form>
			) : (
				<svg className="animate-spin h- w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
			)}
		</>
	);
};

export default Form;
