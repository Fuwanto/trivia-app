import React, { FC } from "react";

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: FC<LoadingScreenProps> = ({
  message = "🎮 Loading...",
}) => {
  return (
    <div className="min-h-[calc(100vh-170px)] bg-primary flex items-center justify-center p-8">
      <div className="text-4xl font-bold bubble-text text-accent animate-bounce-cartoon">
        {message}
      </div>
    </div>
  );
};

export default LoadingScreen;
