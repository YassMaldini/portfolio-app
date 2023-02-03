export interface ResumeExperienceProps {
  title: string;
  date?: {
    begin: string;
    end: string;
  };
  place?: string;
  stack: string[];
  features: string[];
}
