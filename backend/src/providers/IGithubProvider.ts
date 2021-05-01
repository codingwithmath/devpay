export interface IGithubProvider {
    getUser( username: string): Promise<object>;
}