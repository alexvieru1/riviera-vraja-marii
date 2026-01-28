// Bento grid patterns - more small items to fill gaps
const patterns = [
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-1",           // Small
  "col-span-2 row-span-2",           // Large
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-2",           // Tall
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-1",           // Small
  "col-span-2 row-span-1",           // Wide
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-1",           // Small
  "col-span-1 row-span-1",           // Small
];

export const GALLERY_IMAGES = Array.from({ length: 46 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/vraja_marii_by_the_sea_eforie_sud_${i + 1}.webp`,
  alt: `Vraja Mării by the Sea - Image ${i + 1}`,
  className: patterns[i % patterns.length],
}));
