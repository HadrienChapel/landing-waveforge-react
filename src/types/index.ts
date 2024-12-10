export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  value: string;
  description?: string;
}

export interface MacRecommendation {
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}