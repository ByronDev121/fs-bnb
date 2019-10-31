import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';
import { ServiceProviderService } from '../../services/service-provider/service-provider.service';
import { GraphService } from '../../services/graph/graph.service';
import { Graph } from '../../models/graph/graph';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {

  providers: Array<User>;
  guestMonthlyBooking: Graph = new Graph();
  field: string;

  constructor(
    private router: Router,
    private providerSevice: ServiceProviderService,
    private graphService: GraphService,
  ) {
    this.providerSevice.getAll().then(res => {
      this.providers = res;
    }).catch(err => {
      alert(err);
    });
  }

  ngOnInit() {
    this.field = 'between3and7';
    this.guestMonthlyBooking = this.updateGraph(this.graphService.getRandomAnnualBooking(this.field), 'bar', ('Random Guest Booking'));
  }

  updateGraph(data, type, title) {
    let graph = new Graph();
    graph.data = [];
    graph.data.push(data);
    graph.labels = data.xAxis;
    graph.type = type;
    graph.title = title;
    return graph;
  }

  goToListings(providerId) {
    this.router.navigate(['listings', providerId]);
  }

}
