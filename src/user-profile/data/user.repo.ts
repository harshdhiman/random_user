import axios from "axios";
import { UserResponse } from "./user.types";

const API_URL = "https://randomuser.me/api";

/**
 *
 * @param options maxResults: number of results to return (default: 1)
 * @returns UserData from API
 */
export async function fetchUserData(options?: {
  maxResults?: number;
}): Promise<UserResponse> {
  const response = await axios.get<UserResponse>(API_URL, {
    params: {
      results: options?.maxResults,
    },
  });
  return response.data;
}
