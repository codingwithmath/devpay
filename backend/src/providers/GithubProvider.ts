import axios from 'axios'
import { User } from '../models/User';
import { IGitHubProviderResponse } from './IGithubProvider';
import { IGithubProvider } from './IGithubProvider'

export class GithubProvider implements IGithubProvider{
  async getUser(user: User): Promise<IGitHubProviderResponse> {
    const response = await axios.get(`https://api.github.com/users/${user.username}`);

    const { name, avatar_url, bio } = response.data;

    return {
      name,
      avatarUrl: avatar_url,
      bio
    }
  }
}