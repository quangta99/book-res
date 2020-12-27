import { UserService } from './../../services/user.service';
import { BookingService } from './../../services/booking.service';
import { Booking } from './../../models/booking';
import { AuthService } from './../../services/auth.service';
import { RestaurantService } from './../../services/restaurant.service';
import { FoodItemModel, MenuModel, RestaurantInformation } from './../../models/restaurant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './../../models/user';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  restaurant: RestaurantInformation;
  foods: Array<MenuModel>;
  sortBy: string = 'RestaurantName';
  isDesc: boolean = false;
  images: any[];
  date: Date;
  time: Date;
  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  es: any;
  invalidDates: Array<Date>;
  displayTab: boolean;
  loading = true;
  restaurants: Observable<RestaurantInformation>;
  responsiveOptions;
  private sub: any;
  bookingModel = new Booking();
  user = new User();
  constructor(private activatedRoute: ActivatedRoute, private restaurantService: RestaurantService, private router: Router, private authService: AuthService, private bookingService: BookingService, private userService: UserService, public datepipe: DatePipe) {
    this.restaurant = JSON.parse(activatedRoute.snapshot.params["item"]);
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  responsiveGalleri: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit(): void {
    if (this.authService.getToken() !== null) {
      this.userService.getUser(this.authService.getToken(), this);
    }
    this.restaurantService.getRestaurants(this);
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    };
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const prevMonth = (month === 0) ? 11 : month - 1;
    const prevYear = (prevMonth === 11) ? year - 1 : year;
    const nextMonth = (month === 11) ? 0 : month + 1;
    const nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
    console.log(this.date);
  }

  showBasicDialog(): void {
    this.displayTab = true;
    if (this.authService.getToken() === null) {
      this.bookingModel.atDate = this.datepipe.transform(this.date, 'MM/dd/yyyy');
      this.bookingModel.atHour = this.time.toString().slice(16, 18);
      this.bookingModel.atMinute = this.time.toString().slice(19, 21);
      this.bookingModel.resId = this.restaurant.resId;
    }
    else if (this.authService.getToken() !== undefined) {
        this.bookingModel.userName = this.user.userName;
        this.bookingModel.email = this.user.email;
        if (this.user.phone !== null) {
          this.bookingModel.phone = this.user.phone;
        }
        this.bookingModel.atDate = this.datepipe.transform(this.date, 'MM/dd/yyyy');
        this.bookingModel.atHour = this.time.toString().slice(16, 18);
        this.bookingModel.atMinute = this.time.toString().slice(19, 21);
        this.bookingModel.resId = this.restaurant.resId;
    }
  }
  viewRestaurant(id, item: RestaurantInformation) {
    this.router.navigate(['/book', id, JSON.stringify(item)]);
  }
  booking(): void {
    if (this.authService.getToken() === null) {
      this.bookingModel.atDate = this.datepipe.transform(this.date, 'MM/dd/yyyy');
      this.bookingModel.atHour = this.time.toString().slice(16, 18);
      this.bookingModel.atMinute = this.time.toString().slice(19, 21);
      this.bookingModel.resId = this.restaurant.resId;
      this.bookingService.bookForCustomer(this.bookingModel, this);
    }
    else {
      if (this.authService.getToken() !== undefined) {
        this.bookingModel.userName = this.user.userName;
        this.bookingModel.email = this.user.email;
        if (this.user.phone !== null) {
          this.bookingModel.phone = this.user.phone;
        }
        this.bookingModel.atDate = this.datepipe.transform(this.date, 'MM/dd/yyyy');
        this.bookingModel.atHour = this.time.toString().slice(16, 18);
        this.bookingModel.atMinute = this.time.toString().slice(19, 21);
        this.bookingModel.resId = this.restaurant.resId;
        this.bookingService.bookForUser(this.bookingModel, this);
        console.log(this.bookingModel);
      }
    }
  }
}
