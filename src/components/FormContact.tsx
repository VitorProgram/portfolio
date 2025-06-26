"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const FormContact = () => {
  const t = useTranslations("contact"); // Aqui pega as traduções direto do namespace "contact"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "service_xt4kvtx",
        "template_pv3r0tu",
        {
          name: data.name,
          email: data.email,
          subject: data.subject || "No subject",
          message: data.message,
          time: new Date().toLocaleString(),
        },
        "smV5kPrAWykhe0kPg"
      );
      reset();
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  return (
    <div className="flex-[1.5] md:max-w-160 md:m-auto lg:max-w-full">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        {t("title")}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-6"
      >
        {/* Nome */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">{t("fields.name")}</Label>
          <Input
            id="name"
            placeholder={t("placeholders.name")}
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("name", { required: t("errors.nameRequired") })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">{t("fields.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("placeholders.email")}
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("email", {
              required: t("errors.emailRequired"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("errors.emailInvalid"),
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Assunto */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">{t("fields.subject")}</Label>
          <Input
            id="subject"
            placeholder={t("placeholders.subject")}
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("subject")}
          />
        </div>

        {/* Mensagem */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">{t("fields.message")}</Label>
          <Textarea
            id="message"
            rows={6}
            placeholder={t("placeholders.message")}
            className="bg-neutral-900 transition border border-neutral-700 p-4 rounded-lg resize-none focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("message", { required: t("errors.messageRequired") })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Botão */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-transparent border-2 h-12 cursor-pointer border-neutral-200 hover:border-gray-900 hover:bg-neutral-100 transition-colors duration-300 text-neutral-100 hover:text-gray-900 py-3 px-6 rounded-lg text-lg font-medium self-end"
        >
          {isSubmitting ? t("button.sending") : t("button.send")}
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
