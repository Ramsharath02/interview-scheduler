import React from 'react';
import { Calendar, Clock, User, Check } from 'lucide-react';
import { Step } from '../types';

interface ProgressIndicatorProps {
  currentStep: Step;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { id: 'date', label: 'Select Date', icon: Calendar },
    { id: 'time', label: 'Select Time', icon: Clock },
    { id: 'details', label: 'Your Details', icon: User },
    { id: 'confirmation', label: 'Confirmation', icon: Check },
  ];
  
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.id === currentStep);
  };
  
  return (
    <div className="w-full">
      <div className="hidden sm:flex justify-between">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCurrent = step.id === currentStep;
          const isCompleted = index < getCurrentStepIndex();
          
          return (
            <div key={step.id} className="flex flex-col items-center relative w-full">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full 
                ${isCurrent ? 'bg-indigo-600 text-white' : 
                  isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}
                mb-2 z-10 transition-colors duration-300
              `}>
                <StepIcon className="w-5 h-5" />
              </div>
              
              <span className={`
                text-sm font-medium 
                ${isCurrent ? 'text-indigo-600' : 
                  isCompleted ? 'text-green-500' : 'text-gray-500'}
                transition-colors duration-300
              `}>
                {step.label}
              </span>
              
              {index < steps.length - 1 && (
                <div className={`
                  absolute top-5 left-1/2 w-full h-0.5 
                  ${index < getCurrentStepIndex() ? 'bg-green-500' : 'bg-gray-200'}
                  transition-colors duration-300
                `} />
              )}
            </div>
          );
        })}
      </div>
      
      <div className="sm:hidden">
        <div className="flex items-center mb-4">
          <div className={`
            flex items-center justify-center w-8 h-8 rounded-full 
            ${steps[getCurrentStepIndex()].id === currentStep ? 'bg-indigo-600' : 'bg-gray-200'} 
            text-white mr-3
          `}>
            {React.createElement(steps[getCurrentStepIndex()].icon, { className: "w-4 h-4" })}
          </div>
          <span className="text-lg font-medium text-gray-900">
            {steps[getCurrentStepIndex()].label}
          </span>
        </div>
        <div className="flex mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                h-1 flex-1 
                ${index <= getCurrentStepIndex() ? 'bg-indigo-600' : 'bg-gray-200'} 
                ${index > 0 ? 'ml-1' : ''}
                transition-colors duration-300
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;