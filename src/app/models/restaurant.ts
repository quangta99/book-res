export interface ListRestaurants {
    
}
export interface RestaurantInformation {
    resId: string;
    restaurantName: string;
    address: AddressModel;
    typeName: Array<string>;
    seats: number;
    workTime: WorkTimeModel;
    menus: Array<MenuModel>;
    imageUrls: Array<string>;
}
export interface AddressModel {
    ward: string;
    street: string;
    district: string;
    country: string;
}
export interface WorkTimeModel {
    openTime: string;
    closeTime: string;
}
export interface MenuModel {
    menuName: string;
    decription: string;
    foodItems: Array<FoodItemModel>;
}
export interface FoodItemModel {
    foodName: string;
    imageUrl: string;
    description: string;
}
