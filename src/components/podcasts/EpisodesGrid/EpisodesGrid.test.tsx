import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EpisodesGrid from './index';

// Mock data
const mockEpisodes = [
  { id: '1', title: 'Episode 1', date: '2023-04-01', duration: '30:00' },
  { id: '2', title: 'Episode 2', date: '2023-04-08', duration: '45:00' },
];

// Wrapper component to provide router context
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('EpisodesGrid', () => {
  it('renders the correct number of episodes', () => {
    render(<EpisodesGrid podcastId="123" episodes={mockEpisodes} />, { wrapper });
    expect(screen.getByText('Episodes: 2')).toBeInTheDocument();
  });

  it('renders the table headers correctly', () => {
    render(<EpisodesGrid podcastId="123" episodes={mockEpisodes} />, { wrapper });
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();
  });

  it('renders episode data correctly', () => {
    render(<EpisodesGrid podcastId="123" episodes={mockEpisodes} />, { wrapper });
    mockEpisodes.forEach((episode) => {
      expect(screen.getByText(episode.title)).toBeInTheDocument();
      expect(screen.getByText(episode.date)).toBeInTheDocument();
      expect(screen.getByText(episode.duration)).toBeInTheDocument();
    });
  });

  it('renders correct links for episodes', () => {
    render(<EpisodesGrid podcastId="123" episodes={mockEpisodes} />, { wrapper });
    mockEpisodes.forEach((episode) => {
      const link = screen.getByText(episode.title).closest('a');
      expect(link).toHaveAttribute('href', `/podcast/123/episode/${episode.id}`);
    });
  });

  it('renders a message when no episodes are provided', () => {
    render(<EpisodesGrid podcastId="123" episodes={[]} />, { wrapper });
    expect(screen.getByText('No episodes found')).toBeInTheDocument();
  });
});