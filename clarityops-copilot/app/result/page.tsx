import Link from 'next/link';
import Button from '@/components/ui/Button';
import ResultsDisplay from '@/components/ResultsDisplay';
import { sampleResult } from '@/lib/sampleData';

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ClarityOps Copilot</h1>
                <p className="text-xs text-gray-500">Powered by IBM Bob</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="secondary" size="sm">
                ← New Analysis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Original Request */}
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-600 mb-1">Original Request</h2>
                <p className="text-lg text-gray-900 font-medium">{sampleResult.originalRequest}</p>
              </div>
            </div>
          </div>

          {/* Bob Impact Snapshot */}
          <div className="mb-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Bob Impact Snapshot
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-sm font-medium">Vague Request<br />Clarified</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-sm font-medium">Delivery Artifacts<br />Generated</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-sm font-medium">UAT Scenarios<br />Drafted</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-sm font-medium">Release Risks<br />Identified</div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/20 text-center">
              <p className="text-base font-medium">
                <span className="font-bold">2-4 hours</span> of manual planning condensed into <span className="font-bold">minutes</span>
              </p>
            </div>
          </div>

          {/* POC Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">Proof of Concept Demo</p>
                <p className="text-sm text-blue-800 mb-2">
                  This demonstrates how <span className="font-semibold">IBM Bob</span> transforms vague business system requests into comprehensive, build-ready delivery plans.
                </p>
                <p className="text-xs text-blue-700 italic">
                  This demo uses static fictional data. No client data, confidential data, live CRM, or external API is used.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <ResultsDisplay result={sampleResult} />

          {/* Footer Actions */}
          <div className="mt-8 flex justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                Analyze Another Request
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Built for <span className="font-semibold text-blue-600">IBM Bob Dev Day Hackathon</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Demonstrating how AI-powered planning accelerates enterprise software delivery
          </p>
        </div>
      </footer>
    </div>
  );
}

// Made with Bob
