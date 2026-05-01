import { ClarityOpsResult } from './types';

export const sampleResult: ClarityOpsResult = {
  originalRequest: "Make approval routing smarter for high-value lease applications.",
  
  clarifiedRequirement: "Implement an intelligent approval routing system for commercial lease applications exceeding $500K annual value that automatically routes applications to appropriate approvers based on lease value, risk score, and data completeness. The system should reduce manual routing decisions, flag incomplete applications, and provide real-time visibility into approval status across all stakeholder levels.",
  
  assumptions: [
    "High-value threshold is defined as lease applications with annual value ≥ $500K",
    "Approval hierarchy exists: Relationship Manager → Regional Director → VP of Credit → CFO (for >$2M)",
    "Risk score is available from an existing internal process or future integration",
    "Applications may be incomplete when initially submitted",
    "System integrates with existing CRM and document management systems",
    "Audit trail requirements for compliance and regulatory review"
  ],
  
  acceptanceCriteria: [
    {
      id: "ac1",
      criterion: "System automatically routes applications to correct approver based on lease value tiers ($500K-$1M, $1M-$2M, >$2M)",
      priority: "must-have"
    },
    {
      id: "ac2",
      criterion: "Applications with incomplete customer information are flagged and routed to data collection queue",
      priority: "must-have"
    },
    {
      id: "ac3",
      criterion: "Risk score above threshold (>75) triggers additional review by Risk Management team",
      priority: "must-have"
    },
    {
      id: "ac4",
      criterion: "Approvers receive real-time notifications when applications require their review",
      priority: "must-have"
    },
    {
      id: "ac5",
      criterion: "Complete audit trail captures all routing decisions, approvals, and rejections",
      priority: "must-have"
    },
    {
      id: "ac6",
      criterion: "System escalates applications automatically if not reviewed within SLA timeframe (24 hours)",
      priority: "should-have"
    },
    {
      id: "ac7",
      criterion: "Dashboard displays approval pipeline status with filtering by value tier and status",
      priority: "should-have"
    }
  ],
  
  implementationTasks: [
    {
      phase: "Clarify Rules & Scope",
      tasks: [
        {
          id: "task1",
          title: "Define routing rules and approval matrix",
          description: "Document value tiers ($500K/$1M/$2M), risk thresholds, and approval authority levels",
          priority: "high",
          estimatedHours: 12
        },
        {
          id: "task2",
          title: "Design data completeness validation",
          description: "Identify required fields and validation logic for incomplete applications",
          priority: "high",
          estimatedHours: 8
        }
      ]
    },
    {
      phase: "Build Routing Logic",
      tasks: [
        {
          id: "task3",
          title: "Implement routing rules engine",
          description: "Build configurable engine for value-based and risk-based routing with escalation",
          priority: "high",
          estimatedHours: 40
        },
        {
          id: "task4",
          title: "Create approver dashboard and notifications",
          description: "Build dashboard with pending approvals, action buttons, and real-time notifications",
          priority: "high",
          estimatedHours: 32
        },
        {
          id: "task5",
          title: "Integrate with CRM and risk scoring API",
          description: "Connect to existing systems for customer data and automated risk assessment",
          priority: "high",
          estimatedHours: 24
        }
      ]
    },
    {
      phase: "Validate & Release",
      tasks: [
        {
          id: "task6",
          title: "Conduct UAT with approvers",
          description: "Run user acceptance testing with actual approvers using test applications",
          priority: "high",
          estimatedHours: 24
        },
        {
          id: "task7",
          title: "Deploy and train users",
          description: "Production deployment with training sessions and monitoring",
          priority: "high",
          estimatedHours: 16
        }
      ]
    }
  ],
  
  uatTestCases: [
    {
      id: "uat1",
      scenario: "High-value application routes to correct approver",
      given: "A lease application with $750K annual value and complete customer information is submitted",
      when: "The application enters the approval workflow",
      then: "System automatically routes to Regional Director, sends notification, and displays in their pending queue"
    },
    {
      id: "uat2",
      scenario: "Incomplete application is flagged before routing",
      given: "A lease application with $1.2M annual value is missing required financial documents",
      when: "The application is submitted for approval",
      then: "System flags application as incomplete, routes to data collection queue, and notifies relationship manager"
    },
    {
      id: "uat3",
      scenario: "High-risk application triggers additional review",
      given: "A lease application with $900K annual value has a risk score of 82",
      when: "The application is processed by routing engine",
      then: "System routes to both Regional Director and Risk Management team for parallel review"
    },
    {
      id: "uat4",
      scenario: "Ultra-high-value application routes through full approval chain",
      given: "A lease application with $2.5M annual value and complete data is submitted",
      when: "The application enters approval workflow",
      then: "System routes sequentially through Relationship Manager → Regional Director → VP of Credit → CFO with notifications at each level"
    },
    {
      id: "uat5",
      scenario: "SLA breach triggers automatic escalation",
      given: "A lease application has been pending with Regional Director for 25 hours without action",
      when: "The SLA timer expires (24-hour threshold)",
      then: "System sends escalation notification to VP of Credit and flags application as overdue in dashboard"
    }
  ],
  
  releaseRisks: [
    {
      id: "risk1",
      risk: "Incorrect routing logic sends high-value applications to wrong approvers, causing delays and compliance issues",
      severity: "high",
      mitigation: "Comprehensive routing rule testing with all value tier scenarios; dry-run with test data; manual override capability for first 30 days"
    },
    {
      id: "risk2",
      risk: "Integration failures with CRM or risk scoring API cause application processing delays",
      severity: "high",
      mitigation: "Build fallback mechanisms for API failures; implement retry logic; create manual processing workflow for system outages"
    },
    {
      id: "risk3",
      risk: "Notification system failures result in approvers missing time-sensitive applications",
      severity: "high",
      mitigation: "Implement redundant notification channels (email + in-app); add daily digest emails; escalation notifications for missed SLAs"
    },
    {
      id: "risk4",
      risk: "Approvers resist new system, preferring manual routing process",
      severity: "medium",
      mitigation: "Early stakeholder engagement; comprehensive training; maintain parallel manual process for first 2 weeks; gather feedback quickly"
    }
  ],
  
  documentationChecklist: [
    {
      id: "doc1",
      category: "User Documentation",
      item: "Approver quick start guide with common actions"
    },
    {
      id: "doc2",
      category: "User Documentation",
      item: "Dashboard navigation and filtering guide"
    },
    {
      id: "doc3",
      category: "User Documentation",
      item: "Understanding application risk scores and flags"
    },
    {
      id: "doc4",
      category: "Technical Documentation",
      item: "Routing rules configuration guide"
    },
    {
      id: "doc5",
      category: "Technical Documentation",
      item: "API integration specifications (CRM, Risk Scoring)"
    },
    {
      id: "doc6",
      category: "Technical Documentation",
      item: "Deployment and rollback procedures"
    },
    {
      id: "doc7",
      category: "Operations Documentation",
      item: "Manual override procedures for system issues"
    },
    {
      id: "doc8",
      category: "Operations Documentation",
      item: "SLA monitoring and escalation management"
    },
    {
      id: "doc9",
      category: "Compliance Documentation",
      item: "Audit trail access and reporting procedures"
    },
    {
      id: "doc10",
      category: "Training Materials",
      item: "Video walkthrough for new approvers"
    }
  ],
  
  stakeholderSummary: {
    executiveSummary: "IBM Bob has transformed your request into a comprehensive plan for an intelligent approval routing system that will meaningfully reduce manual routing decisions, improve processing speed, and enhance visibility for high-value lease applications. The solution addresses key pain points: manual routing inefficiency, incomplete application handling, and lack of real-time visibility across the approval pipeline.",
    
    keyBenefits: [
      "Reduce approval processing time by 40-50% through automated routing and parallel workflows",
      "Eliminate manual routing errors that cause delays and compliance issues",
      "Improve data quality by flagging incomplete applications before they enter approval workflow",
      "Provide real-time visibility into approval pipeline for all stakeholders",
      "Ensure compliance with complete audit trail of all routing and approval decisions",
      "Enable faster decision-making with mobile-accessible approver dashboard",
      "Reduce escalations through proactive SLA monitoring and notifications"
    ],
    
    timelineEstimate: "IBM Bob generated this planning package in minutes. Real implementation timeline depends on existing integrations, approval policies, and system architecture.",
    
    resourceRequirements: [
      "Business systems analyst / product owner for rule confirmation",
      "Developer for routing logic and UI changes",
      "QA/UAT testers for validation"
    ]
  }
};

// Made with Bob
