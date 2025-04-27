import React from 'react';
import { Calendar, Clock, User, Mail, FileText, CheckCircle } from 'lucide-react';
import { BookingData } from '../../types';

interface ConfirmationProps {
  bookingData: BookingData;
  onBack: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ bookingData, onBack }) => {
  const formatDate = (date: Date | null) => {
    if (!date) return 'No date selected';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    });
  };
  
  const handleConfirm = () => {
    // Here we would handle the actual booking submission
    // For now, just show the success confirmation
    alert('Booking confirmed! A confirmation email has been sent to your inbox.');
  };
  
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Booking</h2>
        <p className="text-gray-600">
          Please review your booking details below
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Product Strategy Session
        </h3>
        
        <div className="space-y-4">
          <div className="flex">
            <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium text-gray-900">{formatDate(bookingData.date)}</p>
            </div>
          </div>
          
          <div className="flex">
            <Clock className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Time ({bookingData.timezone})</p>
              <p className="font-medium text-gray-900">{bookingData.time || 'No time selected'}</p>
            </div>
          </div>
          
          <div className="flex">
            <User className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-900">{bookingData.name || 'Not provided'}</p>
            </div>
          </div>
          
          <div className="flex">
            <Mail className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">{bookingData.email || 'Not provided'}</p>
            </div>
          </div>
          
          {bookingData.notes && (
            <div className="flex">
              <FileText className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Notes</p>
                <p className="font-medium text-gray-900">{bookingData.notes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-md mb-6">
        <p className="text-sm text-indigo-800">
          By confirming this booking, you'll receive:
        </p>
        <ul className="mt-2 text-sm text-indigo-700 space-y-1 list-disc list-inside">
          <li>A confirmation email with meeting details</li>
          <li>A calendar invitation for your Google Calendar</li>
          <li>A reminder 24 hours before the session</li>
        </ul>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          Back
        </button>
        
        <button
          onClick={handleConfirm}
          className="px-6 py-2 bg-indigo-600 rounded-md font-medium text-white hover:bg-indigo-700 transition-colors duration-200"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Confirmation;