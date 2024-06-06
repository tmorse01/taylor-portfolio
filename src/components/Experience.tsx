import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 text-white bg-gradient-to-r from-[#10B981] to-[#84CC16] md:py-24 lg:py-32"
    >
      <div className="container px-4 space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Experience
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have worked on a variety of projects, ranging from small
              startups to large enterprises.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">
              Sr. Full Stack Developer at Builders Capital
            </h3>
            <p className="text-sm text-gray-200 ">
              Puyallup, WA | 03/24 - Present
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside">
              <li>
                Lead the development of innovative web applications using HTML5,
                React, JavaScript, and SASS, enhancing the front-end experience
                for Builders Capital, the nation's largest private construction
                lender.
              </li>
              <li>
                Collaborate with multidisciplinary teams to tackle technical
                challenges, optimize and refactor code, and ensure adherence to
                high-quality standards through rigorous code reviews.
              </li>
              <li>
                Mentor junior developers by sharing knowledge and best
                practices, and actively engage in agile methodologies including
                sprint planning, reviews, and daily stand-ups.
              </li>
              <li>
                Drive full-stack development efforts by integrating C# .NET and
                Entity Framework, participating in architectural discussions,
                and providing strategic input on technology decisions.
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">
              Software Developer II at Heritage Bank
            </h3>
            <p className="text-sm text-gray-200 ">
              Burlington, WA | 02/19 - 03/24
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside">
              <li>
                Optimized production bundle, reducing bundle size by 90%,
                significantly enhancing application performance and user
                experience.
              </li>
              <li>
                Reworked security layer, removing attack vectors, and improving
                overall application security, ensuring compliance with industry
                standards.
              </li>
              <li>
                Acted as tech lead for multiple business critical internal
                applications, coordinating infrastructure deployments and
                presenting implementation plans to the change management board.
              </li>
              <li>
                Built the core commercial bank loan origination system, saving
                the company millions in third-party implementations and
                increasing profits by automating large portions of the loan
                process.
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">Side Projects</h2>
            <h3 className="text-lg font-bold">Formbox</h3>
            <p className="text-sm text-gray-200 ">
              React, Node.js, Mongodb, react-router
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside">
              <li>
                Created an application that enabled users to build dynamic
                forms, share a link to collect responses, then view responses.
              </li>
            </ul>
            <h3 className="text-lg font-bold">Mob Unity</h3>
            <p className="text-sm text-gray-200 ">
              Next.js, Mongodb, React, TailwindCSS
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside">
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

export default Experience;
