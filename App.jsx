import React, { useState } from "react";

const App = () => {
  const [story, setStory] = useState("");
  const [summary, setSummary] = useState("");

  const summarizeStory = () => {
    if (!story.trim()) {
      setSummary("Please enter a story to summarize.");
      return;
    }

    // Improved summarization logic
    const sentences = story.split(/[.!?]/).filter((sentence) => sentence.trim().length > 0);
    const maxSentences = 3; // Number of key sentences for the summary

    if (sentences.length <= maxSentences) {
      setSummary(story);
    } else {
      // Select the first sentence and key sentences based on length
      const importantSentences = [sentences[0], ...sentences.slice(1).sort((a, b) => b.length - a.length).slice(0, maxSentences - 1)];
      setSummary(importantSentences.join(". ") + ".");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Story Summarizer
        </h1>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          rows="8"
          placeholder="Paste your story here..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={summarizeStory}
        >
          Summarize
        </button>
        {summary && (
          <div className="mt-6 bg-gray-50 p-4 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-medium text-gray-800">Summary:</h2>
            <p className="mt-2 text-gray-700">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
