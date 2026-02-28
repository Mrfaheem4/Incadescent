import { useState, useEffect } from "react";

const quotes = [
  "The best way to predict the future is to create it.",
  "In the middle of every difficulty lies opportunity.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream big and dare to fail.",
  "Your time is limited, don't waste it living someone else's life.",
];

export default function Quotation() {
  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)],
  );
  return (
    <div className="    w-64 min-h-[160px] bg-gray-100 px-8 py-6 text-sm font-light text-gray-500 leading-relaxed">
      {randomQuote}
    </div>
  );
}
