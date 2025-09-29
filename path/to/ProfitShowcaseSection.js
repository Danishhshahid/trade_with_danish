const signalImages = [
    {
        id: 1,
        src: signal1,
        alt: 'XAU/USD Buy Signal - Entry at 2630',
        pipsHit: 495
    },
    {
        id: 2,
        src: photo2,
        alt: 'EUR/USD Sell Signal - Entry at 1.1145',
        pipsHit: 600
    },
    {
        id: 3,
        src: photo3,
        alt: 'GBP/USD Buy Signal - Entry at 1.3240',
        pipsHit: 800
    },
    {
        id: 4,
        src: photo4,
        alt: 'USD/JPY Sell Signal - Entry at 147.80',
        pipsHit: 130
    }
];

return (
    <section className="section-padding bg-gradient-to-br from-dark to-trust text-white">
        <div className="container-custom">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Real Results, Real Profits
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                    See the actual trades and technical analysis that generate consistent profits. 
                    No fake screenshots - just real results from our proven strategies.
                </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                    {signalImages.map((signal) => (
                        <div key={signal.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => setSelectedImage(signal.id)}>
                            <div className="relative mb-4">
                                <Image 
                                    src={signal.src} 
                                    alt={signal.alt}
                                    width={400}
                                    height={600}
                                    className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-md"
                                />
                                <div className="absolute top-3 right-3 bg-profit/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center shadow-md">
                                    <Target size={14} className="mr-1.5" />
                                    {signal.pipsHit} pips
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Additional code for other sections goes here */}
        </div>
    </section>
);