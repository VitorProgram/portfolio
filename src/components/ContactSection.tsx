import FormContact from "./FormContact";

const ContactSection = () => {
  return (
    <section
      className="pt-20 flex gap-8 items-center text-neutral-100"
      id="contact"
    >
      <img
        src="/illustration-3.svg"
        alt="Illustration 3"
        className="flex-1 rounded-lg"
      />

      <FormContact />
    </section>
  );
};

export default ContactSection;
