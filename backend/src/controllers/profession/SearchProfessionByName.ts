import { IProfessionDAO } from "../../dao/profession/IProfessionDAO";
import { Profession } from "../../models/Profession";

export class SearchProfessionByName {
  constructor(
    private professionDAO: IProfessionDAO
  ) {

  }

  async execute(name: string):Promise<Profession> {
    const profession = new Profession

    profession.name = name.toLocaleLowerCase()
    
    const getProfession = await this.professionDAO.searchProfessionByName(profession)

    return getProfession
  }
}