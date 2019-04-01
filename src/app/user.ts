export class User {
  constructor(
    public login: string,
    public html_url: any,
    public avatar_url: string,
    public public_repos: any,
    public repo_url: any,
    public bio: any,
    public created_at: number,
    public following: number,
    public followers: number,
    public location: string,
    public hireable: string,
    public_gists:string
  ) {}
}
