"use client";
import FeedbackForm from "@/components/FeedbackForm";
import { Navbar } from "@/components/HomeNavbar";
import LoadingScreen from "@/components/LoadingScreen";
import { CircleCheck, CircleX } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { resolvedTheme } = useTheme();
  if (!mounted) return <LoadingScreen />;

  const editorImage =
    resolvedTheme === "dark"
      ? "/assets/images/editor-dark.png"
      : "/assets/images/editor-light.png";
  return (
    <>
      <div className="min-h-screen bg-bg relative">
        {/* navbar */}
        <Navbar />

        {/* 1. Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-3xl mx-auto ">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
                Build Tailwind UIs Visually – No CSS Wrestling
              </h1>
              <p className="text-base text-text-secondary mb-8 max-w-md">
                The visual editor for developers who want to customize and
                export Tailwind components in seconds.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link
                href="/editor/button"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700
                 hover:to-blue-600  text-white px-6 py-3 rounded-lg font-medium 
                transition-colors "
              >
                Try Live Demo
              </Link>
            </div>
            <div
              className="border border-border bg-surface p-2 rounded-lg shadow-sm 
            inline-block w-auto h-auto "
            >
              {/* Replace with your actual screenshot */}
              <div
                className="bg-bg rounded-md flex 
              items-center justify-center  w-full shadow-2xl "
              >
                <Image
                  src={editorImage}
                  alt="Screenshot"
                  width={900}
                  height={900}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Benefit */}
        <section className="py-16 px-4 bg-surface" id="features">
          <div className="max-w-6xl w-full mx-auto ">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2 text-text-primary">
                From <span className="text-red-500">Code</span> to{" "}
                <span className="text-green-500">Visual</span> in Seconds
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Watch how TweakTail transforms your workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Before - Manual Coding */}
              <div className="bg-panel p-6 rounded-xl border border-border md:max-w-lg w-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="font-semibold text-text-primary">
                    Traditional Way
                  </h3>
                </div>
                <div className="bg-gray-800 dark:bg-neutral-800 text-gray-100 p-4 rounded-lg text-sm">
                  <pre className="overflow-x-auto">
                    {`<button class=" px-4 py-2bg-blue-500 text-white 
  rounded-lg
  hover:bg-blue-600
  transition-colors
  shadow-md
  flex items-center
  gap-2
">
  Click Me
</button>`}
                  </pre>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  {/* Bullet points */}

                  <li className="flex items-center gap-2">
                    <span>
                      <CircleX className="text-red-500" size={16} />
                    </span>
                    <span>Manually type each class</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CircleX className="text-red-500" size={16} />
                    </span>
                    <span>No visual feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CircleX className="text-red-500" size={16} />
                    </span>
                    <span>Time-consuming iterations</span>
                  </li>
                </ul>
                <div className="mt-4 text-right">
                  <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                    ~2 minutes to perfect
                  </span>
                </div>
              </div>

              {/* After - With TweakTail */}
              <div className="bg-panel p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="font-semibold text-text-primary">
                    With TweakTail
                  </h3>
                </div>
                <div className="bg-toolbar p-4 rounded-lg border border-border shadow-sm">
                  {/* Placeholder for editor screenshot */}
                  <div className="bg-gray-100  h-auto rounded flex items-center justify-center text-gray-400 overflow-hidden">
                    <video
                      src="/assets/video/tweaktail-demo.mp4 "
                      autoPlay
                      loop
                      muted
                      className="max-w-5xl w-full"
                    ></video>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span>
                      <CircleCheck className="text-green-500" size={16} />
                    </span>
                    <span>Adjust properties visually</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CircleCheck className="text-green-500" size={16} />
                    </span>
                    <span>Real-time preview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <CircleCheck className="text-green-500" size={16} />
                    </span>
                    <span>Export perfect code instantly</span>
                  </li>
                </ul>
                <div className="mt-4 text-right">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    ~15 seconds
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link
                href="/editor/button"
                className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Try the Visual Editor Now
              </Link>
              <p className="mt-3 text-sm text-text-secondary">
                Start building in seconds
              </p>
            </div>
          </div>
        </section>

        {/* 3. How It Works */}
        <section id="how-it-works" className="py-16 px-4 bg-bg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
              How TweakTail Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "1",
                  title: "Pick a Component",
                  desc: "Choose from our library of Tailwind components",
                },
                {
                  icon: "2",
                  title: "Customize Visually",
                  desc: "Adjust colors, spacing, and more with simple controls",
                },
                {
                  icon: "3",
                  title: "Copy & Use",
                  desc: "Get clean, production-ready Tailwind code",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="bg-surface p-6 rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Faster?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join the early users shaping TweakTail&apos;s future.
            </p>
            <Link
              href="/editor/button"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Start Free Now
            </Link>
            <p className="mt-4 text-blue-100 text-sm">
              No signup required for the demo
            </p>
          </div>
        </section>

        {/* feedback form */}
        <div className="fixed bottom-4 left-4 ">
          <FeedbackForm position="top" />
        </div>
      </div>
    </>
  );
}
