import { TfiReload } from "react-icons/tfi";
import { IconButton } from "./icon-button";

/**
 *
 * @param props `onRetry` - if provided, a retry button will be shown
 */
export const ErrorWidget = (props: {
  errorTitle?: string;
  errorMessage?: string;
  onRetry?: () => void;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 select-none text-xs">
      <img
        src="https://media.tenor.com/y-5nnOLoWlUAAAAd/error-red-notification.gif"
        alt="Error"
        className="object-cover w-[100px] h-[100px] rounded-[20px] "
      />
      <div className="flex flex-col gap-3 items-center text-red-300">
        <p className="text-lg font-medium bg-red-500/20 text-red-500 px-3 py-1 rounded-md">
          {props.errorTitle ?? "Error!"}
        </p>
        <p>{props.errorMessage ?? "Something went wrong!"}</p>
      </div>
      {props.onRetry && (
        <IconButton onClick={props.onRetry}>
          <TfiReload />
        </IconButton>
      )}
    </div>
  );
};
