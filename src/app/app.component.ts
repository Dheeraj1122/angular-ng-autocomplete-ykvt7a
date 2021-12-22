import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyword = 'name';
  email = 'mail';
  public countries = [
    {
      id: 1,
      name: 'Albania',
      mail: 'dkhandelwaldeloitte.com',
    },
    {
      id: 2,
      name: 'Belgium',
      mail: 'shahid.com',
    },
    {
      id: 3,
      name: 'Denmark',
      mail: 'ravi.com',
    },
    {
      id: 4,
      name: 'Montenegro',
      mail: 'ravi.com',
    },
    {
      id: 5,
      name: 'Turkey',
      mail: 'test.com',
    },
    {
      id: 6,
      name: 'Ukraine',
      mail: 'mehta.com',
    },
    {
      id: 7,
      name: 'Macedonia',
      mail: 'ajay.com',
    },
    {
      id: 8,
      name: 'Slovenia',
      mail: 'khandelwal.com',
    },
    {
      id: 9,
      name: 'Georgia',
      mail: 'kumar.com',
    },
    {
      id: 10,
      name: 'India',
      mail: 'acharya.com',
    },
    {
      id: 11,
      name: 'Russia',
      mail: 'russ.com',
    },
    {
      id: 12,
      name: 'Switzerland',
      mail: 'swiss.com',
    },
  ];
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
}
