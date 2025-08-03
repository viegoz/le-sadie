import React from "react";
import { Navbar, Button, Footer, ReviewCard } from "@/components";

import { review } from "@/constants/data";

const page = () => {
	return (
		<div className="bg-[url('/images/reviewpage/reviewBg.png')] bg-no-repeat md:bg-contain min-w-fit md:min-h-max">
			<Navbar />
			<div className="items-center text-white flex flex-col gap-8 pt-20 md:px-35">
				<div>
					<p className="text-3xl md:text-4xl">
						<span className="font-[900]">Artful</span> Cakes,{" "}
						<span className="font-[900]">Timeless</span> Bonds
					</p>
				</div>
				<h1 className="font-playfair font-bold text-6xl text-center md:text-8xl text-shadow-md text-black pt-10">
					Catch this couple&rsquo;s <br /> take on Le Sadie Bake
				</h1>

				<div className="flex justify-center py-30">
					<iframe
						src="https://www.youtube.com/embed/kwCKAYUKGrM"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="rounded-2xl shadow-xl w-lg h-[250px] md:w-[800px] md:h-[450px]"
					/>
				</div>
				<h1 className="font-playfair text-5xl md:text-8xl text-shadow-md text-center font-bold text-black">
					Our Sweet Notes
				</h1>
				<div className="w-2/3 md:w-3/6 text-center text-lg leading-relaxed text-black">
					<p className="tracking-wide">
						We believe every cake has its own story mulai dari intimate birthday
						dinner bareng sahabat sampai last-minute surprise buat someone
						special. Di sini, kamu bisa baca how our cakes have been part of
						their sweet moments. it&rsquo;s not just a review, it&rsquo;s a love
						letter from one heart to another
					</p>
				</div>

				<div className="flex flex-col items-center md:flex-row md:justify-center gap-10 md:gap-25 pt-20">
					{review.map((item) => (
						<div key={item.id}>
							<ReviewCard
								name={item.name}
								profile={item.profilePic}
								comment={item.comment}
							/>
						</div>
					))}
				</div>

				<div className="flex flex-col items-center py-20 gap-10">
					<h1 className="font-playfair text-center font-bold text-3xl md:text-5xl text-black">
						Real Love. Real Moments. Real Cakes.
					</h1>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						className="text-white">
						<Button title="SHARE YOUR STORIES" />
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
