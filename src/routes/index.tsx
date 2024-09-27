import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/index';
import PodcastLayout from '@/components/podcasts/PodcastLayout';
import EpisodesGrid from '@/components/podcasts/EpisodesGrid';
import EpisodeDetails from '@/pages/EpisodeDetails';
import NotFound from '@/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:podcastId" element={<PodcastLayout />}>
        <Route index element={<EpisodesGrid />} />
        <Route path="episode/:episodeId" element={<EpisodeDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
