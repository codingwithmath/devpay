export interface ICreateProfessionRequestDTO {
  name: string;
  salary: Number;
  description: string;
}

export interface IUpdateProfessionRequestDTO {
  id: string
  name: string;
  salary: Number;
  description: string;
}