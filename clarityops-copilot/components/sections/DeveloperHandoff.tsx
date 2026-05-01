import React from 'react';
import Card from '../ui/Card';

export default function DeveloperHandoff() {
  return (
    <Card title="Developer Handoff" collapsible defaultOpen>
      <div className="space-y-5">
        {/* Likely Impacted Files */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Likely Impacted Files</h4>
          <div className="space-y-2">
            {[
              'approvalRouting.ts',
              'riskScoringRules.ts',
              'applicationValidation.ts',
              'approvalDashboard.tsx'
            ].map((file, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <code className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded">{file}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Questions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Engineering Questions</h4>
          <ul className="space-y-2">
            {[
              'Where should value thresholds be configured?',
              'What happens if risk score is unavailable?',
              'Should incomplete applications be blocked or routed to data collection?',
              'Who can manually override routing?'
            ].map((question, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-orange-600 font-semibold mt-0.5">?</span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested First Step */}
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="text-sm font-semibold text-green-900 mb-2">Suggested First Implementation Step</h4>
          <p className="text-sm text-green-800">
            Create a routing decision function with unit tests before building UI.
          </p>
        </div>
      </div>
    </Card>
  );
}

// Made with Bob
