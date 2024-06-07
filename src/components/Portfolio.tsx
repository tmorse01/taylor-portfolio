import { Header, Hero, Skills, Experience, Projects, Contact } from "./index";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
