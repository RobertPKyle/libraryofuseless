import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
