import {
	faWhatsapp,
	faTiktok,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<div className="bg-[#161616] flex justify-between items-center text-white p-6 py-8 px-15 md:px-35">
			<div className="text-sm w-1/2 md:w-full md:text-md">
				<span>
					Jl. Purwakarta No.84, Antapani Kidul, Kec. Antapani, Kota Bandung,
					Jawa Barat 40291
				</span>
			</div>
			<div className="flex gap-4">
				<a href="https://www.tiktok.com/@le.sadie" target="_blank">
					<FontAwesomeIcon
						icon={faTiktok}
						width={40}
						height={40}
						className="bg-white text-black rounded-full p-1.5 cursor-pointer"
					/>
				</a>
				<a href="http://wa.me/6285150599578" target="_blank">
					<FontAwesomeIcon
						icon={faWhatsapp}
						width={40}
						height={40}
						className="bg-white text-black rounded-full p-1.5 cursor-pointer"
					/>
				</a>
				<a href="https://www.instagram.com/le.sadie.bake" target="_blank">
					<FontAwesomeIcon
						icon={faInstagram}
						width={40}
						height={40}
						className="bg-white text-black rounded-full p-1.5 cursor-pointer"
					/>
				</a>
			</div>
		</div>
	);
};

export default Footer;
