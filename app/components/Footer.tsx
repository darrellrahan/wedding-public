import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#656565_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
            <p className="text-[0.75rem] font-light leading-relaxed">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
              kami. Atas kehadiran dan doanya kami mengucapkan terimakasih
            </p>
            <p className="text-[0.75rem] font-light leading-relaxed">
              Wassalamualaikum Warahmatullahi Wabarakatuh
            </p>
            <h1 className="text-[1.75rem] font-light">Akbar & Retha</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#656565] p-20 flex items-center justify-center">
        <img src="/images/footer/logo.png" alt="logo" className="w-24" />
      </div>
    </section>
  );
}

export default Footer;
