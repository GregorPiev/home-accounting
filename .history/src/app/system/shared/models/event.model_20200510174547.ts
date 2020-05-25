export class WFMEvent {
  constructor(
    public id?: string,
    public type: string,
    public amount: number,
    public category: number,
    public date: string,
    public description: string
  ) { }
}
