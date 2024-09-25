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
  },
];

// Empty API response
export const mockEmptyApiResponse = {
  data: {
    feed: {
      entry: [],
    },
  },
};

// Simplified API response
export const mockApiResponse = {
  data: {
    feed: {
      entry: [
        {
          id: {
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
            { label: "https://example.com/image1.jpg", height: "50" },
            { label: "https://example.com/image2.jpg", height: "70" },
          ],
        },
        {
          id: {
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
            { label: "https://example2.com/image1.jpg", height: "50" },
            { label: "https://example2.com/image2.jpg", height: "70" },
          ],
        },
      ],
    },
  },
};
