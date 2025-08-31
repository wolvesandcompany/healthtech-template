import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      organization: "Metro General Hospital",
      content: "HealthTech Solutions has revolutionized our patient care delivery. The AI diagnostics platform has improved our diagnostic accuracy by 35% while reducing wait times significantly.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Family Medicine Physician",
      organization: "Community Health Network",
      content: "The telemedicine platform is incredibly intuitive. Our patient satisfaction scores increased to 98% after implementation, and we've been able to serve 40% more patients.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Healthcare Administrator",
      organization: "Regional Medical Center",
      content: "The EHR system integration was seamless, and the remote monitoring capabilities have been game-changing for our chronic care management programs.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const caseStudies = [
    {
      title: "35% Faster Diagnostics",
      description: "Metro General Hospital reduced diagnostic time while improving accuracy using our AI-powered diagnostic tools.",
      metric: "35%",
      category: "Efficiency"
    },
    {
      title: "98% Patient Satisfaction",
      description: "Community Health Network achieved record-high patient satisfaction scores with our telemedicine platform.",
      metric: "98%",
      category: "Satisfaction"
    },
    {
      title: "$2M Cost Reduction",
      description: "Regional Medical Center reduced operational costs through streamlined digital workflows and remote monitoring.",
      metric: "$2M",
      category: "Savings"
    },
    {
      title: "40% More Patients",
      description: "Healthcare providers expanded their patient capacity using our comprehensive digital health solutions.",
      metric: "40%",
      category: "Growth"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by Healthcare{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading healthcare organizations are transforming patient care 
            and achieving measurable results with our digital health solutions.
          </p>
        </div>

        {/* Case Studies Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 text-center group hover:transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary-light transition-colors">
                {study.metric}
              </div>
              <div className="text-sm text-accent font-medium mb-3">
                {study.category}
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {study.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {study.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;