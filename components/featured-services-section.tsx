"use client";

import ExpandableCards, { Card } from "@/components/smoothui/expandable-cards";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientHeading } from "./ui/gradient-heading";

export default function FeaturedServicesSection() {
  const { t } = useLanguage();

  const services: Card[] = [
    {
      id: 1,
      title: t("service.hbot.title"),
      content: t("service.hbot.desc"),
      image: "/images/test.jpeg", // Placeholder
    },
    {
      id: 2,
      title: t("service.iv.title"),
      content: t("service.iv.desc"),
      image: "/images/test.jpeg", // Placeholder
    },
    {
      id: 3,
      title: t("service.endo.title"),
      content: t("service.endo.desc"),
      image: "/images/test.jpeg", // Placeholder
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <GradientHeading size="lg" weight="bold" className="mb-4">
            {t("services.featured.title")}
          </GradientHeading>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("services.featured.subtitle")}
          </p>
        </div>

        {/* Expandable Cards */}
        <div className="min-h-[350px]">
          <ExpandableCards 
            cards={services} 
            className="w-full"
            cardClassName="bg-card border-border"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Link href="/servicii-recuperare-medicala">
            <Button size="lg" variant="outline" className="group text-lg px-8 py-6 rounded-full border-black/10 hover:border-black/30 bg-background text-foreground transition-all duration-300">
              {t("common.view-all-services")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
