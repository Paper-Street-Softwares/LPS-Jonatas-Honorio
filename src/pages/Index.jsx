import { lazy, Suspense } from "react";

// CRÍTICO — carregamento imediato (LCP)
import NavbarNovaTemplate from "../components/sections/NavbarNovaTemplate";
import HeroTemplateNovo from "../components/sections/HeroTemplateNovo";
import StepsNovoTemplate from "../components/sections/StepsNovoTemplate";
import FaqNovoTemplate from "../components/sections/FaqNovoTemplate";

// Lazy — abaixo da dobra
const FeaturesNovaTemplate = lazy(
  () => import("../components/sections/FeaturesNovaTemplate"),
);
// const FeaturesSemImage = lazy(() =>
//   import('../components/sections/FeaturesSemImage')
// )
const CtaNovoTemplate = lazy(
  () => import("../components/sections/CtaNovoTemplate"),
);
const AboutNovoTemplate = lazy(
  () => import("../components/sections/AboutNovoTemplate"),
);

const Team = lazy(() => import("../components/sections/Team"));

const TeamSectionNew = lazy(() => import("../components/sections/TeamSection"));

const SocialMediaTemplate = lazy(
  () => import("../components/sections/SocialMediaTemplate"),
);
const FooterNovoTemplate = lazy(
  () => import("../components/sections/FooterNovoTemplate"),
);
const WhatsappAnimated = lazy(
  () => import("../components/interactives/WhatsAppAnimated"),
);

const BlogPosts = lazy(() => import("../components/sections/BlogPosts"));

import { useContext } from "react";
import { ColorModeProvider } from "../context/UseContextArchive";
import { useColorMode } from "../context/UseContextArchive";
import Cards from "../components/sections/Cards";
import InventarioComparativo from "../components/sections/Tabela";
import Important from "../components/sections/Important";
import Speed from "../components/sections/Speed";
import Emergency from "../components/sections/Emergency";
import { Diferences } from "../components/sections/Diferences";
import AlertSection from "../components/sections/AlertSection";
import MethodSection from "../components/sections/MethodSection";
import DifferentialSection from "../components/sections/DiferencesSection";
import { Cookie } from "lucide-react";

export default function Index() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <>
      <ColorModeProvider>
        {/* Render imediato */}
        {/* <NavbarNovaTemplate colorMode={colorMode} /> */}

        <main>
          {/* LCP — NÃO usar lazy */}
          <HeroTemplateNovo colorMode={colorMode} obs={false} obsTwo={false} />
          {/* Lazy sections */}
          <Suspense fallback={null}>
            <AlertSection />

            <Important colorMode={colorMode} />
            <MethodSection colorMode={colorMode} />
            <FeaturesNovaTemplate
              colorMode={colorMode}
              frasesDestaque={false}
              accordion={true}
              buttons={false}
            />
            <DifferentialSection colorMode={colorMode} />

            <CtaNovoTemplate colorMode={colorMode} container={false} />

            <FooterNovoTemplate
              colorMode={colorMode}
              mapa={false}
              phone={false}
              phoneSecond={false}
              expediente={false}
              adress={false}
              email={false}
              emailSecond={false}
              fraseFooter={true} // frase Google LLC
              obs={false}
            />
            <WhatsappAnimated colorMode={colorMode} />
            {/* <Diferences colorMode={colorMode} /> */}
            {/* <Emergency colorMode={colorMode} /> */}

            {/* <AboutNovoTemplate
              colorMode={colorMode}
              ButtonModal={true}
              benefits={false}
            /> */}
            {/* <StepsNovoTemplate colorMode={colorMode} /> */}
            {/* <FaqNovoTemplate colorMode={colorMode} /> */}

            {/* <Speed colorMode={colorMode} /> */}
            {/* <SocialMediaTemplate colorMode={colorMode} /> */}
            {/* <Team colorMode={colorMode} /> */}
            {/* <TeamSectionNew colorMode={colorMode} /> */}
            {/* <BlogPosts colorMode={colorMode} /> */}
            {/* <Cards colorMode={colorMode} /> */}
          </Suspense>
        </main>
      </ColorModeProvider>
    </>
  );
}
