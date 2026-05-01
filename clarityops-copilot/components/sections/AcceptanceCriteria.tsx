import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { AcceptanceCriterion } from '@/lib/types';

interface AcceptanceCriteriaProps {
  criteria: AcceptanceCriterion[];
}

export default function AcceptanceCriteria({ criteria }: AcceptanceCriteriaProps) {
  const priorityColors = {
    'must-have': 'danger' as const,
    'should-have': 'warning' as const,
    'nice-to-have': 'info' as const
  };
  
  return (
    <Card title="Acceptance Criteria" collapsible defaultOpen>
      <div className="space-y-3">
        {criteria.map((criterion, index) => (
          <div key={criterion.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
              {index + 1}
            </span>
            <div className="flex-1">
              <p className="text-gray-700 mb-2">{criterion.criterion}</p>
              <Badge text={criterion.priority} color={priorityColors[criterion.priority]} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Made with Bob
