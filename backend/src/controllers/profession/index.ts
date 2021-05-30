import { ProfessionDAO } from '../../dao/profession/ProfessionDAO'
import { CreateProfession } from './CreateProfession'
import { ProfessionController } from './ProfessionController'
import { SearchProfessionByName } from './SearchProfessionByName'
import { SearchProfessions } from './SearchProfessions'
import { UpdateProfession } from './UpdateProfession'

const professionDAO = new ProfessionDAO()

const createProfession = new CreateProfession(professionDAO)

const searchProfessions = new SearchProfessions(professionDAO)

const searchProfessionByName = new SearchProfessionByName(professionDAO)

const updateProfession = new UpdateProfession(professionDAO)

const professionController = new ProfessionController(createProfession, searchProfessions, searchProfessionByName, updateProfession)

export { professionController }