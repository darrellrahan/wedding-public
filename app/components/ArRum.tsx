import React from "react";
import { RevealWrapper } from "next-reveal";

function ArRum() {
  return (
    <section id="qs-ar-rum">
      <div className="bg-[url('/images/anNur/bg.png')] rounded-t-[1.25rem] bg-center bg-no-repeat bg-cover p-12 flex flex-col items-center text-center gap-8 -mt-8 z-20 relative font-light">
        <RevealWrapper duration={1500} origin="top">
          <h1 className="italic text-4xl flex gap-4 text-[#A99C86]">
            <span>A</span>
            <span>&</span>
            <span>R</span>
          </h1>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="top">
          <p className="text-[0.75rem] leading-loose text-[#424242]">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang."
          </p>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="bottom">
          <h3 className="italic text-lg">QS Ar-Rum 21</h3>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ArRum;
