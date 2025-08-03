import React from "react";
import { Navbar, Button, CardProduct, Footer } from "@/components";

import Image from "next/image";

const page = () => {
	return (
		<div className="bg-[url('/images/about/aboutBg.png')] bg-no-repeat md:bg-contain min-w-fit md:min-h-max">
			<Navbar />

			<div className="text-white flex flex-col items-center gap-8 pt-20 px-10">
				<div>
					<p className="text-3xl md:text-4xl">
						<span className="font-[900]">Artful</span> Cakes,{" "}
						<span className="font-[900]">Timeless</span> Bonds
					</p>
				</div>

				<h1 className="font-playfair text-7xl md:text-8xl text-shadow-md text-center font-semibold md:pb-70">
					The Heart Behind
					<br />
					Le Sadie Bake
				</h1>

				<div className="flex flex-col items-center">
					<Image
						src="/images/about/hero.jpg"
						alt="Tentang Le Sadie"
						width={900}
						height={600}
						className="shadow-lg"
					/>
					<div className="hidden md:flex justify-between text-center w-4xl mt-12 text-black gap-8 pb-40">
						<div className="w-1/2">
							<p className="text-lg leading-relaxed md:text-justify">
								Nestled in the heart of Bandung, Le Sadie Bake is more than just
								a cake shop. it&rsquo;s a place where beautiful moments are
								baked with heart. Kami percaya setiap perayaan pantas dapat kue
								yang bukan hanya cantik secara visual, tapi juga punya rasa yang
								ngena di hati.
								<br />
								<br />
								From soft-spoken birthday cakes to charming seasonal hampers,
								every creation is thoughtfully crafted karena buat kami, detail
								itu bukan tambahan, tapi esensi.
								<br />
								<br />
							</p>
						</div>
						<div className="w-1/2">
							<p className="text-lg leading-relaxed md:text-justify">
								Didirikan oleh Nurul Farisa, Le Sadie Bake hadir di Jl.
								Purwakarta No. 84, Antapani, sebagai rumah untuk cake lovers
								yang menghargai keindahan dalam rasa dan rupa.
								<br />
								<br />
								Whether it&rsquo;s a quiet dinner with your closest friends or a
								milestone worth remembering, we&rsquo;re here to sweeten your
								story, one slice at a time.
							</p>
						</div>
					</div>
				</div>

				<div className="md:hidden flex justify-center text-center w-full max-w-5xl mt-12 text-black gap-8 pb-40">
					<div className="w-3/4">
						<p className="text-lg leading-relaxed md:text-justify">
							Nestled in the heart of Bandung, Le Sadie Bake is more than just a
							cake shop. it&rsquo;s a place where beautiful moments are baked
							with heart. Kami percaya setiap perayaan pantas dapat kue yang
							bukan hanya cantik secara visual, tapi juga punya rasa yang ngena
							di hati.
							<br />
							<br />
							From soft-spoken birthday cakes to charming seasonal hampers,
							every creation is thoughtfully crafted karena buat kami, detail
							itu bukan tambahan, tapi esensi.
							<br />
							<br />
							Didirikan oleh Nurul Farisa, Le Sadie Bake hadir di Jl. Purwakarta
							No. 84, Antapani, sebagai rumah untuk cake lovers yang menghargai
							keindahan dalam rasa dan rupa.
							<br />
							<br />
							Whether it&rsquo;s a quiet dinner with your closest friends or a
							milestone worth remembering, we&rsquo;re here to sweeten your
							story, one slice at a time.
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center pb-20 gap-10">
					<h1 className="font-playfair font-bold text-3xl md:text-5xl text-black">
						Find the one that speaks your flavour
					</h1>
					<a
						href="https://gofood.co.id/bandung/restaurant/le-sadie-bake-e75fea4e-545e-4577-8868-3b7c35da3171"
						target="_blank"
						className="text-white">
						<Button title="BROWSE OUR CAKES" />
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
