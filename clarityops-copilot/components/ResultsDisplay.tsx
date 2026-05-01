import React from 'react';
import { ClarityOpsResult } from '@/lib/types';
import ClarifiedRequirement from './sections/ClarifiedRequirement';
import Assumptions from './sections/Assumptions';
import AcceptanceCriteria from './sections/AcceptanceCriteria';
import DeveloperHandoff from './sections/DeveloperHandoff';
import ImplementationTasks from './sections/ImplementationTasks';
import UATTestCases from './sections/UATTestCases';
import ReleaseRisks from './sections/ReleaseRisks';
import DocumentationChecklist from './sections/DocumentationChecklist';
import StakeholderSummary from './sections/StakeholderSummary';
import BeforeAfterBob from './sections/BeforeAfterBob';
import BobBuildWorkflow from './sections/BobBuildWorkflow';
import HowBobHelped from './sections/HowBobHelped';

interface ResultsDisplayProps {
  result: ClarityOpsResult;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  return (
    <div className="space-y-6">
      <ClarifiedRequirement requirement={result.clarifiedRequirement} />
      <Assumptions assumptions={result.assumptions} />
      <AcceptanceCriteria criteria={result.acceptanceCriteria} />
      <DeveloperHandoff />
      <ImplementationTasks taskGroups={result.implementationTasks} />
      <UATTestCases testCases={result.uatTestCases} />
      <ReleaseRisks risks={result.releaseRisks} />
      <DocumentationChecklist items={result.documentationChecklist} />
      <StakeholderSummary summary={result.stakeholderSummary} />
      <BeforeAfterBob />
      <BobBuildWorkflow />
      <HowBobHelped />
    </div>
  );
}

// Made with Bob
