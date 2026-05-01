'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Textarea from './ui/Textarea';
import Button from './ui/Button';

export default function InputForm() {
  const [request, setRequest] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim()) {
      router.push('/result');
    }
  };
  
  const handleDemo = () => {
    setRequest('Make approval routing smarter for high-value lease applications.');
    setTimeout(() => {
      router.push('/result');
    }, 300);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your vague request
          </label>
          <Textarea
            value={request}
            onChange={setRequest}
            placeholder="Example: Make approval routing smarter for high-value lease applications."
            rows={6}
          />
          <p className="mt-2 text-sm text-gray-500">
            {request.length} characters
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            className="flex-1"
          >
            Analyze with Bob
          </Button>
          <Button 
            type="button"
            variant="secondary" 
            size="lg"
            onClick={handleDemo}
          >
            Try Demo
          </Button>
        </div>
      </form>
      
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">💡 Proof of Concept:</span> This demo uses static sample data to show how IBM Bob transforms vague requests into comprehensive delivery plans. In production, IBM Bob would analyze your actual request in real-time.
        </p>
      </div>
    </div>
  );
}

// Made with Bob
