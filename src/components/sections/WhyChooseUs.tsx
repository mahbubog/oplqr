
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Customizable & Brand-Friendly",
      description: "Custom colors, logos, and frames to match your brand identity perfectly.",
      icon: "🎨"
    },
    {
      title: "Dynamic QR Technology",
      description: "Update destinations without reprinting. Change content on the fly.",
      icon: "🔄"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Track scans by device, location, and time with detailed insights.",
      icon: "📊"
    },
    {
      title: "Secure & Scalable",
      description: "GDPR-compliant, enterprise-grade security for all your data.",
      icon: "🔒"
    },
    {
      title: "Global and Local Payments",
      description: "Support for global and local gateways (e.g., bKash, Nagad).",
      icon: "💳"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help.",
      icon: "🎧"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need for professional QR code management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
