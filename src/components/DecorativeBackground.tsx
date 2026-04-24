"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-300/20 blur-[120px] animate-float blob-morph" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-200/20 blur-[120px] animate-float-slow blob-morph" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-200/15 blur-[100px] animate-pulse-glow blob-morph" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#F43F5E"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}