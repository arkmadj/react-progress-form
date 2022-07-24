export {};

declare global {
	type ProgressStepProp = {
		step: number;
	};

	type Step = {
		name: string;
		title: string;
		description?: string;
		inputs: Input[];
	};

	type Input = {
		name: string;
		type: string;
	};

}
