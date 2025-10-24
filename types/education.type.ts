export type Education = {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  start: string;   
  end?: string;    
  current?: boolean;
  logo?: string;
  highlights?: string[];
  skills?: string[];
};
