import { describe, it, expect, vi } from "vitest";
import { checkIsCacheExpired } from "./utils";
import { CACHE_EXPIRATION_TIME } from "@/utils/config";
import { getLocalStorageItem } from "@/utils/localStorage";

vi.mock("@/utils/localStorage", () => ({
  getLocalStorageItem: vi.fn(),
}));

describe("checkIsCacheExpired", () => {
  const mockGetLocalStorageItem = getLocalStorageItem as any;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return true if there is no cached timestamp", () => {
    mockGetLocalStorageItem.mockReturnValue(null);
    expect(checkIsCacheExpired()).toBe(true);
  });

  it("should return true if the cache is expired", () => {
    // Simulate timestamp from the past
    const pastTimestamp = (
      Date.now() -
      CACHE_EXPIRATION_TIME -
      1000
    ).toString();
    mockGetLocalStorageItem.mockReturnValue(pastTimestamp); 
    expect(checkIsCacheExpired()).toBe(true);
  });

  it("should return false if the cache is still valid", () => {
    // Simulate valid timestamp
    const validTimestamp = (Date.now() - CACHE_EXPIRATION_TIME / 2).toString();
    mockGetLocalStorageItem.mockReturnValue(validTimestamp); 
    expect(checkIsCacheExpired()).toBe(false);
  });
});
