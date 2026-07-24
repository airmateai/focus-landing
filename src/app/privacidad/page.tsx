export const metadata = { title: "Política de Privacidad — Focus" };

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ee] text-[#1c1a16] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-sm text-[#8a8478]">
          ← Focus
        </a>
        <h1 className="text-3xl font-black mt-4 mb-8">Política de Privacidad</h1>
        <p className="text-sm text-[#8a8478] mb-10">
          Última actualización: 24 de julio de 2026
        </p>

        <div className="space-y-8 text-[#3a362e] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">1. Qué datos recogemos</h2>
            <p>
              Al registrarte recogemos: email, nombre de usuario, contraseña
              (cifrada, nunca la vemos en texto plano) y, opcionalmente, una
              foto de perfil que subas voluntariamente. Al usar los canales de
              comunidad, guardamos los mensajes y archivos que compartas. Al
              pagar la membresía, Stripe procesa los datos de pago — nosotros
              nunca almacenamos tu tarjeta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">2. Para qué los usamos</h2>
            <p>
              Usamos tus datos exclusivamente para darte acceso a la
              plataforma, identificarte en la comunidad, gestionar tu
              suscripción y comunicarnos contigo sobre el servicio. No
              vendemos ni compartimos tus datos con terceros con fines
              publicitarios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">3. Quién puede ver tus datos</h2>
            <p>
              Tu nombre de usuario, foto de perfil y mensajes son visibles
              para el resto de miembros de la comunidad (es una plataforma
              social). Tu email es privado — no es visible para otros
              miembros bajo ninguna circunstancia, solo lo usamos nosotros
              para gestión de cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">4. Dónde se almacenan los datos</h2>
            <p>
              Los datos se almacenan en Supabase (infraestructura en la
              nube con cifrado en tránsito y en reposo) y los pagos los
              procesa Stripe, ambos proveedores con estándares de seguridad
              reconocidos internacionalmente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">5. Tus derechos</h2>
            <p>
              Puedes solicitar en cualquier momento acceder a tus datos,
              corregirlos o eliminar tu cuenta y todos los datos asociados a
              ella. Para ejercer estos derechos, contacta con nosotros a
              través de los canales indicados en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">6. Cookies</h2>
            <p>
              Usamos únicamente cookies técnicas necesarias para mantener tu
              sesión iniciada. No usamos cookies de rastreo publicitario.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
