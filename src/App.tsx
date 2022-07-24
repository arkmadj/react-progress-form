import { useState } from "react";
import Form from "./components/form/Form";
import ProgressStep from "./components/progress-step/ProgressStep";

const App = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
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

	return (
		<div className="bg-app-bg h-screen flex flex-col items-center">
			<ProgressStep steps={steps} />
			<Form
				title={steps[currentStep].title}
				description={steps[currentStep].description}
				inputs={steps[currentStep].inputs}
        onSubmit={() => setCurrentStep(currentStep + 1)}
			/>
		</div>
	);
};

export default App;
