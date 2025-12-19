"use client";

import { useState } from "react";
import type { Fact } from "@/types/fact";

interface FactsDisplayProps {
  facts: Fact[];
}

export default function FactsDisplay({ facts }: FactsDisplayProps) {
  const [graduationYear, setGraduationYear] = useState<string>("");
  const [filteredFacts, setFilteredFacts] = useState<Fact[]>(facts);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSearch = () => {
    const year = parseInt(graduationYear);
    if (isNaN(year)) {
      alert("Please enter a valid year");
      return;
    }

    const filtered = facts.filter((fact) => fact.yearDisproven >= year);
    setFilteredFacts(filtered);
    setIsFiltered(true);
  };

  const handleReset = () => {
    setGraduationYear("");
    setFilteredFacts(facts);
    setIsFiltered(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Search by Graduation Year</h2>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Enter your high school graduation year"
            className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-900"
            min="1900"
            max={new Date().getFullYear()}
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
          {isFiltered && (
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Show All
            </button>
          )}
        </div>
        <p className="text-sm text-gray-700 mt-2">
          Find out what facts have been disproven since you graduated
        </p>
        {isFiltered && (
          <p className="text-sm font-semibold text-blue-700 mt-2">
            Showing {filteredFacts.length} fact{filteredFacts.length !== 1 ? "s" : ""} disproven
            since {graduationYear}
          </p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          {isFiltered ? `Facts Disproven Since ${graduationYear}` : "All Disproven Facts"}
        </h2>
        {filteredFacts.length === 0 ? (
          <div className="border border-gray-300 rounded p-8 text-center">
            <p className="text-gray-800 text-lg">
              No facts have been disproven since {graduationYear}. Try an earlier year!
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredFacts.map((fact) => (
              <article
                key={fact.id}
                className="border border-gray-300 rounded p-5 hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{fact.title}</h3>
                <p className="text-sm text-gray-800 mb-1"><strong>Originally taught:</strong> {fact.yearTaught}</p>
                <p className="text-sm text-gray-800 mb-3"><strong>Disproven:</strong> {fact.yearDisproven}</p>
                <p className="text-base text-gray-900 leading-relaxed">{fact.explanation}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                  {fact.category}
                </span>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
