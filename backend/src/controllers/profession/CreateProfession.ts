import { uuid } from "uuidv4";
import { IProfessionDAO } from "../../dao/profession/IProfessionDAO";
import { Profession } from "../../models/Profession";
import { ICreateProfessionRequestDTO } from "./ProfessionDTO";

export class CreateProfession {
  constructor(
    private professionDAO: IProfessionDAO
  ) {

  }

  async execute(data: ICreateProfessionRequestDTO): Promise<void> {
    const profession = new Profession()

    profession.name = data.name.toLocaleLowerCase()

    const professionExists = await this.professionDAO.professionExists(profession)

    if (professionExists) {
      throw new Error("Profession already exists")
    }

    profession.description = data.description.toLocaleLowerCase()
    profession.salary = data.salary
    profession.id = uuid()

    await this.professionDAO.save(profession)
  }
}