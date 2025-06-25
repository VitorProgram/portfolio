/**
 * Data representando o início ou conclusão da formação.
 * Deve ser criada com o construtor Date usando ano, mês (0 = Janeiro) e dia.
 * Exemplo para Janeiro de 2025:
 *   new Date(2025, 0, 1)
 * Exemplo para Agosto de 2024:
 *   new Date(2024, 7, 1)
 */

type Education = {
  title: string;
  institution: string;
  imagePath: string;
  status?: "Completed" | "Studying";
  initDate?: Date;
  endDate?: Date;
};
