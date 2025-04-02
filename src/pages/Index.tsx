
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import BoardService from "@/components/BoardService";
import Team from "@/components/Team";
import StratCorpAI from "@/components/StratCorpAI";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InvestmentThesis />
      <BoardService />
      <Team />
      <StratCorpAI />
      <Footer />
    </div>
  );
};

export default Index;
