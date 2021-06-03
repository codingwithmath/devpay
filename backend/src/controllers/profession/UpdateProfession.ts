import { IProfessionDAO } from "../../dao/profession/IProfessionDAO";
import { Profession } from "../../models/Profession";
import { IUpdateProfessionRequestDTO } from "./ProfessionDTO";

export class UpdateProfession {
  constructor(
    private professionDAO: IProfessionDAO
  ) {

  }

  async execute(data: IUpdateProfessionRequestDTO): Promise<void> {
    const profession = new Profession()

    profession.id = data.id
    profession.name = data.name
    profession.description = data.description
    profession.salary = data.salary

    const doProfessionExists = await this.professionDAO.searchProfessionById(profession)

    if (!doProfessionExists) {
      throw new Error('profession-not-founded')
    }

    try { 
      const doProfessionAlreadyExists = await this.professionDAO.searchProfessionByName(profession)

      if (doProfessionAlreadyExists) {
        throw new Error('profession-already-exists')
      }
    } catch (error) {
      if (error.message === 'not-founded') {
        await this.professionDAO.updateProfession(profession)
      }

      if (error.message === 'profession-already-exists') {
        throw new Error(error.message)
      }
    }
  }
}