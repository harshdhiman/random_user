import { HoverCard } from "../../../components/hover-card";
import { IconFemale, IconMale } from "../../../components/icons/icons";

export function GenderCard(props: { gender: "male" | "female" }) {
  return (
    <HoverCard
      id={"gender-card"}
      hoverContent={
        <div
          className={`px-4 py-2 rounded-lg capitalize bg-[#E9E9E9] 
                      flex flex-col
                    ${
                      props.gender === "male"
                        ? "text-blue-400"
                        : "text-pink-400"
                    }`}
        >
          <span className="text-[10px]">
            {props.gender === "male"
              ? "He's"
              : props.gender === "female"
              ? "She's"
              : "They're"}
          </span>
          <span className="font-semibold">{props.gender}</span>
        </div>
      }
    >
      <div
        className={`p-2 rounded-lg  fill-black
                  ${props.gender === "male" ? "bg-blue-400" : "bg-pink-400"}
                  `}
      >
        {props.gender === "male" ? <IconMale /> : <IconFemale />}
      </div>
    </HoverCard>
  );
}
