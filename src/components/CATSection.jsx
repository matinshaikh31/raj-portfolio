import { FaArrowUpRightFromSquare, FaGlobe } from 'react-icons/fa6';

const CTASection = () => {
  return (
    <section className="bg-[#0f0d0d] text-white px-4 md:px-10 py-32 relative text-center font-sans">
      {/* Top subtitle */}
      <p className="text-sm text-gray-400 mb-6">(Need an unfair advantage?)</p>

      {/* Heading */}
      <h2 className="text-[42px] md:text-[64px] leading-tight font-light mb-10">
        <span className="font-serif block">LET’S MAKE</span>
        <span className="font-extrabold block text-white">IT HAPPEN</span>
      </h2>

      {/* CTA Button */}
      <button className="mt-4 bg-[#ff6a3d] text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-[#ff7a4f] transition-all">
        BOOK A CALL
        <FaArrowUpRightFromSquare className="text-sm" />
      </button>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-4 md:left-10 border border-gray-500 rounded-md text-left text-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-500">
          <FaGlobe className="text-white text-sm" />
          <span>Working Globally</span>
        </div>
        <div className="px-4 py-2 text-gray-300">Available Apr '25</div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 right-4 md:right-10 text-right text-xs text-gray-400 leading-tight">
        <p className="font-semibold text-gray-300">FOR FURTHER INQUIRIES</p>
        <p className="text-gray-400">hello@hyrai.com</p>
      </div>
    </section>
  );
};

export default CTASection;
