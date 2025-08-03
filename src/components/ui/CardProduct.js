import Image from "next/image";

const CardProduct = ({
	title,
	description,
	product,
	price,
	showRating = true,
}) => {
	return (
		<div className="flex flex-col items-center">
			{showRating ? (
				<div className="flex gap-3 items-center">
					<Image
						alt="Rating"
						src="/images/homepage/rating.svg"
						width={40}
						height={50}
					/>
					<h1 className="font-playfair text-2xl md:text-5xl font-semibold">
						{title}
					</h1>
				</div>
			) : (
				<h1 className="font-playfair text-5xl font-semibold">{title}</h1>
			)}

			<div>
				<Image
					alt="product"
					src={product}
					width={300}
					height={300}
					className="duration-200 ease-in-out hover:scale-115"
				/>
			</div>
			<div className="flex flex-col items-center gap-4">
				<span className="w-2/3 text-center">{description}</span>
				<span className="text-4xl">
					<span className="text-sm">IDR</span>
					{price}
				</span>
			</div>
		</div>
	);
};

export default CardProduct;
