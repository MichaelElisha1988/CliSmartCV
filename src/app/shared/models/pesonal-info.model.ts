export interface PersonalInfo {
  dataName: string;
  data: Info[];
}

export interface Info {
  address: string;
  phoneNum: string;
  marital: string;
  lang: Language[];
  email: string;
}

interface Language {
  name: string;
  lvl: string;
}
