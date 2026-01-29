import { GALLERY_IMAGES } from "@/lib/gallery";
import Image from "next/image";
import PageHeader from "@/components/page-header";

const GalleryPage = () => {
  return (
    <div className="py-20">
      <PageHeader title="gallery.title" subtitle="gallery.subtitle" />
      <div className="container mx-auto px-4">
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
