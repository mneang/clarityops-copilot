import React from 'react';
import Card from '../ui/Card';
import { ChecklistItem } from '@/lib/types';

interface DocumentationChecklistProps {
  items: ChecklistItem[];
}

export default function DocumentationChecklist({ items }: DocumentationChecklistProps) {
  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);
  
  return (
    <Card title="Documentation Checklist" collapsible defaultOpen>
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">{category}</h4>
            <div className="space-y-2">
              {categoryItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    readOnly
                  />
                  <label className="text-sm text-gray-700">{item.item}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Made with Bob
