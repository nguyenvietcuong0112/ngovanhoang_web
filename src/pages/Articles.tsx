import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";
import { Zap, Clock, Tag } from "lucide-react";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-24">
        <section className="container mx-auto px-4 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Bài Viết & Kinh Nghiệm
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Cập nhật báo giá thi công, kinh nghiệm sửa nhà và các lưu ý kỹ thuật thực tế giúp bạn tối ưu chi phí và thẩm mỹ.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-soft hover:shadow-premium transition-all overflow-hidden group flex flex-col rounded-3xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold text-white uppercase bg-primary px-3 py-1 rounded-full shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="px-8 pb-8 mt-auto">
                    <Button 
                      asChild
                      variant="link" 
                      className="p-0 h-auto text-primary font-bold hover:no-underline group/btn"
                    >
                      <Link to={`/bai-viet/${article.slug}`} className="flex items-center gap-2">
                        Đọc bài viết <Zap className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
