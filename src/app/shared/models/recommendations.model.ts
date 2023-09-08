export interface Recommendations {
  dataName: string;
  data: Recommendation[];
}

export interface Recommendation {
  name: string;
  position: string;
  date: string;
  free_text: string;
}
