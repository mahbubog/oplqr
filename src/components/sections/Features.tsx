
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Static QR Codes",
      description: "Free, non-editable codes for permanent links (e.g., website URLs, contact details). Ideal for small businesses and individuals.",
      icon: "📍"
    },
    {
      title: "Dynamic QR Codes", 
      description: "Editable codes with real-time updates, allowing changes to the destination URL or content without reprinting. Essential for marketing campaigns and events.",
      icon: "🔄"
    },
    {
      title: "Multiple QR Code Types",
      description: "URL, vCard, Social Media (Facebook, Instagram, LinkedIn), PDF, Google Maps, Text.",
      icon: "🎯"
    },
    {
      title: "Customization Options",
      description: "Brand logos, colors, and frames to align with business branding.",
      icon: "🎨"
    },
    {
      title: "High-Resolution Downloads",
      description: "Support for PNG, JPEG, SVG, and PDF formats.",
      icon: "💾"
    },
    {
      title: "Analytics and Tracking",
      description: "Real-time scan data: Number of scans, device type, time.",
      icon: "📊"
    },
    {
      title: "Multilingual Support",
      description: "Unicode support for QR code content.",
      icon: "🌍"
    },
    {
      title: "Role-Based Access",
      description: "Team dashboards with role-based access for agencies and large businesses.",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, customize, and track your QR codes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
