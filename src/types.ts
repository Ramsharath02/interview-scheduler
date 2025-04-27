export type Step = 'prescreening' | 'date' | 'time' | 'details' | 'confirmation';

export interface BookingData {
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  notes: string;
  timezone: string;
  wantsJob: boolean | null;
  speaksEnglish: boolean | null;
}