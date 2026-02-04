import { AlertTriangle } from 'lucide-react'

export default function AlertSection() {
  return (
    <section className="relative w-full bg-white py-20 px-6">
      <div className="max-w-[1215px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* COLUNA ESQUERDA — TEXTOS */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-red-500 w-7 h-7" />
            <span className="uppercase tracking-widest text-sm text-red-500 font-semibold">
              Alerta Profissional
            </span>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-mainFont font-medium mb-4 max-w-xl">
            O mercado mudou —{' '}
            <span className="text-red-500">e você pode estar em risco</span>
          </h2>

          {/* Texto principal */}
          <div className="font-secondFont font-light text-black space-y-3 max-w-xl">
            <p>
              O mercado imobiliário brasileiro atravessa uma inflexão histórica.
            </p>
            <p>
              Hoje, a responsabilidade do corretor foi ampliada, e a falha no
              dever de informação se tornou o maior calcanhar de Aquiles da
              profissão.
            </p>
          </div>
        </div>

        {/* COLUNA DIREITA — RETÂNGULOS */}
        <div className="flex flex-col gap-8">
          {/* Frase de impacto */}
          <div className="border-l-4 border-red-500 pl-6 py-4 bg-black/50 rounded-r-lg font-secondFont">
            <p className="text-xl font-bold">
              Não se trata mais apenas de vender bem.
            </p>
            <p className="text-xl font-bold text-black">
              Trata-se de uma imposição legal e jurisprudencial.
            </p>
          </div>

          {/* Lista de riscos */}
          <div className="bg-black text-white rounded-xl p-8 shadow-xl font-secondFont">
            <p className="font-bold text-lg mb-6">
              Quem ignora essa transformação caminha para:
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Obsolescência profissional</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Perda de comissão</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Passivo judicial</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span>Risco patrimonial pessoal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
