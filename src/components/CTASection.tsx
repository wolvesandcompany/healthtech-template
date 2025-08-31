import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Free 30-day trial with full feature access",
    "Dedicated implementation support team",
    "HIPAA-compliant security from day one",
    "24/7 technical support and training"
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Healthcare with Technology?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of healthcare providers who are already improving patient outcomes 
            and streamlining operations with our digital health solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              What You Get With HealthTech Solutions
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="opacity-80">Healthcare Providers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">2M+</div>
                  <div className="opacity-80">Patients Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Schedule Your Free Consultation
            </h3>
            
            <div className="space-y-4 mb-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-white text-primary border-white hover:bg-white/90 group"
              >
                <Phone className="mr-3 h-5 w-5" />
                Schedule a Phone Call
                <ArrowRight className="ml-auto h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full bg-white text-primary border-white hover:bg-white/90 group"
              >
                <Mail className="mr-3 h-5 w-5" />
                Request Demo via Email
                <ArrowRight className="ml-auto h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm opacity-80 mb-4">
                Or speak with our healthcare technology experts
              </p>
              <div className="text-2xl font-semibold">
                1-800-HEALTHTECH
              </div>
              <div className="text-sm opacity-80">
                Available Monday - Friday, 8 AM - 6 PM EST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;