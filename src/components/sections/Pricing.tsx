
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "Free",
      features: [
        "Unlimited static QR codes",
        "2 dynamic QR codes/month", 
        "Basic analytics"
      ],
      popular: false,
      cta: "Get Started",
      link: "/register"
    },
    {
      name: "Basic",
      price: "BDT 400/month",
      features: [
        "10 dynamic QR codes",
        "Unlimited scans",
        "Basic customization",
        "Standard analytics"
      ],
      popular: true,
      cta: "Start Basic Plan",
      link: "/register"
    },
    {
      name: "Premium", 
      price: "BDT 1200/month",
      features: [
        "50 dynamic QR codes",
        "Advanced analytics",
        "Bulk creation",
        "API access"
      ],
      popular: false,
      cta: "Start Premium Plan",
      link: "/register"
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Unlimited dynamic QR codes",
        "White-labeling",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            Simple Tiered Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' 
                  : 'bg-white'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-bold px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <div className={`text-3xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                  {plan.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                      <span className={`text-green-500 mr-3 ${plan.popular ? 'text-green-300' : ''}`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full mt-8 font-semibold py-3 rounded-full transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-purple-600 hover:bg-gray-100' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                  }`}
                >
                  <Link to={plan.link}>
                    {plan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
