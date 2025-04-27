import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface PreScreeningProps {
  wantsJob: boolean | null;
  speaksEnglish: boolean | null;
  onChange: (data: { wantsJob?: boolean; speaksEnglish?: boolean }) => void;
  onNext: () => void;
}

const PreScreening: React.FC<PreScreeningProps> = ({
  wantsJob,
  speaksEnglish,
  onChange,
  onNext,
}) => {
  const [showThankYou, setShowThankYou] = React.useState(false);

  const handleAnswer = (question: 'wantsJob' | 'speaksEnglish', answer: boolean) => {
    onChange({ [question]: answer });
    if (answer === false) {
      setShowThankYou(true);
    }
  };

  const handleBack = () => {
    onChange({ wantsJob: null, speaksEnglish: null });
    setShowThankYou(false);
  };

  const canProceed = wantsJob === true && speaksEnglish === true;

  if (showThankYou) {
    return (
      <div className="text-center animate-fadeIn">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
          <XCircle className="w-8 h-8 text-gray-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest</h2>
        <p className="text-gray-600 mb-6">
          Unfortunately, we require candidates who are actively seeking employment and have English language proficiency.
        </p>
        <p className="text-gray-600 mb-8">
          We wish you the best in your future endeavors!
        </p>

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-400 transition-colors duration-200"
        >
          Back to Pre-screening
        </button>
      </div>
    );
  }

  

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Pre-screening</h2>
        <p className="text-gray-600">
          Please answer these two questions before proceeding
        </p>
      </div>

      <div className="space-y-8 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Are you actively looking for a job?
          </h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswer('wantsJob', true)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 
                ${wantsJob === true 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer('wantsJob', false)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 
                ${wantsJob === false 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              No
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Do you speak English?
          </h3>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswer('speaksEnglish', true)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 
                ${speaksEnglish === true 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer('speaksEnglish', false)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors duration-200 
                ${speaksEnglish === false 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {canProceed && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="px-6 py-2 bg-indigo-600 rounded-md font-medium text-white hover:bg-indigo-700 transition-colors duration-200"
          >
            Continue to Scheduling
          </button>
        </div>
      )}
    </div>
  );
};

export default PreScreening;
