
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const BottomCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
          Ready to Create Your First QR Code?
        </h2>
        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our platform to grow their reach
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-12 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link to="/register">
              Get Started Now <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-4 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300"
          >
            <Link to="/dashboard">
              <BarChart3 className="mr-2 h-6 w-6" />
              View Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
