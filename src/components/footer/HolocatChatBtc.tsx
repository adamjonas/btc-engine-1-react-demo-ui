import Image from "next/image";
import React from "react";

const HolocatChatBtc = () => {
  return (
    <div className="flex md:flex-row items-start p-2 xl:p-3 2xl:p-5 gap-2 xl:gap-5 max-w-lg xl:max-w-xl 2xl:max-w-2xl md:items-start border rounded-md xl:rounded-2xl border-custom-stroke">
      <Image alt="Holocat " width={88} height={88} src={"/holocat.png"} />
      <div className="flex flex-col gap-1 lg:gap-1.5">
        <h3 className="text-[10px] lg:text-lg font-bold text-custom-primary-text">
          Want to Chat with Holocat?
        </h3>
        <p className="text-custom-primary-text text-[10px] xl:text-sm ">
          {" "}
          Holocat’s read all the mailing lists, podcast articles, and more. Ask
          him any question you’d like to deep dive into.{" "}
        </p>
        <a
          target="_blank"
          href="https://chat.bitcoinsearch.xyz/"
          className="text-custom-background rounded-md lg:rounded-[10px] p-1.5 lg:p-3 hover:bg-custom-accent cursor-pointer bg-custom-button max-w-[max-content] text-[10px] lg:text-sm"
        >
          Ask Holocat a Question
        </a>
      </div>
    </div>
  );
};

export default HolocatChatBtc;
