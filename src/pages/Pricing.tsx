import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import PricingTables from "@/components/PricingTables";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <main className="py-16">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <PricingTables />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
