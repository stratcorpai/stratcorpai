
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvestmentThesis from "@/components/InvestmentThesis";
import BoardService from "@/components/BoardService";
import Team from "@/components/Team";
import StratCorpAI from "@/components/StratCorpAI";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LineChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AssessmentCTA = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3C1822" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6 inline-block p-3 bg-stratified/10 rounded-xl">
            <LineChart className="h-8 w-8 text-stratified" />
          </div>
          
          <h2 className="text-4xl font-bold text-stratified mb-6">
            Assess Your Organization's Strategic Alignment
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Our proprietary assessment tools help identify opportunities and challenges 
            in your organization's strategy, structure, and leadership.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-stratified mb-1">15+</div>
              <div className="text-gray-500">Assessment Categories</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-stratified mb-1">5-10</div>
              <div className="text-gray-500">Minutes to Complete</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-2xl font-bold text-stratified mb-1">100%</div>
              <div className="text-gray-500">Personalized Insights</div>
            </div>
          </div>
          
          <Link to="/assessment">
            <Button className="bg-stratified hover:bg-stratified-dark text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Start Your Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InvestmentThesis />
      <BoardService />
      <AssessmentCTA />
      <Team />
      <StratCorpAI />
      <Footer />
    </div>
  );
};

export default Index;
