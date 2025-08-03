import { Navbar, Button, CardProduct, Footer } from "@/components";
import { bestSeller } from "@/constants/data";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	return (
		<div className="bg-[url('/images/homepage/homepageBg.jpg')] bg-no-repeat md:bg-contain min-w-fit md:min-h-max">
			<Navbar />
			<div className="items-center text-white flex flex-col md:items-end gap-8 pt-20 md:px-35">
				<div>
					<p className="text-3xl md:text-4xl">
						<span className="font-[900]">Artful</span> Cakes,{" "}
						<span className="font-[900]">Timeless</span> Bonds
					</p>
				</div>
				<div>
					<h1 className="font-playfair font-bold text-7xl md:text-9xl text-shadow-md">
						MERRY BERRY
					</h1>
				</div>
				<div className="text-center w-3/4 md:text-end text-lg leading-relaxed">
					<p className="tracking-wide">
						Di tengah cahaya malam dan suara gelas beradu, kamu merayakan a new
						chapter with your girls confident, radiant, unstoppable. Merry Berry
						hadir dengan dua lapis sponge cake: chiffon yang light dan genoise
						yang rich, kayak kamu soft yet powerful.
						<br />
						<br />
						Dengan creamy lemonade fromage mousse, strawberry bites, dan berry
						compote yang fresh, every slice feels like a celebration. Karena
						ulang tahun kamu bukan cuma soal bertambah umur, tapi tentang how
						far you&apos;ve come and how sweet the journey has been.
					</p>
				</div>
				<a href="http://wa.me/6285150599578" target="_blank">
					<Button title="MAU DONG!" />
				</a>
			</div>

			<div className="flex flex-col items-center gap-7 py-30 md:py-10">
				<p className="w-2/3 md:w-1/4 text-lg/10 text-center">
					Nestled in Bandung, Le Sadie Bake crafts artful cakes for heartfelt
					celebrations. Founded by Nurul Farisa, every slice blends beauty and
					flavor made to sweeten your most meaningful moments.
				</p>
				<div>
					<button className="flex bg-[#710014] items-center px-15 py-4 text-2xl rounded-4xl font-[900] duration-200 ease-in-out hover:bg-[#711a00] text-white cursor-pointer">
						<p className="-translate-x-1/9">ABOUT US</p>
						<FontAwesomeIcon
							icon={faArrowCircleRight}
							width={50}
							height={50}
							className="absolute translate-x-14/3"
						/>
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-15 py-5 md:py-20">
				<h1 className="font-playfair text-5xl md:text-7xl font-bold text-center text-shadow-lg/30">
					Our Best Seller
				</h1>
				<div className="flex flex-col md:flex-row md:justify-center gap-20">
					{bestSeller.map((item) => (
						<div key={item.id}>
							<CardProduct
								title={item.title}
								description={item.description}
								product={item.product}
								price={item.price}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center py-20 gap-10">
				<h1 className="font-playfair text-center font-bold text-3xl md:text-5xl">
					Find the one that speaks your flavour
				</h1>
				<a
					href="https://gofood.co.id/bandung/restaurant/le-sadie-bake-e75fea4e-545e-4577-8868-3b7c35da3171"
					target="_blank"
					className="text-white">
					<Button title="BROWSE OUR CAKES" />
				</a>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
