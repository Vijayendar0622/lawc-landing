import React from "react";
// If you're using shadcn/ui, you can import some components. Uncomment as needed:
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            {/* Background Effect or Futuristic Glare */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="w-[120%] h-[120%] absolute bg-gradient-to-r from-green-300/20 via-purple-500/20 to-blue-300/20 blur-3xl"
                    style={{ transform: "translate(-10%, -10%)" }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center gap-6 p-6 text-center max-w-xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 sm:text-6xl">
                    LAWC
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    The future of legal practice management is almost here.
                </p>

                {/* Launch Date */}
                <p className="mt-4 text-sm sm:text-base text-gray-400">
                    LAWC is going live on <span className="font-semibold">30-06-2025</span>
                </p>

                <p className="mt-8 text-sm sm:text-base text-gray-400">
                    Streamline your workflow, automate tedious tasks, and focus on what really matters:
                    providing top-notch legal services to your clients.
                </p>

                {/* Optional CTA (uncomment if you wish to capture leads) */}
                {/* 
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm">
          <Input
            type="email"
            placeholder="Enter your email for updates..."
            className="w-full"
          />
          <Button className="w-full">Notify Me</Button>
        </div>
        */}
            </div>
        </main>
    );
}