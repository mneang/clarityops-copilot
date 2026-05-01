'use client';

import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { StakeholderSummary as StakeholderSummaryType } from '@/lib/types';

interface StakeholderSummaryProps {
  summary: StakeholderSummaryType;
}

export default function StakeholderSummary({ summary }: StakeholderSummaryProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const summaryText = `STAKEHOLDER SUMMARY

${summary.executiveSummary}

KEY BENEFITS:
${summary.keyBenefits.map((benefit, i) => `${i + 1}. ${benefit}`).join('\n')}

DELIVERY OUTLOOK:
${summary.timelineEstimate}

RESOURCE REQUIREMENTS:
${summary.resourceRequirements.map((req, i) => `• ${req}`).join('\n')}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <Card title="Stakeholder Summary" collapsible defaultOpen>
      <div className="space-y-6">
        {/* Executive Summary */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Executive Summary</h4>
          <p className="text-gray-700 leading-relaxed">{summary.executiveSummary}</p>
        </div>
        
        {/* Key Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits</h4>
          <ul className="space-y-2">
            {summary.keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Delivery Outlook */}
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-900 mb-1">Delivery Outlook</h4>
          <p className="text-blue-800">{summary.timelineEstimate}</p>
        </div>
        
        {/* Resource Requirements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Resource Requirements</h4>
          <ul className="space-y-2">
            {summary.resourceRequirements.map((resource, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{resource}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Copy Button */}
        <div className="mt-6 flex justify-center">
          <Button
            variant={copied ? "secondary" : "primary"}
            size="md"
            onClick={handleCopy}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Summary
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Made with Bob
