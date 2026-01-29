"use client";

import { GALLERY_IMAGES } from "@/lib/gallery";
import Image from "next/image";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { InView } from "@/components/ui/in-view";
import { useLanguage } from "@/lib/language-context";

const GalleryPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          viewOptions={{ once: true }}
        >
          <div className="text-center mb-16 space-y-4">
            <GradientHeading size="lg" weight="bold">
              {t("gallery.title")}
            </GradientHeading>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>
        </InView>

        {/* Bento Grid - Images Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 grid-flow-dense">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
