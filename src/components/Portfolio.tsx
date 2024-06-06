import { Header, Hero, Skills, Experience, Education, Contact } from "./index";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
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
