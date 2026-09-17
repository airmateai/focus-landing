"use client";

import CryptoPayClient from "@/components/CryptoPayClient";

const PLANS = [
  { id: "full", label: "Pago único", eur: 450 },
  { id: "half", label: "1 de 2 pagos", eur: 250 },
] as const;

export default function PagarCriptoClient() {
  return (
    <CryptoPayClient
      eyebrow="Mentoría Memecoins · Pago en cripto"
      title="Elige tu plan y paga con Phantom"
      plans={PLANS}
    />
  );
}
