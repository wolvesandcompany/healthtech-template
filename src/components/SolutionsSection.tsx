import { Button } from "@/components/ui/button";
import { Video, Brain, Activity, FileText, ArrowRight } from "lucide-react";
import telemedicineImage from "@/assets/telemedicine.jpg";
import aiDiagnosticsImage from "@/assets/ai-diagnostics.jpg";
import remoteMonitoringImage from "@/assets/remote-monitoring.jpg";
import ehrSystemImage from "@/assets/ehr-system.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Video,
      title: "Telemedicine Platform",
      description: "Secure virtual consultations with HD video, chat, and file sharing capabilities. HIPAA-compliant platform connecting patients and providers seamlessly.",
      image: telemedicineImage,
      features: ["HD Video Calls", "Secure Messaging", "File Sharing", "Appointment Scheduling"]
    },
    {
      icon: Brain,
      title: "AI Diagnostics",
      description: "Advanced artificial intelligence providing faster, more accurate diagnostic insights from medical imaging, lab results, and patient data analysis.",
      image: aiDiagnosticsImage,
      features: ["Medical Imaging AI", "Predictive Analytics", "Risk Assessment", "Clinical Decision Support"]
    },
    {
      icon: Activity,
      title: "Remote Patient Monitoring",
      description: "Real-time health tracking with wearable integration, automated alerts, and comprehensive dashboard for continuous patient care management.",
      image: remoteMonitoringImage,
      features: ["Wearable Integration", "Real-time Alerts", "Health Dashboards", "Chronic Care Management"]
    },
    {
      icon: FileText,
      title: "Smart EHR Systems",
      description: "Intuitive electronic health records with AI-powered documentation, interoperability, and streamlined clinical workflow optimization.",
      image: ehrSystemImage,
      features: ["AI Documentation", "Interoperability", "Clinical Workflows", "Data Analytics"]
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Comprehensive Digital Health{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge healthcare technology suite designed to modernize patient care, 
            enhance clinical efficiency, and improve health outcomes.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover how our integrated digital health solutions can enhance your clinical workflow and improve patient outcomes.
            </p>
            <Button variant="hero" size="lg" className="group">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;