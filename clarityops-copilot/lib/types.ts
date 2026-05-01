export interface ClarityOpsResult {
  originalRequest: string;
  clarifiedRequirement: string;
  assumptions: string[];
  acceptanceCriteria: AcceptanceCriterion[];
  implementationTasks: TaskGroup[];
  uatTestCases: TestCase[];
  releaseRisks: Risk[];
  documentationChecklist: ChecklistItem[];
  stakeholderSummary: StakeholderSummary;
}

export interface AcceptanceCriterion {
  id: string;
  criterion: string;
  priority: 'must-have' | 'should-have' | 'nice-to-have';
}

export interface TaskGroup {
  phase: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  estimatedHours: number;
}

export interface TestCase {
  id: string;
  scenario: string;
  given: string;
  when: string;
  then: string;
}

export interface Risk {
  id: string;
  risk: string;
  severity: 'high' | 'medium' | 'low';
  mitigation: string;
}

export interface ChecklistItem {
  id: string;
  category: string;
  item: string;
}

export interface StakeholderSummary {
  executiveSummary: string;
  keyBenefits: string[];
  timelineEstimate: string;
  resourceRequirements: string[];
}

// Made with Bob
