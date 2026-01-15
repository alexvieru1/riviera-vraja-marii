"use client";

import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";
import { facilities } from "@/lib/facilities";
import { useLanguage } from "@/lib/language-context";

export const LogoCloud = () => {
  const { language, t } = useLanguage();
  return (
    <section className="bg-background">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">
              {t("facilities.title")}
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={0} speed={40} gap={112}>
              {facilities.map((logo, idx) => (
                <div
                  key={idx}
                  className="group/logo relative flex items-center justify-center outline-none select-none"
                  tabIndex={0}
                >
                  <Image
                    className={`mx-auto w-fit dark:invert transition-opacity duration-300 group-hover/logo:opacity-0 group-focus/logo:opacity-0`}
                    src={logo.url}
                    alt={`${logo.name[language]}`}
                    height={logo.height}
                    width={logo.width}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100 group-focus/logo:opacity-100 whitespace-nowrap">
                    {logo.name[language]}
                  </span>
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
