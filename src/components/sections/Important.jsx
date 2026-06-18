import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import CardsImportants from "../cards/CardsImportants";
import content from "../../content/content";
import ButtonReflexo from "../../components/interactives/ButtonReflexo";
import MotionDivDownUp from "../animation/MotionDivDownToUp";

function Important({ colorMode }) {
  const listCards = Object.values(content.texts.important.cards);
  let backgroundMode, text, textOpacity, textDestaque;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      break;
    case "dark":
      backgroundMode = "bg-black";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      break;
    default:
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
  }

  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <SectionHeaderNovo
          miniTitle={content.texts.important.miniTag}
          title={content.texts.important.title}
          colorMode={colorMode}
        />

        <div className="grid gap-12 tablet1:grid-cols-2">
          {listCards.map((item) => (
            <CardsImportants
              title={item.title}
              paragraph={item.paragraph}
              colorMode={colorMode}
            />
          ))}
        </div>

        <MotionDivDownUp>
          <p
            className={`flex justify-center font-secondFont w-full my-12 text-justify ${textOpacity}`}
          >
            {content.texts.important.fraseObs}
          </p>
        </MotionDivDownUp>

        <MotionDivDownUp>
          <ButtonReflexo
            label={content.texts.important.ctaButtonText}
            icon=<svg
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
            link="https://pay.hotmart.com/Y105799270M?bid=1781201184158"
          />
        </MotionDivDownUp>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Important;
