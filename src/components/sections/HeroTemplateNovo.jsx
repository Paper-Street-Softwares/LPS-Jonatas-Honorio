import React, { useRef, useState } from "react";
import { Button } from "../interactives/ButtonNovoTemplate";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  AlertTriangle,
  Check,
  Clock,
  CircleDollarSign,
  Users,
  Split,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import ButtonReflexo from "../interactives/ButtonReflexo";
import ButtonAlert from "../interactives/ButtonAlert";
import { useColorMode } from "../../context/UseContextArchive";

function HeroTemplateNovo({
  colorMode,
  text,
  textOpacity,
  backgroundMode,
  bgFaixaHero,
  bgMinitag,
  textObs,
  image,
  bgAlertHero,
  textDestaque,
  borderColor,
  obs,
  obsTwo,
}) {
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-white";
      bgFaixaHero = "bg-secondary";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-white border-primaryDark text-primaryDark";
      // textObs = 'text-green-500'
      image = " border-[8px] border-white";
      bgAlertHero = "bg-white";
      borderColor = "bg-white";
      break;
    case "dark":
      backgroundMode = "bg-dark";
      bgFaixaHero = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryLight";
      bgMinitag = "bg-transparent border-primaryLight text-primaryLight";
      // textObs = 'text-green-500'
      image = " border-[8px] border-borderImage";
      bgAlertHero = "bg-black text-white/60";
      borderColor = "border-borderImage";

      break;
    case "default":
      backgroundMode = "bg-white";
      bgFaixaHero = "bg-secondary";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      textDestaque = "text-primaryDark";
      bgMinitag = "bg-transparent border-primaryDark text-primaryDark";
      // textObs = 'text-green-500'
      image = " border-[8px] border-white";
      bgAlertHero = "bg-white";
      borderColor = "border-white";
  }

  const { showGlobalButton } = useColorMode();

  // const topicsCard = Object.values({
  //   card1: {
  //     icon: <Clock width={16} />,
  //     text: (
  //       <p>
  //         Recuperação do acesso em <strong>48 horas</strong> mediante tutela de
  //         urgência
  //       </p>
  //     ),
  //   },
  //   card2: {
  //     icon: <CircleDollarSign width={16} />,
  //     text: (
  //       <p>
  //         Possibilidade de indenização por danos morais de até{' '}
  //         <strong>R$15.000,00</strong>
  //       </p>
  //     ),
  //   },
  //   card3: {
  //     icon: <Users width={16} />,
  //     text: 'Contas pessoais e profissionais',
  //   },
  // })

  return (
    <SectionArea
      data-theme={colorMode}
      id="home"
      paddingTopAndBottom={false}
      className={`${backgroundMode}`}
    >
      <section className="relative w-full pt-[90px] text-justify phone2:pt-[90px] pb-[30px] tablet1:pb-[64px] desktop1:pb-[96px] phone3:pt-[100px] tablet1:pt-[170px] desktop1:pt-[60px] flex items-center justify-center overflow-hidden font-mainFont">
        {/* Abstract Background Shapes */}
        <div
          className={`absolute top-0 right-[-10px] h-full w-[80%] -skew-x-12 translate-x-2/4 z-0 ${bgFaixaHero}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[40%] h-1/2 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 z-0 ${backgroundMode}`}
        />
        <SectionWrapper>
          <div className=" relative z-10 grid lg:grid-cols-2 gap-4 phone2:gap-6 lg:gap-20 items-center">
            {/* Content */}

            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 desktop1:space-y-8 order-2 lg:order-1 flex flex-col items-start desktop1:items-start"
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-sm text-[8px] phone2:text-xs font-secondFont font-bold tracking-wide uppercase ${bgMinitag}`}
              >
                <span>
                  <BriefcaseBusiness className="w-4 h-4" />
                </span>
                {content.texts.hero.miniTag}
              </div>
              <h1
                className={` desktop1:text-justify text-[17px] phone2:text-[28px] phone3:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] font-mainFont ${text} `}
              >
                {content.texts.hero.title}
              </h1>

              <p
                className={`text-justify text-[8px] phone2:text-[12px] phone3:text-[14px] md:text-xl leading-relaxed max-w-lg font-secondFont font-extralight ${textOpacity}`}
              >
                {content.texts.hero.subtitle}
              </p>

              {/* <div
                className={`border font-secondFont p-2 rounded-md border-primaryDark text-[8px] phone2:text-[12px] phone3:text-[14px]`}
              >
                {topicsCard.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <span className={`${textDestaque}`}>{item.icon}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div> */}

              <div className="flex flex-col gap-4 pt-4">
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
                  label={content.texts.hero.ctaButtonText}
                  colorMode={colorMode}
                  className="my-0 text-[8px] phone2:text-paragraph3 tablet1:text-paragraph4"
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
              {/* <hr
                className={`border-t ${text} ${
                  colorMode === 'light' ? 'opacity-90' : 'opacity-20'
                } w-full`}
              /> */}
              {obs && (
                <div className="flex justify-start items-center gap-3 text-sm text-mutedForeground w-full">
                  {/* <div className="relative flex ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </div> */}
                  ⚠️
                  <span
                    className={`font-secondFont font-light flex gap-2 items-center ${textOpacity}`}
                  >
                    {/* <span>
                    <Check />
                  </span>{' '} */}
                    {content.texts.hero.obsHero.text}
                  </span>
                  {obsTwo && (
                    <span
                      className={`font-secondFont font-light flex gap-2 items-center ${textOpacity}`}
                    >
                      <span>
                        <FileText />
                      </span>{" "}
                      {content.texts.hero.obsHero.textTwo}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Image */}
            <div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div
                className={`relative rounded-[1.5rem] phone2:rounded-[2.5rem] overflow-hidden aspect-[2/1] phone2:aspect-[3/2] md:aspect-[3/2] shadow-2xl lg:aspect-[3/4] ring-1 ring-black/5 bg-gray-100 ${image}`}
              >
                <img
                  src={content.texts.hero.heroDefaulMobiletImg}
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 desktop1:hidden"
                  width={790}
                  height={520}
                  fetchPriority="high"
                />

                <img
                  src={content.texts.hero.heroDefaultImage}
                  alt={content.texts.hero.alt}
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700 hidden desktop1:flex"
                  width={426}
                  height={573}
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Card */}
                {/* {showGlobalButton && (
                  <div
                    id="ligar"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`absolute bottom-8 left-6 right-6 md:left-8 md:right-8  backdrop-blur-md p-4 phone3:p-4 rounded-2xl shadow-lg border ${borderColor} z-10 ${bgAlertHero}`}
                  >
                    <div className="flex items-center gap-4 phone3:gap-5 ">
                      <div>
                        <p
                          className={`text-[9px] phone2:text-xs font-secondFont font-bold ${textDestaque} tracking-widest uppercase mb-1`}
                        >
                          Plantão 24h
                        </p>
                        <p
                          className={`text-paragraph2 phone3:text-lg font-mainFont font-bold leading-none ${text}`}
                        >
                          Emergência? Ligue agora.
                        </p>
                      </div>
                      <div className="ml-auto">
                        <ButtonAlert
                          padding="p-2 phone3:p-4"
                          icon={
                            <Phone className="w-4 h-4 tablet1:w-6 tablet1:h-6 text-white" />
                          }
                          link={`tel:${content.texts.infos.phone}`}
                          className="bg-red-700"
                        />
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </SectionArea>
  );
}

export default HeroTemplateNovo;
