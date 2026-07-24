export const metadata = { title: "Términos de Servicio — Focus" };

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#f4f2ee] text-[#1c1a16] px-6 py-16">
      <div className="max-w-2xl mx-auto prose-focus">
        <a href="/" className="text-sm text-[#8a8478]">
          ← Focus
        </a>
        <h1 className="text-3xl font-black mt-4 mb-8">Términos de Servicio</h1>
        <p className="text-sm text-[#8a8478] mb-10">
          Última actualización: 24 de julio de 2026
        </p>

        <div className="space-y-8 text-[#3a362e] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">1. Quiénes somos</h2>
            <p>
              Focus es una comunidad y plataforma de formación online dirigida a
              hispanohablantes, operada por sus fundadores. Al registrarte o
              adquirir una membresía aceptas estos términos en su totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">2. La membresía</h2>
            <p>
              La membresía da acceso a los módulos de aprendizaje y a la
              comunidad (canales de chat) mientras el pago esté activo. El
              precio y sus condiciones se muestran en la página de precios en
              el momento de la compra. Nos reservamos el derecho de modificar
              el precio para nuevos miembros; los miembros existentes con
              precio de fundador lo mantienen mientras su suscripción
              permanezca activa sin interrupción.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">3. Pagos y cancelación</h2>
            <p>
              Los pagos se procesan a través de Stripe. Puedes cancelar tu
              suscripción en cualquier momento; el acceso se mantiene hasta el
              final del periodo ya pagado. No se realizan reembolsos por
              periodos parciales salvo que la ley aplicable lo exija.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">4. Normas de la comunidad</h2>
            <p>
              El contenido publicado en los canales debe respetar a los demás
              miembros. Nos reservamos el derecho de eliminar contenido y
              suspender o cancelar cuentas que incumplan estas normas, sin
              derecho a reembolso en caso de incumplimiento grave.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">5. Propiedad del contenido</h2>
            <p>
              El contenido formativo de Focus (módulos, lecciones, vídeos) es
              propiedad de Focus y se ofrece solo para uso personal de los
              miembros. Queda prohibida su redistribución o reventa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">6. Limitación de responsabilidad</h2>
            <p>
              El contenido de Focus tiene fines educativos e informativos.
              No garantizamos resultados económicos específicos derivados de
              aplicar lo aprendido en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2 text-[#1c1a16]">7. Contacto</h2>
            <p>
              Para cualquier duda sobre estos términos, contacta con nosotros
              a través de los canales indicados en la plataforma.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
