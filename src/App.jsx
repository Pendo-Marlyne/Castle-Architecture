import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import ComingSoon from './components/ComingSoon.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<ComingSoon title="About the Practice" />} />
          <Route path="expertise" element={<ComingSoon title="Our Expertise" />} />
          <Route path="projects" element={<ComingSoon title="Projects" />} />
          <Route path="projects/:slug" element={<ComingSoon title="Project" />} />
          <Route path="approach" element={<ComingSoon title="Our Approach" />} />
          <Route path="insights" element={<ComingSoon title="Insights" />} />
          <Route path="insights/:slug" element={<ComingSoon title="Article" />} />
          <Route path="contact" element={<ComingSoon title="Contact" />} />
          <Route path="privacy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}