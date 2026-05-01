import React from 'react';
import Card from '../ui/Card';

export default function BobBuildWorkflow() {
  const steps = [
    {
      mode: "Plan Mode",
      icon: "📋",
      description: "Scoped app, folder structure, MVP flow"
    },
    {
      mode: "Code Mode",
      icon: "💻",
      description: "Generated Next.js/Tailwind components"
    },
    {
      mode: "Context-Aware Edits",
      icon: "✏️",
      description: "Refined approval-routing sample data"
    },
    {
      mode: "Code Review",
      icon: "🔍",
      description: "Checked hackathon readiness and clarity"
    },
    {
      mode: "Documentation",
      icon: "📝",
      description: "Prepared README and submission copy"
    },
    {
      mode: "Task Reports",
      icon: "📊",
      description: "Exported evidence saved in bob_sessions"
    }
  ];

  return (
    <Card title="IBM Bob Build Workflow" collapsible defaultOpen>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{step.icon}</span>
                <h4 className="font-semibold text-gray-900">{step.mode}</h4>
              </div>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg text-center">
        <p className="text-sm text-purple-900">
          <span className="font-semibold">Result:</span> Complete proof-of-concept built with Bob as development partner
        </p>
      </div>
    </Card>
  );
}

// Made with Bob
