import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Healthcare professionals using advanced digital technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Revolutionizing Healthcare Through{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-driven health solutions that empower providers and improve patient outcomes. 
              Transform your healthcare practice with cutting-edge digital technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:block hidden">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Healthcare Providers</div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">2M+</div>
                <div className="text-muted-foreground">Patients Served</div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Patient Satisfaction</div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;