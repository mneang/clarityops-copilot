'use client';

import React, { useState } from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

export default function Card({ 
  title, 
  children, 
  collapsible = false, 
  defaultOpen = true,
  className = ''
}: CardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}`}>
      <div 
        className={`px-6 py-4 border-b border-gray-200 bg-gray-50 ${collapsible ? 'cursor-pointer hover:bg-gray-100' : ''}`}
        onClick={() => collapsible && setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {collapsible && (
            <svg 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-6 py-4">
          {children}
        </div>
      )}
    </div>
  );
}

// Made with Bob
