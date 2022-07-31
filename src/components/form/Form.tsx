import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { motion } from "framer-motion";

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

const draw = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: () => {
		const delay = 1 * 0.5;
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
			},
		};
	},
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
	const [loading, setLoading] = useState<Boolean>(false);
	const [success, setSuccess] = useState<Boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (currentStep === steps - 1) {
			setLoading(true);
			setTimeout(() => {
				handleSuccess();
			}, 3000);
		} else {
			onNext && onNext();
		}
	};

	const handleSuccess = () => {
		setSuccess(true);
		setTimeout(() => {
			setSuccess(false);
			setLoading(false);
		}, 3000);
	};

	const goBack = () => {
		if (onBack) {
			onBack();
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
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24 cursor-pointer"
							/>
						)}
						{currentStep !== steps - 1 && (
							<input
								type="submit"
								value="Next"
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24 cursor-pointer"
							/>
						)}
						{currentStep === steps - 1 && (
							<input
								type="submit"
								value="Submit"
								className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24 cursor-pointer"
							/>
						)}
					</div>
				</form>
			) : (
				<>
					<div className="bg-white w-[400px] flex flex-col items-center h-[400px]">
						{!success ? (
							<Oval
								height="150"
								width="150"
								color="#ff9a76"
								ariaLabel="oval-loading"
								secondaryColor="#679b9b"
								strokeWidth={2}
								wrapperClass={
									"w-[400px] h-[400px] bg-white flex justify-center items-center rounded shadow-form-shadow px-7 py-5"
								}
								strokeWidthSecondary={2}
							/>
						) : (
							<motion.svg
								width="400"
								height="400"
								viewBox="0 0 400 400"
								initial="hidden"
								animate="visible"
							>
								<motion.circle
									cx="200"
									cy="200"
									r="75"
									stroke="#ff9a76"
									variants={draw}
									fill="none"
									strokeWidth="7.5"
								/>
								<motion.path
									fill="none"
									strokeWidth="7.5"
									stroke="#ff9a76"
									d="M 155,205 L 180,235 L 245,180"
									strokeDasharray="0 1"
									variants={draw}
								/>
							</motion.svg>
						)}
					</div>
				</>
			)}
		</>
	);
};

export default Form;
