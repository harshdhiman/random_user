import { format } from "date-fns";
import { BsMailbox } from "react-icons/bs";
import { HoverCard } from "../../../components/hover-card";
import { getLocalTimeByOffset } from "../../../utils/date-utils";
import { Dob, User } from "../../data/user.types";

export function NameCard(props: { user: User }) {
  return (
    <div className="flex flex-col gap-2 text-black text-sm relative w-full">
      <div>
        <div className="relative w-fit mr-[70px]">
          {/* Name */}

          <div
            style={{
              display: "-webkit-box",
              textOverflow: "ellipsis",
              lineHeight: "2.5rem",
              maxHeight: "5rem",
              overflow: "hidden",
              WebkitLineClamp: 2,
              lineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            className="text-4xl font-medium w-fit whitespace-pre-wrap"
          >{`${props.user.name.first} ${props.user.name.last}`}</div>

          {/* Years Badge */}
          <div className="absolute top-[-5px] right-[-70px] ">
            <YearBadge dob={props.user.dob} />
          </div>

          {/*  */}
        </div>
      </div>

      {/* Mail */}

      <a
        href={`mailto:${props.user.email}`}
        target="_blank"
        className="flex gap-2 items-center cursor-pointer"
      >
        <BsMailbox />
        <div>{props.user.email}</div>
      </a>

      {/* Time */}

      <div className="flex gap-2 items-center">
        <div>
          {format(
            getLocalTimeByOffset(props.user.location.timezone.offset),
            "hh:mm aa"
          )}{" "}
          Local
        </div>
        <HoverCard
          id="time-card"
          hoverContent={
            <div className="py-2 px-2 rounded-[3px] bg-[#e6e6e6] flex text-xs">
              {props.user.location.timezone.description}
            </div>
          }
        >
          <div className="py-[3px] px-[7px] rounded-[3px] bg-[#d9d9d9ff] flex">
            <div className=" text-xs">
              UTC {props.user.location.timezone.offset}
            </div>
          </div>
        </HoverCard>
      </div>
    </div>
  );
}

//
//
//

function YearBadge(props: { dob: Dob }) {
  return (
    <HoverCard
      id="year-card"
      hoverContent={
        <div className="rounded-2xl bg-[#e7e7e7] px-5 py-4">
          {format(Date.parse(props.dob.date), "dd MMMM yyyy")}
        </div>
      }
    >
      <div
        className="rounded-[14px] bg-[#d9d9d9ff] flex gap-[10px] justify-end 
                overflow-clip select-none pr-2"
      >
        <div className="text-base relative flex py-2 px-4">
          <p>{props.dob.age}</p>
          <div className="opacity-50 absolute text-[11px] font-bold  right-[2px] -rotate-90">
            yrs
          </div>
        </div>
      </div>
    </HoverCard>
  );
}
