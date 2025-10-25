import { AboutSection } from "@/components/ui/about";
import { ArticlesSection } from "@/components/ui/articles";
import { ContactSection } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { HeroHeading } from "@/components/ui/hero";
import { PricingSection } from "@/components/ui/pricing";
import { ServicesSection } from "@/components/ui/services";
const Main = () => {
  return (
    <>
      <HeroHeading />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Main;
