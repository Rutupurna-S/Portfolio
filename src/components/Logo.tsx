interface LogoProps {
  variant?: "vertical" | "horizontal";
  showIcon?: boolean;
}

export function Logo({ variant = "horizontal", showIcon = true }: LogoProps) {
  if (variant === "vertical") {
    return (
      <div className="flex flex-col items-center text-center">
        {showIcon && (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-2">
            <span className="text-white text-xl font-bold">RS</span>
          </div>
        )}
        <div className="text-white font-semibold tracking-wide">
          RUTUPURNA SWAIN
        </div>
        <div className="text-gray-400 text-sm tracking-wider mt-1">
          UI/UX DESIGNER
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {showIcon && (
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold">RS</span>
        </div>
      )}
      <div className="flex flex-col leading-tight">
        <div className="text-white font-semibold tracking-wide text-sm">
          RUTUPURNA SWAIN
        </div>
        <div className="text-gray-400 text-xs tracking-wider">
          UI/UX DESIGNER
        </div>
      </div>
    </div>
  );
}
