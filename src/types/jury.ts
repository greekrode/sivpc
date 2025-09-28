export interface JuryMember {
  id: string;
  name: string;
  image: string;
  bio: string;
}

export interface JuryData {
  virtual: JuryMember[];
  live: JuryMember[];
}