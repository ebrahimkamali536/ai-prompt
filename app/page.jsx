import React from "react";
import Feed from "@components/Feed";
import Image from "next/image";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

      <Image
        src="/assets/images/banner.jpg"
        alt="banner"
        width={2000}
        height={2000}
        className="absolute top-0 left-0 right-0 w-screen -z-10 max-h-[560px]"
        priority
      />
      <div>
        <h1 className="head_text text-center">
          نقد و بررسی
          <br />
          <span className="text-white text-center">
            اشتراک نظرات فیلم و سریال
          </span>
        </h1>
        <p className="desc text-center z-20">
          نظرتو راجب فیلم و سریال هایی که دیدی برامون بنویس تا بقیه هم ببینن.
          میتونی دوستاتم دنبال کنی تا کلی فیلم و سریال خوب بهت معرفی کنن
        </p>
      </div>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default Home;
