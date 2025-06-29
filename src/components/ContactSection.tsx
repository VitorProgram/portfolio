import FormContact from "./FormContact";

const ContactSection = () => {
  return (
    <section
      className="pt-20 flex flex-col lg:flex-row gap-8 items-center text-neutral-100"
      id="contact"
    >
      {/* Ilustração com animação de entrada pela esquerda */}
      <img
        src="/illustration-3.svg"
        alt="Illustration 3"
        data-aos="slide-left"
        data-aos-once="true"
        className="flex-1 rounded-lg hidden lg:block"
      />

      {/* Formulário animando com zoom suave */}
      <div
        className="w-full flex-[1.5] hidden lg:block"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <FormContact />
      </div>

      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        className="lg:hidden w-full"
      >
        <FormContact />
      </div>
    </section>
  );
};

export default ContactSection;
