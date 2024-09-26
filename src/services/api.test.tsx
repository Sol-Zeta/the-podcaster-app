import {
  mockApiResponse,
  mockEmptyApiResponse,
  mockPodcastList,
} from "@/utils/test";
import { formatPodcastListResponse } from "./utils";

describe("formatResponse", () => {
  it("should transform API response into PodcastCardProps[]", () => {
    expect(formatPodcastListResponse(mockApiResponse)).toEqual(mockPodcastList);
  });

  it("should return an empty array if there are no entries", () => {
    expect(formatPodcastListResponse(mockEmptyApiResponse)).toEqual([]);
  });

  it("should return an empty array if API response is undefined or null", () => {
    expect(formatPodcastListResponse(null)).toEqual([]);
    expect(formatPodcastListResponse(undefined)).toEqual([]);
  });
});
