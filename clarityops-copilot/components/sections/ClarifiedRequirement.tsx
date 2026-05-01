import React from 'react';
import Card from '../ui/Card';

interface ClarifiedRequirementProps {
  requirement: string;
}

export default function ClarifiedRequirement({ requirement }: ClarifiedRequirementProps) {
  return (
    <Card title="Clarified Requirement" collapsible defaultOpen>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">{requirement}</p>
      </div>
    </Card>
  );
}

// Made with Bob
