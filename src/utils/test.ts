import { PodcastListApiResponse } from "@/types/podcastList";

export const mockPodcastList = [
  {
    id: "1",
    images: [
      { image_url: "https://example.com/image1.jpg", height: "50" },
      { image_url: "https://example.com/image2.jpg", height: "70" },
    ],
    title: "Test Podcast 1",
    author: "Test Author 1",
    href: "/podcast/1",
    description: "Podcast 1 description",
  },
  {
    id: "2",
    images: [
      { image_url: "https://example2.com/image1.jpg", height: "50" },
      { image_url: "https://example2.com/image2.jpg", height: "70" },
    ],
    title: "Test Podcast 2",
    author: "Test Author 2",
    href: "/podcast/2",
    description: "Podcast 2 description",
  },
];

export const mockPodcastDetail = {
  id: "1",
  image: "https://example.com/image2.jpg",
  title: "Test Podcast 1",
  author: "Test Author 1",
  description: "Podcast description",
};

// Empty API response
export const mockEmptyApiResponse: PodcastListApiResponse = {
  status: 200,
  statusText: "",
  data: {
    feed: {
      entry: [],
    },
  },
};

// Simplified API response
export const mockApiResponse: PodcastListApiResponse = {
  status: 200,
  statusText: "",
  data: {
    feed: {
      entry: [
        {
          id: {
            label: "1",
            attributes: {
              "im:id": "1",
            },
          },
          "im:name": {
            label: "Test Podcast 1",
          },
          "im:artist": {
            label: "Test Author 1",
          },
          "im:image": [
            {
              label: "https://example.com/image1.jpg",
              attributes: {
                height: "50",
              },
            },
            {
              label: "https://example.com/image2.jpg",
              attributes: {
                height: "70",
              },
            },
          ],
          summary: {
            label: "Podcast 1 description",
          },
        },
        {
          id: {
            label: "2",
            attributes: {
              "im:id": "2",
            },
          },
          "im:name": {
            label: "Test Podcast 2",
          },
          "im:artist": {
            label: "Test Author 2",
          },
          "im:image": [
            {
              label: "https://example2.com/image1.jpg",
              attributes: { height: "50" },
            },
            {
              label: "https://example2.com/image2.jpg",
              attributes: { height: "70" },
            },
          ],
          summary: {
            label: "Podcast 2 description",
          },
        },
      ],
    },
  },
};

export const mockEpisodes = [
  { id: "1", title: "Episode 1", date: "2023-04-01", duration: "30:00" },
  { id: "2", title: "Episode 2", date: "2023-04-08", duration: "45:00" },
];
