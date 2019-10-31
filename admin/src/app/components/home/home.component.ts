import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphService } from '../../services/graph/graph.service';
import { Graph } from '../../models/graph/graph';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  guestBookingLength: Graph = new Graph();
  randomBookingLength: Graph = new Graph();

  constructor(
    private router: Router,
    private graphService: GraphService
  ) { }

  rentalGraphOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  rentalGraphLabels: Array<string>;
  rentalGraphType = 'bar';
  rentalGraphLegend = true;
  rentalGraphData: any;

  ngOnInit() {
    let rentalData = this.graphService.getTotalMonthlyRental();
    this.rentalGraphLabels = rentalData.xAxis;
    this.rentalGraphData = [{
      data: rentalData.data,
      label: rentalData.label,
      backgroundColor: 'rgba(0,0,255,0.2)',
    }];

    this.guestBookingLength = this.updateGraph(this.graphService.getLengthOfGuestBookings(), 'pie', 'Guest Booking Length');
    this.randomBookingLength = this.updateGraph(this.graphService.getRandomMonthlyBookingPieChart(), 'pie', 'Random Guest Booking Length');
  }

  updateGraph(data, type, title){
    let graph = new Graph();
    graph.data = [];
    graph.data.push(data);
    graph.labels = data.xAxis;
    graph.type = type;
    graph.title = title;
    return graph;
  }

  chartClicked({ event, active }: { event: MouseEvent, active: any[] }): void {
    console.log("event:", event);
    console.log("active:", active);
    let index = (active[0]._index);
    let field = this.randomBookingLength.labels[index];
    console.log(index);
    console.log(field);
    this.router.navigate(["service-providers/" + field]);
  }

}
