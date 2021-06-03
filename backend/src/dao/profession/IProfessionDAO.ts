import { Profession } from "../../models/Profession";

export interface IProfessionDAO {
  professionExists(profession: Profession): Promise<Boolean>;
  searchProfessionById(profession: Profession): Promise<Boolean>;
  save(profession: Profession): Promise<void>;
  searchProfessions(): Promise<Array<Profession>>
  searchProfessionByName(profession: Profession): Promise<Profession>
  updateProfession(profession: Profession): Promise<void>
  deleteProfession(profession: Profession): Promise<void>
}