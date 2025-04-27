import React from 'react';
import { Clock, User, Video, Globe } from 'lucide-react';

const ServiceDetails: React.FC = () => {
  return (
    <div className="bg-indigo-50 lg:w-1/3 p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Strategy Session</h2>
        <p className="text-gray-600">
          Schedule a one-on-one consultation with our product strategy experts
          to discuss your vision and roadmap.
        </p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Duration</h3>
            <p className="text-gray-600">60 minutes</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <User className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Your Consultant</h3>
            <p className="text-gray-600">Sarah Johnson, Lead Product Strategist</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Video className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Meeting Format</h3>
            <p className="text-gray-600">Video conference via Zoom</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Globe className="h-5 w-5 text-indigo-600 mt-0.5 mr-3" />
          <div>
            <h3 className="font-medium text-gray-900">Timezone Support</h3>
            <p className="text-gray-600">Available in your local timezone</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-medium text-gray-900 mb-2">What to expect</h3>
        <ul className="text-gray-600 space-y-1 list-disc list-inside">
          <li>Initial assessment of your product vision</li>
          <li>Competitive landscape analysis</li>
          <li>Strategic recommendations</li>
          <li>Q&A and next steps discussion</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;