import { Layers } from "lucide-react";

export default function MethodSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1215px] mx-auto flex flex-col items-center text-center">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Layers className="w-6 h-6 text-black" />
          <span className="uppercase tracking-widest text-sm font-semibold text-black">
            Método e Estrutura
          </span>
        </div>

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-mainFont leading-tight mb-8 text-black max-w-3xl">
          O núcleo duro da segurança jurídica imobiliária
        </h2>

        {/* Texto */}
        <div className="space-y-5 text-lg text-black max-w-3xl text-justify desktop1:text-center">
          <p>Este não é um curso genérico.</p>

          <p>
            É um{" "}
            <span className="font-semibold text-black/90">
              treinamento estruturado em 7 módulos de Compliance Avançado
            </span>
            , criado para transformar sua mentalidade de{" "}
            <span className="font-semibold text-black/90">
              intermediador comercial
            </span>{" "}
            em{" "}
            <span className="font-semibold text-black/90">
              agente de segurança jurídica
            </span>
            .
          </p>
        </div>

        {/* Bloco de destaque */}
        <div className="mt-12 bg-terciary border border-neutral-200 rounded-xl p-8 max-w-3xl text-justify desktop1:text-center">
          <p className="text-xl font-bold text-black">
            Método aplicado à prática real do mercado imobiliário.
          </p>
          <p className="text-neutral-600 mt-2">
            Estrutura pensada para reduzir risco, aumentar autoridade e elevar
            seu nível profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
