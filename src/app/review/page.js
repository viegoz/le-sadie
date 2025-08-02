import React from 'react'
import { Navbar, Button, CardProduct, Footer } from "@/components";
import { bestSeller } from "@/constants/data";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
    return (
        <div className="reviewpage min-h-screen">
            <Navbar />
            <div className="text-white flex flex-col items-center gap-8 pt-20 px-35">
                <div>
                    <p className="text-3xl">
                        <span className="font-[900]">Artful</span> Cakes,{" "}
                        <span className="font-[900]">Timeless</span> Bonds
                    </p>
                </div>
                <h1 className="font-playfair text-7xl text-shadow-md text-center font-bold pb-30 text-black">
                    Catch this couple's <br /> take on Le Sadie Bake
                </h1>

                <div className="w-full flex justify-center pb-30">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/kwCKAYUKGrM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-2xl shadow-xl"
                    />
                </div>
                <h1 className="font-playfair text-7xl text-shadow-md text-center font-bold text-black">
                    Our Sweet Notes
                </h1>
                <div className="w-3/6 text-center text-lg leading-relaxed text-black">
                    <p className="tracking-wide">
                        We believe every cake has its own story mulai dari intimate birthday dinner
                        bareng sahabat sampai last-minute surprise buat someone special. Di sini,
                        kamu bisa baca how our cakes have been part of their sweet moments.
                        It's not just a review, it's a love letter from one heart to another
                    </p>
                </div>
                <div className="flex flex-col items-center py-20 gap-10">
                    <h1 className="font-playfair font-bold text-5xl text-black">
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
    )
}

export default page