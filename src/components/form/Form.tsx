import React from "react";

type FormProps = {
	title: string;
	description?: string;
	inputs: Input[];
	onSubmit?: () => void;
};

const Form = ({ title, description = "", inputs, onSubmit }: FormProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  }
	return (
		<form onSubmit={handleSubmit} className="bg-white w-[400px] flex flex-col rounded shadow-form-shadow px-7 py-5">
			<div className="flex flex-col items-center mb-3">
				<span className="uppercase font-mono text-app-gray mb-3">{title}</span>
				{description !== '' && (
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
				<input type="submit" value="Next" className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"/>
				<input type="submit" value="Next" className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"/>
				<input type="submit" value="Next" className="bg-app-orange text-white font-mono text-sm px-1 py-3 mx-1 my-3 w-24"/>
			</div>
		</form>
	);
};

export default Form;
