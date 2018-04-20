export class User {
  public id: number;
  public name: string;
  public lastname: string;
  public profile: ProfileConfig;
}

export class ProfileConfig {
  public banner: string;
  public profile: string;
  public message: string;
}
