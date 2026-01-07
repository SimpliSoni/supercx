interface PackageHeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  isUmrah?: boolean;
}

const PackageHero: React.FC<PackageHeroProps> = ({
  title = (
    <>
      Choose Your Umrah <br />
      <span className="font-normal">Package</span>
    </>
  ),
  subtitle = "Select between our comprehensive group packages or create your own personalized pilgrimage experience",
  backgroundImage = "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2670&auto=format&fit=crop",
  mobileBackgroundImage,
}) => {
  return (
    <div className="relative">

      {/* Background Section */}
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-center items-center pt-24 pb-32 md:pt-28 md:pb-32 overflow-hidden bg-[#02121d] rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-none">

        {/* Background Image/Gradient */}
        {mobileBackgroundImage ? (
          <>
            {/* Mobile Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 md:hidden"
              style={{
                backgroundImage: `url("${mobileBackgroundImage}")`,
              }}
            ></div>
            {/* Desktop Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 hidden md:block"
              style={{
                backgroundImage: `url("${backgroundImage}")`,
              }}
            ></div>
          </>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          ></div>
        )}

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e2e]/90 via-[#02121d]/80 to-[#02121d]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4 md:mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-4 md:mb-8">
            {title}
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed px-2">
            {subtitle}
          </p>
        </div>

        {/* Golden Arch Effect at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[200px] md:h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-500/20 via-orange-900/5 to-transparent z-0 pointer-events-none blur-3xl"></div>

      </div>
    </div>
  );
};

export default PackageHero;