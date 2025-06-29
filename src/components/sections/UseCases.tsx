
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UseCases = () => {
  const useCases = [
    {
      title: "Educational Institutions",
      description: "Share results, payment links, and digital notices.",
      icon: "🎓",
      examples: ["Student result sharing", "Fee payment links", "Digital notice boards", "Course materials access"]
    },
    {
      title: "eCommerce & Online Sellers",
      description: "Attach QR codes to parcels for website or review page redirection.",
      icon: "🛒",
      examples: ["Product reviews", "Website redirection", "Order tracking", "Customer feedback"]
    },
    {
      title: "Print Media & Marketing",
      description: "Place QR codes on flyers, brochures, or posters for engagement.",
      icon: "📰",
      examples: ["Campaign tracking", "Lead generation", "Content engagement", "Social media links"]
    },
    {
      title: "Events & Attendance",
      description: "Use QR codes for attendee registration, check-in, or digital agenda sharing.",
      icon: "🎪",
      examples: ["Event registration", "Digital check-in", "Agenda sharing", "Contact exchange"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            Who Can Use It?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for various industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {useCase.title}
                  </CardTitle>
                </div>
                <p className="text-gray-600 text-lg">
                  {useCase.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div 
                      key={exampleIndex}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-2 rounded-lg text-sm font-medium text-purple-700"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
