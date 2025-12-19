"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function Submit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      factTitle: formData.get('fact-title'),
      originalTeaching: formData.get('original-teaching'),
      yearTaught: formData.get('year-taught'),
      disprovenInfo: formData.get('disproven-info'),
      yearDisproven: formData.get('year-disproven'),
      sources: formData.get('sources'),
      submitterName: formData.get('submitter-name'),
      submitterEmail: formData.get('submitter-email'),
    };

    try {
      const response = await fetch('/api/submit-fact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Submit a Disproven Fact</h2>

        <p className="mb-6 text-gray-800">
          Know a fact that was taught in schools but has since been disproven or updated? Share it with us! Please provide as much detail as possible.
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
            <p className="font-semibold">Thank you for your submission!</p>
            <p>We've received your fact and will review it shortly.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded">
            <p className="font-semibold">Error submitting fact</p>
            <p>Please try again or contact us directly at libraryofuselessfacts@gmail.com</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fact-title" className="block text-sm font-medium mb-2">
              Fact Title
            </label>
            <input
              type="text"
              id="fact-title"
              name="fact-title"
              placeholder="e.g., Pluto is the Ninth Planet"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="original-teaching" className="block text-sm font-medium mb-2">
              What Was Originally Taught
            </label>
            <textarea
              id="original-teaching"
              name="original-teaching"
              rows={4}
              placeholder="Describe what was originally taught in schools..."
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="year-taught" className="block text-sm font-medium mb-2">
              When Was This Taught? (Approximate Year Range)
            </label>
            <input
              type="text"
              id="year-taught"
              name="year-taught"
              placeholder="e.g., 1930-2006"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="disproven-info" className="block text-sm font-medium mb-2">
              How It Was Disproven/Updated
            </label>
            <textarea
              id="disproven-info"
              name="disproven-info"
              rows={4}
              placeholder="Explain how this fact was disproven or updated..."
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="year-disproven" className="block text-sm font-medium mb-2">
              When Was It Disproven/Updated?
            </label>
            <input
              type="text"
              id="year-disproven"
              name="year-disproven"
              placeholder="e.g., 2006"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="sources" className="block text-sm font-medium mb-2">
              Sources (Optional)
            </label>
            <textarea
              id="sources"
              name="sources"
              rows={3}
              placeholder="Provide links or references to credible sources..."
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="submitter-name" className="block text-sm font-medium mb-2">
              Your Name (Optional)
            </label>
            <input
              type="text"
              id="submitter-name"
              name="submitter-name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="submitter-email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="submitter-email"
              name="submitter-email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900"
              required
            />
            <p className="text-sm text-gray-700 mt-1">
              We'll use this to contact you if we have questions about your submission.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Fact'}
          </button>

          <p className="text-sm text-gray-700 text-center">
            Submissions will be reviewed before being added to the library.
          </p>
        </form>
      </main>
    </PageLayout>
  );
}
