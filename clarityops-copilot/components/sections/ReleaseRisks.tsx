import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Risk } from '@/lib/types';

interface ReleaseRisksProps {
  risks: Risk[];
}

export default function ReleaseRisks({ risks }: ReleaseRisksProps) {
  const severityColors = {
    high: 'danger' as const,
    medium: 'warning' as const,
    low: 'info' as const
  };
  
  return (
    <Card title="Release Risks" collapsible defaultOpen>
      <div className="space-y-4">
        {risks.map((risk) => (
          <div key={risk.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between mb-2">
              <h5 className="font-medium text-gray-900 flex-1">{risk.risk}</h5>
              <Badge text={`${risk.severity} severity`} color={severityColors[risk.severity]} />
            </div>
            <div className="mt-3 pl-4 border-l-2 border-blue-500">
              <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Mitigation Strategy:</p>
              <p className="text-sm text-gray-700">{risk.mitigation}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Made with Bob
