import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-r md:py-24 lg:py-32">
      <div className="container px-4 mx-auto space-y-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
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
            <Button primary type="submit" onClick={(e) => e.preventDefault()}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
