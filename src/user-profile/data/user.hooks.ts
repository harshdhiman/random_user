import { useEffect, useState } from "react";
import { fetchUserData } from "./user.repo";
import { User, UserResponse } from "./user.types";

/**
 * Fetches user data from API
 *  - Automatically fetches data on mount
 *  - Saves Data to Localstorage
 *
 * @param options maxResults: number of results to return (default: 1)
 * @returns an object containing the `user data list` and a `refetch` function along with `loading` and `error` states
 */
export function useUserData(options?: { maxResults?: number }) {
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const addResponseToLocalStorage = (response: UserResponse) => {
    const _prevData: UserResponse[] = JSON.parse(
      localStorage.getItem("user-data") || "[]"
    );

    // Check for duplicates using `seed`
    if (
      _prevData.filter((item) => item.info.seed === response.info.seed)
        .length === 0
    ) {
      const _newData = [..._prevData, response];
      localStorage.setItem("user-data", JSON.stringify(_newData));
    }
  };

  const getUserData = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await fetchUserData(options);
      setData(response.results);
      addResponseToLocalStorage(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return {
    data,
    error,
    loading,
    refresh: getUserData,
  };
}
