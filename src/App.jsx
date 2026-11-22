import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import ComingSoon from './components/ComingSoon.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Expertise = lazy(() => import('./pages/Expertise.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));
const Approach = lazy(() => import('./pages/Approach.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="projects" element={<Portfolio />} />
          <Route path="projects/:slug" element={<ProjectDetails />} />
          <Route path="approach" element={<Approach />} />
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