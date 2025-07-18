import { User } from "lucide-react";

export default function ProfileAvatar() {
  return (
    <div className="relative avatar-float">
      {/* Main avatar container */}
      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
        {/* Gradient border with glow animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full p-1 avatar-glow">
          {/* Inner circle with profile */}
          <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
            {/* Professional avatar placeholder */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
              {/* <img
                src="../../public/profile-img.jpg"
                alt="Profile Avatar"
                className="w-20 h-20 md:w-28 md:h-28 rounded-full"
              /> */}
            </div>
          </div>
        </div>

        {/* Gold medal indicator */}
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300 cursor-pointer">
          <div className="text-white text-xl font-bold animate-pulse">🏆</div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute -top-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-4 -right-6 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
