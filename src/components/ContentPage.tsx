import type { ReactNode } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/SEO";
import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "@/constants/contact";

type ContentPageProps = {
  title: string;
  description: string;
  keywords?: string;
  heroTitle: string;
  heroSubtitle?: string;
  images?: string[];
  imageAlt?: string;
  children: ReactNode;
  extra?: ReactNode;
};

const ContentPage = ({
  title,
  description,
  keywords,
  heroTitle,
  heroSubtitle,
  images,
  imageAlt = "Hình ảnh thi công thạch cao",
  children,
  extra,
}: ContentPageProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO title={title} description={description} keywords={keywords} />
    <Header />
    <main className="py-16 md:py-20">
      <article className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-10">
        <header className="space-y-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{heroTitle}</h1>
          {heroSubtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{heroSubtitle}</p>
          )}
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            <Phone className="w-5 h-5" />
            Gọi tư vấn: {PHONE}
          </a>
        </header>

        {images && images.length > 0 && (
          <div className={`grid gap-4 ${images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
            {images.map((src) => (
              <img
                key={src}
                src={src}
                alt={imageAlt}
                className="w-full rounded-2xl shadow-sm border border-border object-cover aspect-video"
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
          {children}
        </div>

        {extra}
      </article>
    </main>
    <Footer />
  </div>
);

export default ContentPage;
