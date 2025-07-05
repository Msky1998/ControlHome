export type Capteur = {
  temperature: number;
  smoke: number;
  gaz: boolean;
};

export type CapteurData = {
  id: number;
  device?: string | null;
  temperature?: number | null;
  smoke?: number | null;
  flame?: boolean | null;
  alert?: boolean | null;
  createdAt?: Date | string | null;
};
