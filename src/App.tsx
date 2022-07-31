import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./components/form/Form";
import ProgressStep from "./components/progress-step/ProgressStep";

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};


const App = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
	const steps = [
		{
			name: "Account Setup",
			title: "Create your account",
			description: "",
			inputs: [
				{
					name: "Email",
					type: "email",
					value: "email",
				},
				{
					name: "Password",
					type: "password",
					value: "password",
				},
				{
					name: "Confirm Password",
					type: "password",
					value: "confirmPassword",
				},
			],
		},
		{
			name: "Personal Details",
			title: "Personal Details",
			description: "We will never sell it",
			inputs: [
				{
					name: "First Name",
					type: "text",
					value: "firstName",
				},
				{
					name: "Last Name",
					type: "text",
					value: "lastName",
				},
				{
					name: "Phone",
					type: "text",
					value: "phone",
				},
				{
					name: "Address",
					type: "textArea",
					value: "address",
				},
			],
		},
		{
			name: "Social Profiles",
			title: "Social Profiles",
			description: "Your presence on the social network",
			inputs: [
				{
					name: "Twitter",
					type: "text",
					value: "twitter",
				},
				{
					name: "Facebook",
					type: "text",
					value: "facebook",
				},
				{
					name: "Google Plus",
					type: "text",
					value: "googlePlus",
				},
			],
		},
	];

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
		if(currentStep + newDirection < 0) {
			setCurrentStep(steps.length - 1);
		}else if(currentStep + newDirection > steps.length - 1) {
			setCurrentStep(0);
		}else{
			setCurrentStep(currentStep + newDirection);
		}
	};

	return (
		<div className="bg-app-bg h-screen flex flex-col items-center">
			<ProgressStep steps={steps} currentStep={currentStep}/>
			<AnimatePresence>
				<div>
					<motion.div
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
					>
						<Form
							title={steps[currentStep].title}
							description={steps[currentStep].description}
							inputs={steps[currentStep].inputs}
							onNext={() => paginate(1)}
							onBack={() => paginate(-1)}
							currentStep={currentStep}
							steps={steps.length}
						/>
					</motion.div>
				</div>
				{/* <motion.div
					animate={{
						x: 0,
						backgroundColor: "#000",
						boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
						position: "fixed",
						transitionEnd: {
							// display: "none",
						},
					}}
					transition={{ duration: 2 }}
				>
					<div className="bg-red-500 h-96 w-96 grid place-items-center">
						{currentStep + 1}
					</div>
				</motion.div> */}
			</AnimatePresence>
		</div>
	);
};

export default App;
