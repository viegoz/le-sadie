"use client";

import Image from "next/image";
import { navMenu } from "@/constants/data";
import Link from "next/link";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="top-0 md:static bg-background p-10 md:px-35">
			<div className="flex items-center justify-end md:justify-between">
				<div className="absolute left-1/2 transfor -translate-x-1/2 md:hidden md:transform-none">
					<Link href="/">
						<Image alt="logo" src="/images/logo.svg" height={30} width={60} />
					</Link>
				</div>

				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<FontAwesomeIcon icon={faX} height={50} width={50} />
						) : (
							<FontAwesomeIcon icon={faBars} height={50} width={50} />
						)}
					</button>
				</div>

				<div className="hidden md:flex">
					<Link href="/">
						<Image alt="logo" src="/images/logo.svg" height={30} width={60} />
					</Link>
				</div>
				<div className="hidden md:flex items-center gap-25">
					{navMenu.map((item) => (
						<Link key={item.id} href={item.url}>
							<p className="cursor-pointer font-poppins">{item.title}</p>
						</Link>
					))}
				</div>
			</div>

			{isOpen && (
				<div className="flex flex-col mt-10 items-end gap-4">
					{navMenu.map((item) => (
						<Link key={item.id} href={item.url}>
							<p className="cursor-pointer font-poppins">{item.title}</p>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
