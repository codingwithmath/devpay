import { uuid } from "uuidv4";

export class User {
  public readonly id: string;
  public name: string;
  public username: string;
  public bio: string;
  public techs: string;
  public avatarUrl: string;
  public password: string;
  public admin: boolean;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.name = props.name
    this.username = props.username
    this.bio = props.bio
    this.techs = props.techs
    this.avatarUrl = props.avatarUrl
    this.password = props.password
    this.admin = props.admin

    if (!id) {
      this.id = uuid()
    }
  }
}