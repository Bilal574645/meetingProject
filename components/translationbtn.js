// components/RedTranslationButton.tsx
import Link from 'next/link';

export default function RedTranslationButton() {
  return (
    <Link 
      href="https://nexus-fr-tr.vercel.app/#" // Replace with your URL
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center"
    >
      {/* Button container with fiery red gradient */}
      <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:from-red-600 group-hover:to-rose-700">
        {/* Inner circle */}
        <div className="absolute inset-0 m-auto h-10 w-10 rounded-full bg-white flex items-center justify-center">
          {/* Globe icon with red accent */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-rose-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
        </div>
        
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 animate-ping rounded-full border-2 border-white opacity-0 group-hover:opacity-100" />
      </div>
      
      {/* Tooltip with red accent */}
      <div className="absolute -bottom-10 hidden whitespace-nowrap rounded-md bg-gradient-to-r from-rose-800 to-red-900 px-3 py-1 text-xs font-medium text-white group-hover:block">
        Translate Now
        {/* Tooltip tail */}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-rose-800"></div>
      </div>
    </Link>
  );
}