import { Header, Hero, Skills, Experience, Education, Contact } from "./index";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-gray-800 dark:text-gray-50">
      <Header />
      <main className="container flex-1 mx-auto">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;
