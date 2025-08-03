import Image from "next/image";

const ReviewCard = ({ name, profile, comment }) => {
	return (
		<div className="bg-[#710014] rounded-3xl flex flex-col gap-3 w-110 h-55 md:w-120 pt-8 px-10">
			<div className="card-header flex gap-6">
				<Image
					alt="profile"
					src={profile}
					width={30}
					height={30}
					className="rounded-full"
				/>
				<span className="text-xl font-bold">{name}</span>
			</div>
			<div className="card-content">
				<p className="tracking-wider">{comment}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
