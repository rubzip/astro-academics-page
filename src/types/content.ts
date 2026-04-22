export interface Bio {

}

export interface CVItem {
  name: string;
  institution: string;
  interval: string;
  description: string;
}

export interface CV {
  name: string;
  title: string;
  experience: CVItem[];
  education: CVItem[];
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
