import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Expertise = lazy(() => import('./pages/Expertise.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'));
const Approach = lazy(() => import('./pages/Approach.jsx'));
const Insights = lazy(() => import('./pages/Insights.jsx'));
const ArticleDetails = lazy(() => import('./pages/ArticleDetails.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
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
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<ArticleDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}