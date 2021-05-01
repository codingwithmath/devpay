import axios from 'axios'

export class GithubProvider {
  async getUser(username: string) {
    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, avatar_url, bio } = response.data;

    return {
      name,
      avatarUrl: avatar_url,
      bio
    }
  }
}