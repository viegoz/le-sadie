import React from "react";
import { Navbar, Button, CardProduct, Footer } from "@/components";

import Image from "next/image";

const page = () => {
    return (
        <div className="aboutpage min-h-screen">
            <Navbar />

            <div className="text-white flex flex-col items-center gap-8 pt-20 px-10">
                <div>
                    <p className="text-4xl">
                        <span className="font-[900]">Artful</span> Cakes,{" "}
                        <span className="font-[900]">Timeless</span> Bonds
                    </p>
                </div>

                <h1 className="font-playfair text-8xl text-shadow-md text-center font-bold pb-70">
                    The Heart Behind<br />Le Sadie Bake
                </h1>

                <Image
                    src="/images/about/hero.jpg"
                    alt="Tentang Le Sadie"
                    width={900}
                    height={600}
                    className="shadow-lg"
                />

                {/* Bagian kiri dan kanan */}
                <div className="flex justify-between w-full max-w-5xl mt-12 text-black gap-8 pb-40">
                    <div className="w-1/2">
                        <p className="text-lg leading-relaxed text-justify">
                            Nestled in the heart of Bandung, Le Sadie Bake is more than just a cake shop.
                            it's a place where beautiful moments are baked with heart. Kami percaya setiap
                            perayaan pantas dapat kue yang bukan hanya cantik secara visual, tapi juga punya rasa yang ngena di hati.
                            <br />
                            <br></br>
                            From soft-spoken birthday cakes to charming seasonal hampers, every creation is thoughtfully
                            crafted karena buat kami, detail itu bukan tambahan, tapi esensi.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-lg leading-relaxed text-justify">
                            Didirikan oleh Nurul Farisa, Le Sadie Bake hadir di Jl. Purwakarta No. 84,
                            Antapani, sebagai rumah untuk cake lovers yang menghargai keindahan dalam rasa dan rupa.
                            <br />
                            <br></br>
                            <br></br>
                            Whether it's a quiet dinner with your closest friends or a milestone worth remembering,
                            we're here to sweeten your story, one slice at a time.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center py-20 gap-10">
                    <h1 className="font-playfair font-bold text-5xl text-black">
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
