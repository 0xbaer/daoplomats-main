import About from "@/components/layout/home/about/About";
import LetsWorkTogether from "@/components/layout/home/connectForm/LetsWorkTogether";
import Footer from "@/components/layout/home/footer/Footer";
import HomeHeader from "@/components/layout/home/header/Header";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <LetsWorkTogether />
      {/* <About /> */}
      <Footer />
    </>
  );
}
