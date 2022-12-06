import React from "react";
import { User } from "../data/user.types";
import { FaLocationArrow } from "react-icons/fa";
import { IconButton } from "../../components/icon-button";
import { BiPhoneCall } from "react-icons/bi";
import { GenderCard } from "./sub/gender-card";
import { NameCard } from "./sub/name-card";

export const UserCard = (props: { user: User }) => {
  return (
    <div
      className="w-[500px] pb-6 bg-[#E9E9E9]/[0.6] rounded-[20px] p-2.5 relative
        
      "
    >
      <img
        src={props.user.picture.large}
        alt="user image used in background"
        className="w-full h-full absolute object-cover inset-0 opacity-50  -z-10 blur-2xl"
      />

      <div className="flex flex-col gap-5">
        {/* Upper Part */}

        <div className="flex items-center gap-5  flex-none ">
          {/* Image Profile */}

          <div className="flex  gap-[10px] relative flex-none">
            <img
              src={props.user.picture.large}
              width="132px"
              height="132px"
              alt="user image"
              className="rounded-[40px]  relative object-cover flex-none"
            />

            {/* Gender */}

            <div className="absolute right-[-6px] bottom-[-6px] ">
              <GenderCard gender={props.user.gender} />
            </div>

            {/*  */}
          </div>

          {/* Name Card */}

          <NameCard user={props.user} />
        </div>

        <div className="flex items-end justify-between px-1 ">
          {/* Address */}

          <a
            href={`https://www.google.com/maps/search/${props.user.location.street.name}+${props.user.location.city}+${props.user.location.state}+${props.user.location.country}`}
            target="_blank"
            className="flex gap-4 text-black items-center cursor-pointer transition-all px-3 py-1 rounded-lg
            hover:bg-white/20 active:bg-white/40
            "
          >
            {/*  */}
            <div className="p-3">
              <FaLocationArrow />
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <div className="text-base">
                {`${props.user.location.street.number}, ${props.user.location.street.name}`}
              </div>
              <div className="text-lg">
                {`${props.user.location.state}, ${props.user.location.city}`}
              </div>
              <div className=" text-xs">
                {`${props.user.location.country} - ${props.user.location.postcode}`}
              </div>
            </div>
          </a>

          {/* Right Side - Call Button */}
          <a href={`tel:${props.user.phone}`}>
            <IconButton>
              <BiPhoneCall />
            </IconButton>
          </a>
        </div>

        {/*  */}
      </div>
    </div>
  );
};
