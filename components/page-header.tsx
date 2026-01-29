"use client";

import { useLanguage } from "@/lib/language-context";
import { GradientHeading } from "./ui/gradient-heading";
import { InView } from "./ui/in-view";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const { t } = useLanguage();
  return (
    <div className="bg-background pt-10 pb-2 md:pt-16 md:pb-6">
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
            {t(title)}
          </GradientHeading>
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {t(subtitle)}
            </p>
          )}
        </div>
      </InView>
    </div>
  );
};

export default PageHeader;
