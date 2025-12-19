import PageLayout from "@/components/PageLayout";
import FactsDisplay from "@/components/FactsDisplay";
import factsData from "@/data/facts.json";
import type { Fact } from "@/types/fact";

const facts: Fact[] = factsData;

export default function Home() {
  return (
    <PageLayout>
      <main className="max-w-6xl mx-auto px-6 py-8">
        <FactsDisplay facts={facts} />
      </main>
    </PageLayout>
  );
}
