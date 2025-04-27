import React from 'react';
import DateSelector from './steps/DateSelector';
import TimeSelector from './steps/TimeSelector';
import ContactDetails from './steps/ContactDetails';
import Confirmation from './steps/Confirmation';
import PreScreening from './steps/PreScreening';
import ProgressIndicator from './ProgressIndicator';
import { BookingData, Step } from '../types';

interface SchedulingPanelProps {
  currentStep: Step;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const SchedulingPanel: React.FC<SchedulingPanelProps> = ({
  currentStep,
  bookingData,
  updateBookingData,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="lg:w-2/3 p-6 lg:p-8">
      {currentStep !== 'prescreening' && <ProgressIndicator currentStep={currentStep} />}
      
      <div className="mt-6">
        {currentStep === 'prescreening' && (
          <PreScreening
            wantsJob={bookingData.wantsJob}
            speaksEnglish={bookingData.speaksEnglish}
            onChange={(data) => updateBookingData(data)}
            onNext={nextStep}
          />
        )}
        
        {currentStep === 'date' && (
          <DateSelector
            selectedDate={bookingData.date}
            onDateSelect={(date) => {
              updateBookingData({ date });
              nextStep();
            }}
          />
        )}
        
        {currentStep === 'time' && (
          <TimeSelector
            selectedDate={bookingData.date}
            selectedTime={bookingData.time}
            timezone={bookingData.timezone}
            onTimeSelect={(time) => updateBookingData({ time })}
            onTimezoneChange={(timezone) => updateBookingData({ timezone })}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        
        {currentStep === 'details' && (
          <ContactDetails
            name={bookingData.name}
            email={bookingData.email}
            notes={bookingData.notes}
            onChange={(data) => updateBookingData(data)}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        
        {currentStep === 'confirmation' && (
          <Confirmation
            bookingData={bookingData}
            onBack={prevStep}
          />
        )}
      </div>
    </div>
  );
};

export default SchedulingPanel;