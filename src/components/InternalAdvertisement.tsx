import React from "react";
import PrimaryButton from "./PrimaryButton";

interface AdvertisementProps {
  image: string;
  title: string;
  link: string;
}

const InternalAdvertisement: React.FC<AdvertisementProps> = ({
  image,
  title,
  link,
}) => {
  return (
    <div className="internal-ad-main-wrapper-block | bg-[#3DAEFF] h-full rounded-xl">
      <a href={link}>
        <div className="internal-ad-container | h-full py-[1em] px-[1.25em]">
          <div className="internal-ad-inner | flex flex-col justify-between h-full gap-[0.5rem]">
            <h1 className="text-white | lg:text-[0.875rem] lg:text-bold text-left">
              {title}
            </h1>
            <PrimaryButton text="Подписаться"></PrimaryButton>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InternalAdvertisement;
