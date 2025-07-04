'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import SpotlightCard from '../(component)/SpotlightCard';
import { quotes } from '../lib/quotes';

export default function QuoteGenerator() {
  const [topic, setTopic] = useState('');
  const [matchedQuotes, setMatchedQuotes] = useState<typeof quotes>([]);

  const handleGenerate = () => {
    const filtered = quotes.filter(q =>
      q.topic.toLowerCase().includes(topic.trim().toLowerCase())
    ).slice(0, 3);
    setMatchedQuotes(filtered);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-black text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Quote Generator</h1>

        <div className="flex gap-2 mb-8">
          <Input
            type="text"
            placeholder="Enter a topic (e.g. life, success)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleGenerate}>Generate</Button>
        </div>

        <div className="grid gap-6">
          {matchedQuotes.length === 0 && <p className="text-center opacity-70">No quotes yet.</p>}
          {matchedQuotes.map((q, i) => (
            <SpotlightCard key={i} className="text-left">
              <p className="text-lg font-medium italic">“{q.quote}”</p>
              <p className="text-sm mt-2 text-right text-neutral-400">— {q.author}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
