import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import PodcastDetails from '@/pages/PodcastDetails';
import EpisodeDetails from '@/pages/EpisodeDetails';
import NotFound from '@/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:podcastId" element={<PodcastDetails />} />
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetails />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
