"use client";

import { useState } from "react";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

// El RPC público oficial (api.mainnet-beta.solana.com) bloquea peticiones
// directas desde el navegador (403). publicnode sí admite CORS desde el
// cliente sin necesitar API key.
const RPC_ENDPOINT = "https://solana.publicnode.com";
const RECIPIENT = "6c1A14rMMfAGtKAeCojWCkbFiPu5YNmmvbKcNTZw9bfu";
const LAMPORTS_PER_SOL = 1_000_000_000;

const PLANS = [
  { id: "full", label: "Pago único", eur: 450, solEstimate: "2.2" },
  { id: "half", label: "1 de 2 pagos", eur: 250, solEstimate: "1.2" },
] as const;

type PhantomProvider = {
  isPhantom?: boolean;
  publicKey?: { toString(): string };
  connect: () => Promise<{ publicKey: { toString(): string } }>;
  signAndSendTransaction: (tx: Transaction) => Promise<{ signature: string }>;
};

function getPhantom(): PhantomProvider | null {
  if (typeof window === "undefined") return null;
  const provider = (window as unknown as { solana?: PhantomProvider }).solana;
  return provider?.isPhantom ? provider : null;
}

export default function PagarCriptoClient() {
  const [address, setAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [plan, setPlan] = useState<(typeof PLANS)[number]>(PLANS[0]);
  const [solAmount, setSolAmount] = useState<string>(PLANS[0].solEstimate);
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [txSig, setTxSig] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function connectWallet() {
    setError(null);
    const provider = getPhantom();
    if (!provider) {
      setError("No se detecta Phantom. Instala la extensión desde phantom.app y recarga esta página.");
      return;
    }
    setConnecting(true);
    try {
      const resp = await provider.connect();
      setAddress(resp.publicKey.toString());
    } catch {
      setError("Conexión cancelada.");
    } finally {
      setConnecting(false);
    }
  }

  function selectPlan(p: (typeof PLANS)[number]) {
    setPlan(p);
    setSolAmount(p.solEstimate);
    setTxSig(null);
    setError(null);
  }

  async function pay() {
    setError(null);
    setTxSig(null);
    const provider = getPhantom();
    if (!provider || !address) {
      setError("Conecta tu wallet primero.");
      return;
    }
    const amount = parseFloat(solAmount.replace(",", "."));
    if (!amount || amount <= 0) {
      setError("Introduce una cantidad de SOL válida.");
      return;
    }

    setSending(true);
    setStatus("Preparando transacción...");
    try {
      const connection = new Connection(RPC_ENDPOINT, "confirmed");
      const fromPubkey = new PublicKey(address);
      const toPubkey = new PublicKey(RECIPIENT);

      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: Math.round(amount * LAMPORTS_PER_SOL),
        }),
      );

      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = fromPubkey;

      setStatus("Confirma la transacción en Phantom...");
      const { signature } = await provider.signAndSendTransaction(tx);
      setTxSig(signature);
      setStatus(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo enviar el pago.");
      setStatus(null);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen marble-section text-[#1c1a16] flex items-center justify-center px-6 py-16">
      <div className="max-w-md w-full">
        <a href="/" className="text-sm text-[#8a8478] hover:text-[#8a691f] transition">
          ← Focus
        </a>

        <div className="mt-8 border border-[#e2ddd3] rounded-2xl bg-white p-8 text-center shadow-[0_20px_60px_rgba(169,129,47,0.12)]">
          <p className="uppercase tracking-[0.2em] text-[#8a691f] text-xs font-semibold mb-2">
            Mentoría Memecoins · Pago en cripto
          </p>
          <h1 className="text-2xl font-black mb-6">Elige tu plan y paga con Phantom</h1>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => selectPlan(p)}
                className={`border rounded-xl p-4 text-left transition ${
                  plan.id === p.id
                    ? "border-[#a9812f] bg-[#a9812f]/5"
                    : "border-[#e2ddd3] hover:border-[#a9812f]/50"
                }`}
              >
                <div className="text-xs text-[#8a8478] mb-1">{p.label}</div>
                <div className="text-xl font-black">{p.eur}€</div>
              </button>
            ))}
          </div>

          {!address ? (
            <button
              onClick={connectWallet}
              disabled={connecting}
              className="w-full bg-[#a9812f] text-white font-bold py-3.5 rounded-md hover:bg-[#8a691f] transition disabled:opacity-50"
            >
              {connecting ? "Conectando..." : "Connect Wallet"}
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-xs text-[#8a8478] bg-[#f4f2ee] rounded-lg py-2 px-3 font-mono">
                {address.slice(0, 6)}…{address.slice(-6)}
              </div>

              <div className="text-left">
                <label className="block text-xs font-semibold text-[#8a8478] mb-1.5">
                  Cantidad en SOL (revisa el precio actual antes de confirmar)
                </label>
                <input
                  value={solAmount}
                  onChange={(e) => setSolAmount(e.target.value)}
                  className="w-full border border-[#e2ddd3] rounded-md px-3 py-2.5 text-sm font-mono"
                />
              </div>

              <button
                onClick={pay}
                disabled={sending}
                className="w-full bg-[#a9812f] text-white font-bold py-3.5 rounded-md hover:bg-[#8a691f] transition disabled:opacity-50"
              >
                {sending ? "Enviando..." : `Pagar ${solAmount} SOL`}
              </button>
            </div>
          )}

          {status && <p className="text-sm text-[#8a691f] mt-4">{status}</p>}
          {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
          {txSig && (
            <div className="mt-4 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
              ✓ Pago enviado.{" "}
              <a
                href={`https://solscan.io/tx/${txSig}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ver en Solscan
              </a>
            </div>
          )}

          <p className="text-[11px] text-[#a49c8a] mt-6">
            La cantidad en SOL es una estimación — confirma el precio actual antes de enviar. Tú
            apruebas siempre el importe exacto dentro de Phantom antes de que salga nada de tu wallet.
          </p>
        </div>
      </div>
    </div>
  );
}
