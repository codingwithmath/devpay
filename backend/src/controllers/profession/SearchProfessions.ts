import { IProfessionDAO } from "../../dao/profession/IProfessionDAO";
import { Profession } from "../../models/Profession";

export class SearchProfessions {
  constructor(
    private professionDAO: IProfessionDAO
  ) {

  }

  async execute(): Promise<Array<Profession>> {
    const professions = await this.professionDAO.searchProfessions()

    return professions
  }
}