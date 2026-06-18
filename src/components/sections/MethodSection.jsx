import { Layers } from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

export default function MethodSection({ colorMode }) {
  return (
    <section className="w-full bg-white py-20 px-6 text-justify">
      <MotionDivDownToUp>
        <div className="max-w-[1215px] mx-auto flex flex-col items-start desktop1:items-center font-mainFont">
          {/* Tag */}
          <SectionHeaderNovo
            miniTitle="   Método e Estrutura"
            title=" O núcleo duro da segurança jurídica imobiliária"
            colorMode={colorMode}
          />

          {/* Texto */}
          <div className="space-y-5 text-lg text-black max-w-3xl text-justify">
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
          <div className="mt-12 bg-terciary border border-neutral-200 rounded-xl p-8 max-w-3xl text-justify">
            <p className="text-xl font-bold text-black">
              Método aplicado à prática real do mercado imobiliário.
            </p>
            <p className="text-neutral-600 mt-2">
              Estrutura pensada para reduzir risco, aumentar autoridade e elevar
              seu nível profissional.
            </p>
          </div>
        </div>
      </MotionDivDownToUp>
    </section>
  );
}
