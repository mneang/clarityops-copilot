import React from 'react';
import Card from '../ui/Card';
import { TestCase } from '@/lib/types';

interface UATTestCasesProps {
  testCases: TestCase[];
}

export default function UATTestCases({ testCases }: UATTestCasesProps) {
  return (
    <Card title="UAT Test Cases" collapsible defaultOpen>
      <div className="space-y-4">
        {testCases.map((testCase, index) => (
          <div key={testCase.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-2 mb-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              <h5 className="font-semibold text-gray-900">{testCase.scenario}</h5>
            </div>
            
            <div className="space-y-2 ml-8">
              <div>
                <span className="inline-block w-16 text-xs font-semibold text-blue-600 uppercase">Given:</span>
                <span className="text-sm text-gray-700">{testCase.given}</span>
              </div>
              <div>
                <span className="inline-block w-16 text-xs font-semibold text-purple-600 uppercase">When:</span>
                <span className="text-sm text-gray-700">{testCase.when}</span>
              </div>
              <div>
                <span className="inline-block w-16 text-xs font-semibold text-green-600 uppercase">Then:</span>
                <span className="text-sm text-gray-700">{testCase.then}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Made with Bob
