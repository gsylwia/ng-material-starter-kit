export interface InfluencersModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: [{
    readonly name: string;
    readonly id: number;
  }];
}
