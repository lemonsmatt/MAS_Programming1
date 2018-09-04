import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinDetailPage } from './bulletin-detail';

describe('BulletinDetailPage', () => {
  let component: BulletinDetailPage;
  let fixture: ComponentFixture<BulletinDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
