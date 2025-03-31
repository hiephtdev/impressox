import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`w-full min-h-screen bg-[url('https://placehold.co/1920x1080/0B0C0E/0B0C0E')] bg-no-repeat bg-cover bg-center flex flex-col justify-between px-6 py-4 ${geistSans.variable} font-geist-sans`}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <title>ImpressoX – Multi-chain AI Swap Infrastructure</title>
        <meta name="description" content="AI-powered cross-chain intent-based token swaps powered by Eliza and Espresso Sequencer." />
      </Head>

      {/* Header */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <img src="/impressox-logo.png" alt="Logo" className="w-6 h-6" />
          <span className="text-xl font-bold">
            <span className="text-white">Impresso</span><span className="text-[#2EC4A4]">X</span>
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <img src="/impressox-logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold">
            <span className="text-white">Impresso</span><span className="text-[#2EC4A4]">X</span>
          </span>
        </div>
        <div className="text-sm tracking-[0.2em] text-[#2EC4A4] mb-4">JOIN EARLY ACCESS</div>
        <h1 className="text-white font-semibold text-base mb-1">AI Agents for Cross-Chain Swaps</h1>
        <p className="text-xs text-[#A0A0A0] mb-4 max-w-md">Join  with ImpressoX to get early access to the multi-chain AI swap infrastructure.</p>
        <a
          className="flex items-center bg-[#1C3B2C] hover:bg-[#2e5d42] text-white text-xs px-5 py-2 rounded-md font-semibold cursor-pointer"
          target="_blank"
          href="https://t.me/impressox_bot"
          rel="noopener noreferrer"
        >
          <i className="fas fa-paper-plane mr-2 text-[#2EC4A4] text-sm"></i> Chat With Agent
        </a>
      </div>

      {/* Footer */}
      <div className="flex justify-center text-xs text-[#6D6D6D] space-x-3 leading-none">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-white">Terms & Conditions</a>
        <span>|</span>
        <a href="https://x.com/Impressodotai" className="hover:text-white" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-[#6D6D6D] text-xs"></i>
        </a>
        <a href="#" className="hover:text-white">
          <i className="fab fa-discord text-[#6D6D6D] text-xs ml-2"></i>
        </a>
      </div>
    </div>
  );
}
