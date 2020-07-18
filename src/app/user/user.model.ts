export class TradeCallaData {
    constructor(
        public id: string,
        public title: string,
        public subtitle: string,
        public description: string,
        public imageUrl: string[],
        public imageCount: number,
        public favoriteCount: number,
        public isRead: boolean,
        public time: string,
    ) { }
}
