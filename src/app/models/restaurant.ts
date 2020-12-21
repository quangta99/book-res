import { Time } from "@angular/common";

export class Restaurant {
    name: string;
    address: Direction;
    imgs: Array<Imgs>;
    time: TimeOC;
}
export class Direction{
    street: string;
    district: string;
    city: string;
    ward: string;
}
export class Imgs {
    url: string;
}
export class TimeOC{
    openTime: string;
    closeTime: string;
}
