export interface Bio {

}

export interface CVItem {
  institution: string;
  period: string;
  description: string;
}

export interface EducationItem extends CVItem {
  degree: string;
  thesis?: string;
}

export interface ExperienceItem extends CVItem {
  role: string;
}

export interface CV {
  name: string;
  title: string;
  experience: ExperienceItem[];
  education: EducationItem[];
}

export interface BasePage {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export interface Blog extends BasePage {
  author?: string;
}

export interface Project extends BasePage {
  external_url?: string;
}

export interface Publication extends BasePage {
  authors: string;
  journal?: string;
  external_url?: string;
}

export interface Talk extends BasePage {
  event?: string;
  external_url?: string;
}

export interface Teaching extends BasePage {
  institution?: string;
  external_url?: string;
}
