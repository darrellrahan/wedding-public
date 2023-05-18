import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RxEnvelopeOpen } from "react-icons/rx";

function Reservation() {
  return (
    <section id="reservation">
      <div className="bg-[url('/images/anNur/bg.png')] bg-center bg-no-repeat bg-cover px-8 py-12 lg:p-10 space-y-8 -translate-y-4">
        <h1 className="text-xl italic font-light text-center">
          Reservation & Wishes
        </h1>
        <p className="text-center text-[0.75rem] text-[#424242]">
          Mohon mengisi reservasi
          <br />
          Satu undangan berlaku untuk 1-3 orang
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nama"
            className="text-[0.8rem] py-2 px-3 placeholder:text-[#5a5a5a50] border-b border-[#A99D87] rounded"
          />
          <textarea
            placeholder="Berikan Ucapan dan Doa"
            className="h-24 text-[0.8rem] py-2 px-3 placeholder:text-[#5a5a5a50] border-b border-[#A99D87] rounded"
          />
          <div className="flex items-center gap-2 text-sm">
            <input type="radio" name="presence" id="hadir" />
            <label htmlFor="hadir">Hadir</label>
            <input type="radio" name="presence" id="tidak-hadir" />
            <label htmlFor="tidak-hadir">Tidak Hadir</label>
          </div>
          <select className="text-[0.8rem] py-2 px-3 border-b border-[#A99D87] rounded font-light text-[#424242]">
            <option value="1">1 Orang</option>
            <option value="2">2 Orang</option>
            <option value="3">3 Orang</option>
          </select>
          <button className="text-[0.75rem] bg-[#424242] flex items-center w-fit text-white gap-2 py-2 px-4 font-bold hover:scale-90 ease-linear duration-[0.2s]">
            <RxEnvelopeOpen />
            <span>Kirim</span>
          </button>
        </div>
        <div className="bg-white p-4 border-b border-[#a99d87] rounded font-light text-[#424242] flex flex-col gap-2">
          <strong className="font-extrabold text-sm">Darrell</strong>
          <p className="text-[0.75rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            excepturi.
          </p>
          <p className="flex items-center gap-1 text-[0.75rem]">
            <AiOutlineClockCircle />
            <span>12/05/2023 14:05</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
