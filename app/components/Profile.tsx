import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";

function Profile() {
  return (
    <section id="people">
      <div className="bg-[url('/images/people/bg.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16">
        <p className="text-center text-[0.75rem] leading-loose text-[#424242]">
          <strong>Bismillahirrahmanirrahim</strong>
          <br />
          Assalamu'alaikum Warahmatullaahi Wabarakaatuh. Dengan memohon Rahmat
          dan Ridho Allah SWT. Kami mengharapkan kehadiran Bapak/Ibu/Saudara/i.
          pada acara Resepsi Pernikahan putra-putri kami
        </p>
        <div className="grid grid-cols-2 mt-20">
          <div className="-rotate-90 flex flex-col justify-end mr-16 lg:mr-24 translate-y-4 lg:translate-y-0">
            <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
              <span>THE</span>
              <span>BRIDE</span>
            </p>
          </div>
          <img
            src="/images/people/women.jpg"
            alt="Retha"
            className="translate-x-[1.9rem] lg:translate-x-[1.625rem] scale-125"
          />
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-12">
          <h1 className="italic text-2xl font-light">
            Rizkianty Retha Nurtriana
          </h1>
          <p className="text-sm leading-relaxed">
            <strong>Putri dari</strong>
            <br />
            Bapak Drs Triwiyanto (Alm) dan Ibu Nurleila Entjik Agus Hasyim
          </p>
          <a
            href="https://www.instagram.com/lemonnestt/"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>lemonnestt</span>
            <HiArrowLongRight />
          </a>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <img
            src="/images/people/man.jpg"
            alt="Akbar"
            className="-translate-x-[1.9rem] lg:-translate-x-[1.625rem] scale-125"
          />
          <div className="rotate-90 flex flex-col justify-end ml-16 lg:ml-24 -translate-y-4 lg:translate-y-0">
            <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
              <span>THE</span>
              <span>GROOM</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start text-left gap-6 mt-12">
          <h1 className="italic text-2xl font-light">Akbar Pramono Ramadhan</h1>
          <p className="text-sm leading-relaxed">
            <strong>Putra dari</strong>
            <br />
            Bapak Nuryantoro (Alm) dan Ibu Masaat Said
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
