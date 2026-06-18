import React from "react";
import { motion } from "framer-motion";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ButtonReflexo from "../interactives/ButtonReflexo";
import content from "../../content/content";
import { whatsAppThemes } from "../../context/UseContextArchive";
import { Phone } from "lucide-react";
import WhatsappForm from "../interactives/WhatsappForm";
import FormAndAdress from "../interactives/Forms/FormAndAdress";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

function CtaNovoTemplate({ colorMode, container }) {
  // Classes dinâmicas conforme colorMode
  let text, textOpacity, backgroundMode, miniTagCtaDark, textDestaque;

  switch (colorMode) {
    case "light":
      text = "text-corTitulosBranca";
      textOpacity = "text-corTitulosBranca/60";
      textDestaque = "text-primaryDark";
      backgroundMode = "bg-primaryDark";
      miniTagCtaDark = "text-white";
      break;
    case "dark":
      text = "text-corTitulosBranca";
      textOpacity = "text-corTitulosBranca/60";
      textDestaque = "text-primaryLight";
      backgroundMode = "bg-black";
      miniTagCtaDark = "text-primaryLight";
      break;
    default:
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      backgroundMode = "bg-primaryDark";
  }

  const lisContainer = Object.values(content.texts.ctaSecondary.container);

  return (
    <SectionArea className={`relative z-0 ${backgroundMode}`}>
      {/* Fundo decorativo */}
      <SectionWrapper className="">
        <section className="relative text-center">
          <MotionDivDownToUp className="container mx-auto">
            <span
              className={`font-bold font-secondFont tracking-wider uppercase text-xs mb-2 block ${miniTagCtaDark}`}
            >
              {content.texts.ctaSecondary.miniTag}
            </span>
            <h2
              className={`text-4xl md:text-[48px] leading-[48px] font-mainFont font-light mb-6 ${text}`}
            >
              {content.texts.ctaSecondary.title}
            </h2>
            <p
              className={`text-lg font-secondFont font-light md:text-xl max-w-2xl mx-auto mb-10 text-justify ${textOpacity}`}
            >
              {content.texts.ctaSecondary.subtitle}
            </p>

            {container && (
              <div
                className={`rounded-lg p-4 mb-4 flex flex-col items-center ${textOpacity}`}
              >
                {lisContainer.map((item, index) => (
                  <div
                    key={index}
                    className="font-secondFont flex gap-2 items-start w-full justify-start tablet1:justify-center text-start desktop1:text-start"
                  >
                    <span className={`${textDestaque}`}>{item.icon}</span>
                    <p className={`${textOpacity}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* <div>
              <FormAndAdress />
            </div> */}
            <div className="flex flex-col gap-4 pt-4 w-fit justify-center items-center mx-auto">
              <ButtonReflexo
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                  >
                    <path d="m15 10 5 5-5 5" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                }
                link="https://pay.hotmart.com/Y105799270M?bid=1781201184158"
                label={content.texts.ctaSecondary.ctaButtonText}
                colorMode={colorMode}
                bgClass={`bg-terciary`}
                shineClass={`bg-primaryDark/40`}
              />
              <ButtonReflexo
                id="ligar"
                icon={<Phone width={20} />}
                link={`tel:${content.texts.infos.phone}`}
                label="Emergência? Ligue agora!"
                colorMode={colorMode}
                className="text-white"
              />
            </div>
          </MotionDivDownToUp>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default CtaNovoTemplate;
