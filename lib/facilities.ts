export interface Facility {
  url: string;
  name: {
    ro: string;
    en: string;
  };
  width: number;
  height: number;
}

export const facilities: Facility[] = [
  {
    url: "/icons/balneologie.png",
    name: { ro: "Balneologie", en: "Balneology" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/cazare.png",
    name: { ro: "Cazare", en: "Accommodation" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/gradina.png",
    name: { ro: "Grădină", en: "Garden" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/piscina.png",
    name: { ro: "Piscină", en: "Pool" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/programe-integrative.png",
    name: { ro: "Programe Integrative", en: "Integrative Programs" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/recuperare-fizica-medicala.png",
    name: { ro: "Recuperare Medicală", en: "Medical Recovery" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/restaurant.png",
    name: { ro: "Restaurant", en: "Restaurant" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/terasa.png",
    name: { ro: "Terasă", en: "Terrace" },
    width: 50,
    height: 50,
  },
  {
    url: "/icons/wellness.png",
    name: { ro: "Wellness", en: "Wellness" },
    width: 50,
    height: 50,
  },
];
