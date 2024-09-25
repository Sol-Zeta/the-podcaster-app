import {
  mockApiResponse,
  mockEmptyApiResponse,
  mockPodcastList,
} from "@/utils/test";
import { formatResponse } from "./utils";

describe("formatResponse", () => {
  it("should transform API response into CardProps[]", () => {
    expect(formatResponse(mockApiResponse)).toEqual(mockPodcastList);
  });

  it("should return an empty array if there are no entries", () => {
    expect(formatResponse(mockEmptyApiResponse)).toEqual([]);
  });

  it("should return an empty array if API response is undefined or null", () => {
    expect(formatResponse(null)).toEqual([]);
    expect(formatResponse(undefined)).toEqual([]);
  });
});
