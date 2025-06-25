"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Integração futura aqui (EmailJS, FormSubmit, etc.)
  };

  return (
    <div className="flex-[1.5]">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Get in Touch
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col gap-6"
      >
        {/* Nome */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Assunto */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Subject (optional)"
            className="bg-neutral-900 h-13 transition border border-neutral-700 p-4 rounded-lg focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("subject")}
          />
        </div>

        {/* Mensagem */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={6}
            placeholder="Write your message here"
            className="bg-neutral-900 transition border border-neutral-700 p-4 rounded-lg resize-none focus:border-gray-400 focus:ring-0 focus-visible:ring-0 text-neutral-100"
            {...register("message", { required: "Message is required" })}
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
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default FormContact;
