"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração padrão da animação
      // once: true -> anima só uma vez
    });
  }, []);

  return null; // não renderiza nada na tela
}
