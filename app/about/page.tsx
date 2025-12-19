"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import PageLayout from "@/components/PageLayout";

export default function About() {
  useEffect(() => {
    // Initialize PayPal button when SDK loads
    const initPayPal = () => {
      if (window.paypal && window.paypal.HostedButtons) {
        window.paypal.HostedButtons({
          hostedButtonId: "KPFTQJTBGJGM2"
        }).render("#paypal-container-KPFTQJTBGJGM2");
      }
    };

    // Call init after a short delay to ensure SDK is loaded
    const timer = setTimeout(initPayPal, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAXA1d4pSwHK3mURZnlpW6c7Cass6FzfEH-Zy3O-N0tMDt6CpMSC2EeGOEvkoSbEE4dBVD-RoEvpLQ5UA&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="lazyOnload"
      />
      <main className="max-w-4xl mx-auto px-6 py-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">About Library of Useless</h2>

        <div className="prose max-w-none">
          <p className="text-lg mb-4 text-white leading-relaxed">
            Welcome to the Library of Useless, a collection of facts, theories, and "truths" that were once taught in schools around the world but have since been disproven, updated, or significantly revised.
          </p>

          <p className="mb-4 text-white leading-relaxed">
            Science and knowledge are constantly evolving. What we thought was true yesterday might be proven wrong tomorrow. This website aims to document these changes and help people understand how our collective knowledge has grown and changed over time.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Our Mission</h3>
          <p className="mb-4 text-white leading-relaxed">
            Our goal is to provide an educational resource that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-white space-y-2">
            <li>Documents facts that have been disproven or significantly updated</li>
            <li>Shows how scientific understanding evolves over time</li>
            <li>Helps people update their knowledge with current information</li>
            <li>Demonstrates the importance of critical thinking and questioning assumptions</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-white">How It Works</h3>
          <p className="mb-4 text-white leading-relaxed">
            You can browse all the disproven facts on our homepage, or use our search feature to find facts that have been updated since you graduated from high school. This way, you can discover what you learned in school that science has since proven wrong or refined.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Contribute</h3>
          <p className="mb-4 text-white leading-relaxed">
            Know a fact that was taught in schools but has since been disproven? We'd love to hear about it! Visit our <Link href="/submit" className="text-blue-400 hover:text-blue-300 underline font-semibold">Submit a Fact</Link> page to share your knowledge with the community.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Support This Project</h3>
          <p className="mb-4 text-white leading-relaxed">
            If you find this resource valuable, please consider supporting us! Your contribution helps us maintain the site, research new facts, and keep this educational resource free for everyone.
          </p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <p className="mb-4 text-white font-semibold text-base">Help us keep the facts coming!</p>
            <div id="paypal-container-KPFTQJTBGJGM2"></div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
