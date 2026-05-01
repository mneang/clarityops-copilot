import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { TaskGroup } from '@/lib/types';

interface ImplementationTasksProps {
  taskGroups: TaskGroup[];
}

export default function ImplementationTasks({ taskGroups }: ImplementationTasksProps) {
  const priorityColors = {
    high: 'danger' as const,
    medium: 'warning' as const,
    low: 'info' as const
  };
  
  const totalTasks = taskGroups.reduce((sum, group) => sum + group.tasks.length, 0);
  
  return (
    <Card title="Implementation Tasks" collapsible defaultOpen>
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">{totalTasks} tasks</span> organized across {taskGroups.length} phases
        </p>
      </div>
      
      <div className="space-y-6">
        {taskGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">{group.phase}</h4>
            <div className="space-y-3">
              {group.tasks.map((task) => (
                <div key={task.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-900">{task.title}</h5>
                    <Badge text={task.priority} color={priorityColors[task.priority]} />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                  <p className="text-xs text-gray-500">
                    Estimated: {task.estimatedHours} hours
                  </p>
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
