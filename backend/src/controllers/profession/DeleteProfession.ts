import { ProfessionDAO } from "../../dao/profession/ProfessionDAO";
import { Profession } from "../../models/Profession";

export class DeleteProfession {
  constructor(
    private professionDAO: ProfessionDAO
  ) {

  }

  async execute(id: string): Promise<void> {
    const profession = new Profession()

    profession.id = id

    const doProfessionExists = await this.professionDAO.searchProfessionById(profession)

    if (!doProfessionExists) {
      throw new Error('profession-not-founded')
    }

    await this.professionDAO.deleteProfession(profession)
  }
}