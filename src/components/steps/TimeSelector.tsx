import React from 'react';
import { Globe } from 'lucide-react';

interface TimeSelectorProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  timezone: string;
  onTimeSelect: (time: string) => void;
  onTimezoneChange: (timezone: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedDate,
  selectedTime,
  timezone,
  onTimeSelect,
  onTimezoneChange,
  onNext,
  onBack,
}) => {
  // Dummy available time slots
  const availableTimeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];
  
  // Get list of timezones
  const timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
    Intl.DateTimeFormat().resolvedOptions().timeZone, // User's local timezone
  ];
  
  // Format date as a readable string
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    });
  };
  
  // Format timezone for display
  const formatTimezone = (timezone: string) => {
    return timezone.replace(/_/g, ' ').replace(/\//g, ' / ');
  };
  
  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Time</h2>
      <p className="text-gray-600 mb-6">
        For {selectedDate ? formatDate(selectedDate) : 'the selected date'}
      </p>
      
      <div className="mb-6">
        <label htmlFor="timezone" className="flex items-center text-gray-700 font-medium mb-2">
          <Globe className="h-4 w-4 mr-2 text-indigo-600" />
          Timezone
        </label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => onTimezoneChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {formatTimezone(tz)}
            </option>
          ))}
        </select>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {availableTimeSlots.map((time) => (
            <button
              key={time}
              className={`
                py-3 px-2 rounded-md text-center transition-colors duration-200
                ${selectedTime === time 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-50 text-gray-700 hover:bg-indigo-50'}
              `}
              onClick={() => onTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Back
        </button>
        
        <button
          onClick={onNext}
          disabled={!selectedTime}
          className={`
            px-6 py-2 rounded-md font-medium 
            ${selectedTime 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            transition-colors duration-200
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TimeSelector;