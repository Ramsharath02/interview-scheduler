import React, { useState } from 'react';
import ServiceDetails from './ServiceDetails';
import SchedulingPanel from './SchedulingPanel';
import { BookingData, Step } from '../types';

const SchedulerContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('prescreening');
  const [bookingData, setBookingData] = useState<BookingData>({
    date: null,
    time: null,
    name: '',
    email: '',
    notes: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    wantsJob: null,
    speaksEnglish: null,
  });

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep === 'prescreening') setCurrentStep('date');
    else if (currentStep === 'date') setCurrentStep('time');
    else if (currentStep === 'time') setCurrentStep('details');
    else if (currentStep === 'details') setCurrentStep('confirmation');
  };

  const prevStep = () => {
    if (currentStep === 'time') setCurrentStep('date');
    else if (currentStep === 'details') setCurrentStep('time');
    else if (currentStep === 'confirmation') setCurrentStep('details');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <ServiceDetails />
        <SchedulingPanel
          currentStep={currentStep}
          bookingData={bookingData}
          updateBookingData={updateBookingData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </div>
    </div>
  );
};

export default SchedulerContainer;