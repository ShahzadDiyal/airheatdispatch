export interface LocationProblem {
  title: string;
  desc: string;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationData {
  stateSlug: string;
  stateName: string;
  citySlug: string;
  cityName: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  climateContext: string;
  commonProblems: LocationProblem[];
  subAreas: string[];
  faqs: LocationFaq[];
}

export interface MajorCityRef {
  name: string;
  slug: string;
  region: string;
}

export interface StateData {
  stateSlug: string;
  stateName: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  climateOverview: string;
  majorCities: MajorCityRef[];
  faqs: LocationFaq[];
}
