import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AccordionComponent } from '../../components/accordion/accordion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {

      this.users = data.json();

      this.users.forEach(u => u.accordionExpanded = false);

      console.log(this.users);
    })
  }

  onClickAccordion(user){
    console.log(user.accordionExpanded)
    let backup = user.accordionExpanded;
    this.users.forEach(u => u.accordionExpanded = false);
    user.accordionExpanded = !backup;
  }

}
