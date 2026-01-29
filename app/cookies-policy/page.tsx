"use client"
import { useLanguage } from "@/lib/language-context";

const CookiesPolicy = () => {
  const { t } = useLanguage();

  // We assume t("cookies-policy.content_paragraphs") returns the array from your JSON
  const paragraphs = t("cookies-policy.content_paragraphs") as unknown as string[];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col gap-8 md:gap-12 max-w-3xl mx-auto">
          <h1 className="text-center font-heading-black text-3xl md:text-5xl">
            {t("cookies-policy.title")}
          </h1>
          
          <div className="prose prose-slate max-w-none">
            {/* If the translation is an array, map through it to create paragraphs */}
            {Array.isArray(paragraphs) ? (
              paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              // Fallback in case it's a single string
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("cookies-policy.content")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;