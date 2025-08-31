import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "The Future of AI in Healthcare: Transforming Diagnostics and Treatment",
      excerpt: "Explore how artificial intelligence is revolutionizing medical diagnostics, treatment planning, and patient care delivery across healthcare systems.",
      category: "AI in Healthcare",
      readTime: "8 min read",
      date: "December 15, 2024",
      featured: true
    },
    {
      title: "Telemedicine Trends: What to Expect in 2025",
      excerpt: "Discover the latest trends in telemedicine technology and how virtual care is reshaping patient-provider relationships.",
      category: "Telemedicine",
      readTime: "6 min read",
      date: "December 12, 2024",
      featured: false
    },
    {
      title: "Remote Patient Monitoring: Improving Chronic Care Management",
      excerpt: "Learn how remote monitoring technologies are enhancing chronic disease management and improving patient outcomes.",
      category: "Remote Monitoring",
      readTime: "7 min read",
      date: "December 10, 2024",
      featured: false
    },
    {
      title: "EHR Integration Best Practices for Healthcare Providers",
      excerpt: "Essential strategies for successful electronic health record implementation and workflow optimization in medical practices.",
      category: "Digital Records",
      readTime: "5 min read",
      date: "December 8, 2024",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Healthcare Technology{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and innovations 
            in digital healthcare technology and patient care.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
            <div className="lg:flex">
              {/* Content */}
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-primary font-medium text-sm ml-3">
                    {articles[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:w-1/3 bg-gradient-primary p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bookmark className="h-8 w-8" />
                  </div>
                  <div className="text-sm opacity-90">
                    Featured Article
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <article 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <span className="text-primary text-sm font-medium">
                  {article.category}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
