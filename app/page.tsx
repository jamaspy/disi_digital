import React from 'react';
import {
  HomePage,
  AboutPage,
  ExperiencePage,
  ContactPage,
} from '@/components/Pages';
import Nav from '@/components/Nav';
const Main = () => {
  return (
    <main className="flex flex-col">
      <Nav />
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ContactPage />
    </main>
  );
};

export default Main;
