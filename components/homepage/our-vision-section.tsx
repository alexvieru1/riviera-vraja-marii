import { useLanguage } from "@/lib/language-context";
import { InView } from "../ui/in-view";

const OurVisionShort = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <InView
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading-bold tracking-tight text-slate-900 mb-6">
              {t("our-vision-section.title")}
            </h2>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t("our-vision-section.subtitle")}
            </p>
          </InView>
        </div>
      </div>
    </section>
  );
}

export default OurVisionShort