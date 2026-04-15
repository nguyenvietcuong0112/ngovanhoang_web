import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { articles, type Article } from "@/data/articles";
import heroCeiling from "/src/assets/hero-ceiling.png";
import heroRenovation from "/src/assets/hero-renovation.png";
import heroConstruction from "/src/assets/hero-construction-modern.jpg";
import featCeiling from "/src/assets/feat-ceiling.png";

const articleImages = [heroCeiling, heroRenovation, heroConstruction, featCeiling];

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState<{ article: Article; index: number } | null>(null);

  const getImageSet = (index: number) => {
    const length = articleImages.length;
    return [
      articleImages[index % length],
      articleImages[(index + 1) % length],
      articleImages[(index + 2) % length],
    ];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Bài Viết & Kinh Nghiệm</h1>
            <p className="text-muted-foreground">
              Cập nhật báo giá, kinh nghiệm sửa nhà và các lưu ý thi công thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Card key={article.title} className="h-full p-6 space-y-4 rounded-2xl">
                <img
                  src={getImageSet(idx)[0]}
                  alt={article.title}
                  className="w-full h-44 object-cover rounded-xl"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold line-clamp-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{article.description}</p>
                <Button variant="link" className="px-0" onClick={() => setSelectedArticle({ article, index: idx })}>
                  Xem chi tiết
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary p-8 text-white relative">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30"
              >
                x
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-1 rounded">
                  {selectedArticle.article.category}
                </span>
                <span className="text-xs opacity-80">{selectedArticle.article.date}</span>
              </div>
              <h3 className="text-2xl font-bold">{selectedArticle.article.title}</h3>
            </div>
            <div className="p-8 max-h-[60vh] overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {getImageSet(selectedArticle.index).map((image, imageIndex) => (
                  <img
                    key={`${selectedArticle.article.title}-${imageIndex}`}
                    src={image}
                    alt={`${selectedArticle.article.title} ${imageIndex + 1}`}
                    className="h-32 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
              {selectedArticle.article.content}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Articles;
