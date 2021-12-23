import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  auto: any;
  keyword = 'test';

  constructor() {
    // this.data.forEach((obj) => {
    //   obj.name = obj.name + ' - ' + obj.address;
    // });
  }

  ngOnInit() {}
  Data() {
    this.auto = [
      {
        id: 1,
        name: 'Virat Sharma',
        address: 'New York City',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 2,
        name: 'Mark Jubin',
        address: 'Calliforia',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 3,
        name: 'Thomas Muller',
        address: 'Munich',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 4,
        name: 'Paul',
        address: 'Paris',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 5,
        name: 'Vein Mark',
        address: 'England',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 6,
        name: 'Robert',
        address: 'Australia',
        test: 'Virat Sharma - New York City',
      },
      {
        id: 7,
        name: 'Tom Smith',
        address: 'Newzeland',
        test: 'Virat Sharma - New York City',
      },
    ];
  }
  selectEvent(item) {
    alert(item.name);
    // here we can write code for doing something with selected item
  }

  onChangeSearch(val: string) {
    // here we can fetch data from remote location here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // here we can write our code for doing something when input is focused
  }
}
