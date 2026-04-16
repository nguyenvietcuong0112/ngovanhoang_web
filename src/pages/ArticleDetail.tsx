import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ChevronRight, Phone, MessageSquare } from "lucide-react";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back button and Breadcrumbs */}
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/bai-viet" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Quay lại
              </Link>
            </Button>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Link to="/" className="hover:text-primary">Trang chủ</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/bai-viet" className="hover:text-primary">Bài viết</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.date}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {article.title}
                </h1>
                <p className="text-lg text-muted-foreground border-l-4 border-primary pl-4 py-1 italic">
                  {article.description}
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-premium aspect-video">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-neutral max-w-none">
                {article.content}
              </div>

              {/* Action Section */}
              <Card className="p-8 bg-primary/5 border-none rounded-3xl space-y-6 mt-12">
                <div className="text-center space-y-2">
                  <h4 className="text-2xl font-bold">Bạn cần tư vấn chi tiết hơn?</h4>
                  <p className="text-muted-foreground">Để lại thông tin hoặc gọi điện trực tiếp cho chúng tôi để được khảo sát miễn phí.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 h-12">
                    <a href="tel:0388423600" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" /> Gọi ngay: 0388.423.600
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 bg-white text-primary hover:bg-neutral-50 border-primary/20">
                    <a href="https://zalo.me/0388423600" className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" /> Chat Zalo
                    </a>
                  </Button>
                </div>
              </Card>
            </article>

            {/* Sidebar / Related Posts */}
            <aside className="lg:col-span-4 space-y-10">
              <div className="sticky top-28 space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b-2 border-primary pb-2 inline-block">Tin liên quan</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {relatedArticles.map((rel, idx) => (
                      <Link key={rel.slug} to={`/bai-viet/${rel.slug}`} className="group block">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                            <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                          </div>
                          <div className="space-y-2">
                            <span className="text-[10px] uppercase font-bold text-primary">{rel.category}</span>
                            <h4 className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                              {rel.title}
                            </h4>
                            <p className="text-[10px] text-muted-foreground italic">{rel.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <Card className="p-6 bg-charcoal text-white rounded-2xl overflow-hidden relative group">
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-bold">Sửa Nhà Hà Nội</h3>
                    <p className="text-sm text-white/70 italic leading-relaxed">
                      "Chúng tôi cam kết chất lượng, tiến độ và thẩm mỹ cho mọi công trình lớn nhỏ."
                    </p>
                    <Button asChild className="w-full bg-white text-charcoal hover:bg-neutral-100 rounded-xl font-bold border-none">
                      <Link to="/lien-he">Nhận báo giá ngay</Link>
                    </Button>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
