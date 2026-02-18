import { Gavel, FileText } from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function DifferentialSection({ colorMode }) {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-[1215px] mx-auto flex flex-col items-center text-center">
        <SectionHeaderNovo
          miniTitle="Prova na Prática"
          title=" Mais que teoria: prática forense real"
          colorMode={colorMode}
        />

        {/* Subtexto */}
        <MotionDivDownToUp>
          <p className="text-lg text-black mb-14 max-w-3xl text-justify">
            O que você aprende aqui é exatamente o que protege sua comissão e
            seu CPF.
          </p>
        </MotionDivDownToUp>

        {/* Cards */}
        <MotionDivDownToUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="bg-primaryDark border border-white/10 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Gavel className={`w-6 h-6 text-primaryLight`} />
                <h3 className="text-xl font-bold text-white">
                  Videoaulas com Casos Reais
                </h3>
              </div>

              <p className="text-white mb-4 text-justify">
                Análise prática de decisões recentes do STJ{" "}
                <span className="font-semibold text-white">(2024/2025)</span>{" "}
                que impactam diretamente o corretor imobiliário.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-white mb-4 text-justify">
                <li>Erros de metragem</li>
                <li>Fraudes em leilões</li>
                <li>Atrasos de obra</li>
              </ul>

              <p className="font-semibold text-white text-justify">
                Você aprende como os tribunais decidem, não apenas o que a lei
                diz.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-primaryDark border border-white/10 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <FileText className={`w-6 h-6 text-primaryLight`} />
                <h3 className="text-xl font-bold text-white">
                  Módulo de Minutas Blindadas
                </h3>
              </div>

              <p className="text-white mb-4 text-justify">
                Tenha acesso a um{" "}
                <span className="font-semibold text-white">
                  arsenal jurídico validado na prática
                </span>
                , pronto para aplicação imediata no seu dia a dia profissional.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-white mb-4 text-justify">
                <li>Contrato de Corretagem com Exclusividade</li>
                <li>Termo de Ciência de Risco e Dispensa de Certidões</li>
                <li>Cláusula de Transferência de Comissão (Tema 938 STJ)</li>
                <li>Termos de Vistoria e Entrega de Chaves</li>
              </ul>

              <p className="font-semibold text-white text-justify">
                Documentos que protegem sua comissão antes do problema existir.
              </p>
            </div>
          </div>
        </MotionDivDownToUp>
      </div>
    </section>
  );
}
