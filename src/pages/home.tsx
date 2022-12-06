import React from "react";
import { UserCard } from "../user-profile/ui/user-card";
import { useUserData } from "../user-profile/data/user.hooks";
import { IconButton } from "../components/icon-button";
import { TfiReload } from "react-icons/tfi";
import { LoadingWidget } from "../components/loading";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ErrorWidget } from "../components/error";

export const HomePage = () => {
  const [animateRef] = useAutoAnimate();

  const users = useUserData();

  return (
    <div
      ref={animateRef as any}
      className="flex items-center justify-center h-full"
    >
      {(() => {
        if (users.loading) {
          return <LoadingWidget />;
        }

        if (users.error) {
          return (
            <ErrorWidget
              onRetry={() => {
                users.refresh();
              }}
            />
          );
        }

        return (
          <>
            <div className="fixed top-0 right-0 p-6 flex gap-2">
              {/* Refresh Button */}

              <IconButton onClick={() => users.refresh()}>
                <TfiReload />
              </IconButton>
            </div>

            {/* Cards */}

            <div className="h-full p-2 flex flex-col gap-2 items-center justify-center">
              {users.data?.map((user) => (
                <UserCard key={user.login.uuid} user={user} />
              ))}
            </div>
          </>
        );
      })()}
    </div>
  );
};
