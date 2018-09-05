import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'bulletin-detail',
  templateUrl: './bulletin-detail.html',
  styleUrls: ['./bulletin-detail.scss'],
})
export class BulletinDetailPage implements OnInit {

  info:any;
  constructor(private route: ActivatedRoute,
  public router: Router) { 
    firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.info = snapshotToObject(resp);
    });
  }

  ngOnInit() {
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}