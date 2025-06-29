
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
            Smart Scan, Stay Secure, Track Your Growth
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-violet-100 max-w-3xl mx-auto leading-relaxed">
            An all-in-one QR Code solution for business, education, events, and personal use – 
            simple, secure, and locally supported.
          </p>
          
          <div className="mb-12">
            <div className="relative w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl p-4 aspect-square flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-violet-600' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-400 to-pink-600 rounded-2xl p-4 aspect-square flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.4 ? 'bg-fuchsia-600' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-4 aspect-square flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.6 ? 'bg-cyan-600' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl p-4 aspect-square flex items-center justify-center shadow-lg">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-1 ${Math.random() > 0.3 ? 'bg-emerald-600' : 'bg-white'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/register">
                Try for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/dashboard">
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
