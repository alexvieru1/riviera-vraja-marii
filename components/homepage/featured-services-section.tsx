"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { Separator } from "@/components/ui/separator";
import { featuredServices } from "@/lib/services";

export default function FeaturedServicesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-[#f5f1eb] relative overflow-hidden">
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

        {/* Services List */}
        <div className="flex flex-col gap-12 mb-16">
          {featuredServices.map((service, index) => (
            <div key={index}>
               <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center group">
                {/* Image Column */}
                <div className="relative h-[300px] md:h-[400px] w-full bg-muted overflow-hidden">
                  <Image 
                    src={service.src} 
                    alt={service.title[language]} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Content Column */}
                <div className="flex flex-col justify-center h-full pt-4 md:pt-0">
                  <h3 className="text-3xl md:text-4xl font-heading-bold tracking-tight mb-6 uppercase text-foreground">
                    {service.title[language].split(' ')[0]} 
                    <span className="font-light block md:inline md:ml-3 opacity-70">
                      {service.title[language].split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  
                  <div className="w-12 h-1 bg-[#8b7355] mb-6" />
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.desc[language]}
                  </p>
                </div>
              </div>
              
              {/* Separator between items (not after the last one) */}
              {index < featuredServices.length - 1 && (
                <Separator className="mt-12 bg-[#8b7355]/20 h-px" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Link href="/servicii-recuperare-medicala">
            <Button size="lg" variant="outline" className="group text-lg px-8 py-6 rounded-none border-black/10 hover:border-black/30 bg-background text-[#8b7355] hover:text-[#6b5644] transition-all duration-300">
              {t("common.view-all-services")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
