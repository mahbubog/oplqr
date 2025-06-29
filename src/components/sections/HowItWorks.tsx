
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Select a QR Code Type",
      description: "Choose from URL, vCard, File, Link page, etc. Enter necessary details. Select Static QR (free) or Dynamic QR (editable, trackable).",
      icon: "🎯"
    },
    {
      number: "02", 
      title: "Customize Design",
      description: "Use customization tools for patterns, colors, frames, and logo uploads. Choose pre-designed templates or create custom designs.",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Generate, Download & Share", 
      description: "Preview the QR code. Download in PNG, JPG, SVG, or PDF formats (SVG preferred for scalability).",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your perfect QR code in just three simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 right-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-10">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
