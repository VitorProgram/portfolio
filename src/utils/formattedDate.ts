import { useLocale } from "next-intl";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const useFormattedDate = () => {
  const locale = useLocale();

  const formatDate = (dateString: string | Date) => {
    const date =
      typeof dateString === "string" ? new Date(dateString) : dateString;

    let formatted = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
    }).format(date);

    formatted = capitalizeFirstLetter(formatted);

    return formatted;
  };

  return formatDate;
};
