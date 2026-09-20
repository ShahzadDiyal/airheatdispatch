export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface CoreService {
  slug: string;
  name: string;
  shortDesc: string;
  fullTitle: string;
  heroHeadline: string;
  directAnswer: string;
  features: string[];
  processSteps: ProcessStep[];
  faqs: ServiceFaq[];
  title?: string;
  description?: string;
  iconName?: string;
}
