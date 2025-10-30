"use client";

interface LoadingProps {
  size?: number; 
  color?: string;
  secondaryColor?: string; 
  thirdColor?: string;
  fourthColor?: string;
  text?: string;         
  textColor?: string;     
}

export function Loading({
  size = 100,
  color = "#3b82f6",      
  secondaryColor = "#60a5fa", 
  thirdColor = "#60a5fa", 
  fourthColor = "#60a5fa", 
  text = "Loading",
  textColor = "#374151", 
}: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full space-y-2">
      <div
        className="rounded-full animate-spin border-solid"
        style={{
          width: size,
          height: size,
          borderWidth: size / 8, 
          borderTopColor: fourthColor,
          borderRightColor: color,
          borderBottomColor: secondaryColor,
          borderLeftColor: thirdColor,
        }}
      ></div>
      <span
        style={{ color: textColor, fontSize: size / 4, fontWeight: 500 }}
      >
        {text}
      </span>
    </div>
  );
}
