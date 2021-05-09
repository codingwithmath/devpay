export interface IGitHubProviderResponse {
    name: string,
    bio: string
    avatarUrl: string
}

export interface IGithubProvider {
    getUser( username: string): Promise<IGitHubProviderResponse>;
}