import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    solutions: [
      { name: "Telemedicine Platform", href: "#" },
      { name: "AI Diagnostics", href: "#" },
      { name: "Remote Monitoring", href: "#" },
      { name: "EHR Systems", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Security", href: "#" },
      { name: "Compliance", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "HIPAA Compliance", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-bold">HealthTech Solutions</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Revolutionizing healthcare through innovative digital solutions. 
                Empowering providers and improving patient outcomes with AI-driven technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>1-800-HEALTHTECH</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>contact@healthtech-solutions.com</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 HealthTech Solutions. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;