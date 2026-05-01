import React from 'react';

export default function BobBranding() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
        <span className="text-2xl font-bold text-white">B</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        ClarityOps Copilot
      </h1>
      <p className="text-xl text-gray-600 mb-1">
        Powered by <span className="font-semibold text-blue-600">IBM Bob</span>
      </p>
      <p className="text-sm text-gray-500 max-w-2xl mx-auto">
        Transform vague business system requests into build-ready delivery plans
      </p>
    </div>
  );
}

// Made with Bob
