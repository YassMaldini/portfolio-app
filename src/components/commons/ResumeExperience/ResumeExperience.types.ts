export interface ResumeExperienceProps {
  title: string;
  date?: {
    begin: string;
    end: string;
  };
  place?: string;
  stack: string[];
  description?: string;
  features: string[];
}
