import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] py-12 md:py-24 lg:py-32 text-white"
    >
      <div className="container px-4 space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Feel free to reach out to me if you have any questions or would
              like to discuss a potential project.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto space-y-2">
          <form className="flex flex-col space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <TextArea placeholder="Message" />
            <Button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="w-full px-4 py-2 font-medium text-white bg-[#F59E0B] rounded-md hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBBF24]"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
