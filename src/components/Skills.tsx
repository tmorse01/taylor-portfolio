const Skills = () => {
  return (
    <section
      id="skills"
      className="py-12 text-white bg-gradient-to-r from-[#EF4444] to-[#F59E0B] md:py-24 lg:py-32"
    >
      <div className="container px-4 space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have a wide range of skills in web development, including React,
              Typescript, Node.js, Java, and more.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">React</h3>
            <p className="text-sm text-gray-200 ">
              Proficient in building complex, scalable, and responsive React
              applications.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">TypeScript</h3>
            <p className="text-sm text-gray-200 ">
              Experienced in writing clean, efficient, and maintainable
              TypeScript code.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">CSS</h3>
            <p className="text-sm text-gray-200 ">
              Skilled in creating visually appealing and responsive designs
              using CSS.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">HTML</h3>
            <p className="text-sm text-gray-200 ">
              Proficient in building semantic and accessible web pages with
              HTML.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Node.js</h3>
            <p className="text-sm text-gray-200 ">
              Experienced in building scalable and efficient server-side
              applications with Node.js.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">C#</h3>
            <p className="text-sm text-gray-200">
              Proficient in using .NET Entity Framework for efficient data
              modeling and database interaction.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Java</h3>
            <p className="text-sm text-gray-200 ">
              Skilled in building robust and efficient applications with Java.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Python</h3>
            <p className="text-sm text-gray-200 ">
              Experienced in writing clean and efficient Python code for various
              applications.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">SQL</h3>
            <p className="text-sm text-gray-200 ">
              Proficient in writing complex SQL queries and managing databases.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">MongoDB</h3>
            <p className="text-sm text-gray-200 ">
              Skilled in working with MongoDB for building NoSQL databases.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Azure / AWS</h3>
            <p className="text-sm text-gray-200 ">
              Experienced in using Azure and AWS services for deploying and
              managing applications.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Git</h3>
            <p className="text-sm text-gray-200 ">
              Proficient in using Git for version control and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
