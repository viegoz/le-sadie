import { Navbar, Button, CardProduct, Footer } from "@/components";
import { product } from "@/constants/data"; // <--- sudah diganti
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from 'react';

const page = () => {
    return (
        <div className="productpage min-h-screen">
            <Navbar />
            <div className="text-white flex flex-col items-center gap-8 pt-20 px-35">
                <div>
                    <p className="text-4xl">
                        <span className="font-[900]">Artful</span> Cakes,{" "}
                        <span className="font-[900]">Timeless</span> Bonds
                    </p>
                </div>
                <h1 className="font-playfair text-8xl text-shadow-md text-center font-bold pb-10 text-black">
                    Our Other Creations
                </h1>
                <div className="w-3/6 text-center text-lg leading-relaxed text-black pb-50">
                    <p className="tracking-wide">
                        Another slice of joy, just waiting to be shared.
                        <br /><br />
                        Dari mini tarts yang gemesin sampe cakes berlayer yang super <br /> indulgent —
                        semua dibuat dengan detail, rasa, dan vibes yang Le Sadie banget.
                        Karena momen manis nggak pernah cukup satu.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-15 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
                    {product.map((item) => (
                        <CardProduct
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            product={item.product}
                            price={item.price}
                            showRating={false}
                        />
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center py-20 gap-10">
                <h1 className="font-playfair font-bold text-5xl">
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

export default page;
