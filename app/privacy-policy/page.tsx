"use client"
import { useLanguage } from '@/lib/language-context';
import React from 'react'

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col gap-8 md:gap-12 max-w-3xl mx-auto">
          <h1 className="text-center font-heading-black text-3xl md:text-5xl">
            {t("privacy.title")}
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("privacy.content")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy