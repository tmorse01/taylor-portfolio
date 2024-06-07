const Education = () => {
  return (
    <section
      id="education"
      className="py-12 text-white bg-gradient-to-r md:py-24 lg:py-32"
    >
      <div className="container px-4 space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Education
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              I have a strong educational background in computer science and web
              development.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Bachelor's Degree</h3>
            <p className="text-sm">Computer Science</p>
            <p className="text-sm">Western Washington University - 2018</p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Online Cources</h3>
            <p className="text-sm">
              Taken various online courses on web development, including React,
              Node.js, and more.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Self-learning</h3>
            <p className="text-sm">
              Continuously enhancing my skills through self-directed study and
              personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
