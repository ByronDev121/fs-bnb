export class Listing {
    public id: number;
    public providerId: number;
    public name: string;
    public shortDescription: string;
    public longDescription: string;
    public guests: number = 0;
    public beds: number = 0;
    public baths: number = 0;
    public amenities: string;
    public price: number;
    public location: string;
    public imgUrl: Array<any> = [];
}
