const Projects = () => {
  return (
    <section id="education" className="py-12 bg-gray-900 md:py-24 lg:py-32">
      <div className="container px-4 space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Projects
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have a strong educational background in computer science and web
              development.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Formbox</h3>
            <p className="text-sm ">React, Node.js, Mongodb, react-router</p>
            <ul className="text-sm list-disc list-inside">
              <li>
                Created an application that enabled users to build dynamic
                forms, share a link to collect responses, then view responses.
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Mob Unity</h3>
            <p className="text-sm ">Next.js, Mongodb, React, TailwindCSS</p>
            <ul className="text-sm list-disc list-inside">
              <li>
                Created an application for facilitating collaboration between
                developers using a process known as mob development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
