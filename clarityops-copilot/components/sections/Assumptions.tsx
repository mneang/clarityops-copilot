import React from 'react';
import Card from '../ui/Card';

interface AssumptionsProps {
  assumptions: string[];
}

export default function Assumptions({ assumptions }: AssumptionsProps) {
  return (
    <Card title="Assumptions" collapsible defaultOpen>
      <ul className="space-y-2">
        {assumptions.map((assumption, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span className="text-gray-700">{assumption}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

// Made with Bob
