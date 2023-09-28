export class Episode {
  constructor(
    public id: string,
    public name: string,
    public airDate: Date,
    public episode: string,
    public url: string,
    public created: Date,
    public characters: string[],
  ) {}
}
