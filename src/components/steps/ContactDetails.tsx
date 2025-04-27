import React from 'react';

interface ContactDetailsProps {
  name: string;
  email: string;
  notes: string;
  onChange: (data: { name?: string; email?: string; notes?: string }) => void;
  onNext: () => void;
  onBack: () => void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  name,
  email,
  notes,
  onChange,
  onNext,
  onBack,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  
  const isFormValid = name.trim() !== '' && email.trim() !== '';
  
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => onChange({ email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-gray-700 font-medium mb-1">
              Additional Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => onChange({ notes: e.target.value })}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Any specific topics you'd like to discuss?"
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Back
          </button>
          
          <button
            type="submit"
            disabled={!isFormValid}
            className={`
              px-6 py-2 rounded-md font-medium 
              ${isFormValid 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              transition-colors duration-200
            `}
          >
            Review Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;