import { Heart, Shield, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every solution we build puts patient welfare and outcomes at the forefront of healthcare innovation."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "HIPAA-compliant infrastructure with end-to-end encryption ensuring complete data privacy and security."
    },
    {
      icon: Users,
      title: "Provider Empowerment",
      description: "Intuitive tools that enhance clinical workflows and enable healthcare professionals to deliver exceptional care."
    },
    {
      icon: Zap,
      title: "Innovation Excellence",
      description: "Cutting-edge AI and machine learning technologies driving the future of digital healthcare."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Bridging Technology and{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Patient Care
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform healthcare delivery through innovative digital solutions 
            that enhance provider capabilities while improving patient experiences and outcomes.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl p-8 mb-16 shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              To democratize access to advanced healthcare technology, empowering medical professionals 
              with AI-driven tools and enabling seamless, secure, and efficient patient care delivery 
              across all healthcare settings.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;