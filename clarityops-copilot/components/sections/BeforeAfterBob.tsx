import React from 'react';
import Card from '../ui/Card';

export default function BeforeAfterBob() {
  const comparisons = [
    {
      before: "Vague request with unclear scope",
      after: "Clarified requirement with specific business rules and success criteria"
    },
    {
      before: "No acceptance criteria",
      after: "7 testable criteria prioritized by must-have and should-have"
    },
    {
      before: "No test plan",
      after: "5 Given/When/Then UAT scenarios covering key workflows"
    },
    {
      before: "Hidden release risks",
      after: "4 risks identified with practical mitigation strategies"
    },
    {
      before: "Manual stakeholder summary needed",
      after: "Executive-ready summary with benefits and delivery outlook"
    }
  ];

  return (
    <Card title="Before Bob / After Bob" collapsible defaultOpen>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 bg-red-50">Before Bob</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 bg-green-50">After Bob</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((comparison, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-700 bg-red-50/30">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{comparison.before}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-700 bg-green-50/30">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{comparison.after}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-center">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">Impact:</span> From ambiguity to actionable delivery plan in minutes
        </p>
      </div>
    </Card>
  );
}

// Made with Bob
