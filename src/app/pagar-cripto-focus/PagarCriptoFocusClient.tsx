"use client";

import CryptoPayClient from "@/components/CryptoPayClient";

const PLANS = [{ id: "monthly", label: "Membresía Focus", eur: 99.99 }] as const;

export default function PagarCriptoFocusClient() {
  return (
    <CryptoPayClient
      eyebrow="Focus · Pago en cripto"
      title="Únete a Focus pagando con Phantom"
      plans={PLANS}
      footnote="Esto cubre tu primer mes. Al ser un pago en cripto no se renueva solo — vuelve aquí cada mes para renovar, o pásate a pago con tarjeta desde tu cuenta. Tú apruebas siempre el importe exacto dentro de Phantom antes de que salga nada de tu wallet."
    />
  );
}
