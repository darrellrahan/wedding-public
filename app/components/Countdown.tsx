import React from "react";
import Countdown from "react-countdown";

function CountdownComp() {
  function renderer({ days, completed }: { days: any; completed: any }) {
    return completed ? <span>Udeh nikah</span> : <span>{days} hari lagi</span>;
  }

  return (
    <section id="countdown">
      <div className="min-h-screen bg-[url('/images/afterHero/bg.jpg')] bg-cover bg-center text-white relative py-28 flex items-end">
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <p className="text-sm font-light">WEDDING INVITATION</p>
            <h1 className="text-3xl font-light mt-2 mb-4">Akbar & Retha</h1>
            <div className="grid grid-cols-2 border-y border-y-white text-center text-sm font-light">
              <p className="leading-[1.85] py-2 px-2 border-r border-r-white">
                SAVE THE DATE
                <br />
                Sabtu, 3 Juni 2023
              </p>
              <p className="py-2 px-2 leading-[1.85]">
                COUNTDOWN
                <br />
                <Countdown date={new Date("2023-06-03")} renderer={renderer} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownComp;
