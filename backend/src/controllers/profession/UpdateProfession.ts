import { IProfessionDAO } from "../../dao/profession/IProfessionDAO";
import { Profession } from "../../models/Profession";
import { IUpdateProfessionRequestDTO } from "./ProfessionDTO";

export class UpdateProfession {
  constructor(
    private professionDAO: IProfessionDAO
  ) {

  }

  async execute(data: IUpdateProfessionRequestDTO): Promise<void> {
    const profession = new Profession

    profession.id = data.id
    profession.name = data.name
    profession.description = data.description
    profession.salary = data.salary

    await this.professionDAO.updateProfession(profession)
  }
}