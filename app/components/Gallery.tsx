import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Gallery() {
  return (
    <section id="gallery">
      <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic font-light text-center text-white">
            Our Gallery
          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <img
              src="/images/gallery/quote.jpg"
              alt="quote"
              className="w-[170px] h-[220px] object-cover"
            />
            <span>
              <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
            </span>
            <p className="text-[0.8rem] font-light leading-loose px-8">
              From when I first saw you, I felt that I was finally home, all I
              want is to make your dreams come true and share our dreams
              together.
            </p>
          </div>
          <img
            src="/images/gallery/bigGrid.jpg"
            alt="big-grid"
            className="w-full"
          />
          <div className="grid grid-cols-3 gap-1 mt-1">
            <img src="/images/gallery/grid-1.jpg" alt="grid-1" />
            <img src="/images/gallery/grid-2.jpg" alt="grid-2" />
            <img src="/images/gallery/grid-3.jpg" alt="grid-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
