import React from "react";

const Button = ({ title }) => {
	return (
		<div>
			<button className="bg-[#710014] px-10 py-3 text-2xl rounded-4xl font-[900] duration-200 ease-in-out hover:bg-[#B3BF6F] cursor-pointer">
				{title}
			</button>
		</div>
	);
};

export default Button;
