import { Injectable } from '@angular/core';
import { GraphData } from '../../models/graph-data/graph-data';
import { GuestBookingLength } from '../../models/guest-booking-length/guest-booking-length';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  public getTotalMonthlyRental() {
    let rentalIncome = new GraphData();
    rentalIncome.xAxis =
      [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
    rentalIncome.data =
      [
        152,
        128,
        103,
        112,
        113,
        125,
        142,
        132,
        135,
        138,
        145,
        167
      ];
    rentalIncome.label = "Monthly Rental Income";
    return rentalIncome;
  }

  public getLengthOfGuestBookings() {
    let guestBookings = new GraphData();
    guestBookings.xAxis =
      [
        'Less than 3 days',
        '3 - 7 days',
        '7-14 days',
        'More than 14 days'
      ];
    guestBookings.data =
      [
        25,
        31,
        28,
        16
      ];
    guestBookings.label = "Length of Guest Bookings";
    return guestBookings;
  }

  getRandomMonthlyBookingPieChart() {
    let monthlyBookings = this.getRandomAnnualBookingLength();
    let fieldNames = Object.keys(monthlyBookings);
    let data = [];

    fieldNames.forEach(fieldName => {
      let totalBookings = 0;
      for (let i = 0; i < monthlyBookings[fieldName].length; i++) {
        totalBookings += monthlyBookings[fieldName][i];
      }
      data.push(totalBookings);
    })

    let guestBookings = new GraphData();
    guestBookings.xAxis = fieldNames;
    guestBookings.data = data;
    guestBookings.label = "Length of Guest Bookings";
    return guestBookings;
  }

  getRandomAnnualBooking(fieldName) {
    let monthlyBookings = this.getRandomAnnualBookingLength();

    let guestBookings = new GraphData();
    guestBookings.xAxis = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    guestBookings.data = monthlyBookings[fieldName];
    guestBookings.label = "Monthly Guest Bookings of Type " + fieldName;
    return guestBookings;
  }

  getRandomAnnualBookingLength() {
    let bookingsPerMonth = 20;
    let months = 12;

    let monthlyBookings = new GuestBookingLength();

    monthlyBookings.lessThan3 = [];
    monthlyBookings.between3and7 = [];
    monthlyBookings.between7and14 = [];
    monthlyBookings.above14 = [];

    for (let i = 0; i < months; i++) {
      monthlyBookings = this.addMonth(monthlyBookings);
      for (let j = 0; j < bookingsPerMonth; j++) {
        monthlyBookings = this.updateBookings(monthlyBookings, i);
      }
    }
    return monthlyBookings;
  }

  addMonth(bookings) {
    bookings.lessThan3.push(0);
    bookings.between3and7.push(0);
    bookings.between7and14.push(0);
    bookings.above14.push(0);
    return bookings;
  }

  updateBookings(bookings, month) {
    let bookingLength = Math.random() * 20;
    if (bookingLength < 3) {
      bookings.lessThan3[month] += 1;
    }
    else if (bookingLength >= 3 && bookingLength < 7) {
      bookings.between3and7[month] += 1;
    }
    else if (bookingLength >= 7 && bookingLength < 14) {
      bookings.between7and14[month] += 1;
    }
    else if (bookingLength >= 14) {
      bookings.above14[month] += 1;
    }
    return bookings;
  }

}
