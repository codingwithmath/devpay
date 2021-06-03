import { User } from "../models/User";

export interface IGitHubProviderResponse {
    name: string,
    bio: string
    avatarUrl: string
}

export interface IGithubProvider {
    getUser( user: User): Promise<IGitHubProviderResponse>;
}