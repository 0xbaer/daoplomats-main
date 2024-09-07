import LetsWorkHeading from "./LetsWorkHeading";

import Input from "@/components/ui/input/Input";
import Textarea from "@/components/ui/input/Textarea";
import LetsWorkForm from "./LetsWorkForm";

const LetsWorkTogether = () => {
  return (
    <div className="relative z-10 py-28 md:py-32 lg:py-40 xl:py-48 space-y-20 ">
      <LetsWorkHeading />

      {/* <form
        className="w-full sm:w-10/12 md:w-8/12 max-w-4xl sm:mx-auto space-y-6 px-8"
        aria-labelledby="lets-work-together-heading"
      >
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="flex-1">
            <Input
              type="text"
              id="name"
              name="name"
              label="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="flex-1">
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <Input
          type="text"
          id="service"
          name="service"
          label="Service"
          placeholder="Service you are interested in"
          required
        />

        <Textarea
          rows={6}
          id="message"
          name="message"
          label="Tell us a little more about your project and how we can help"
          placeholder="Tell us a little more about your project and how we can help"
          required
        />

        <button
          type="button"
          aria-label="Send Message"
          className="btn-custom rounded-full text-black bg-primary w-full focus:ring-primary prevent-select border border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
        >
          Send Message
        </button>
      </form> */}

      <LetsWorkForm />
    </div>
  );
};

export default LetsWorkTogether;
