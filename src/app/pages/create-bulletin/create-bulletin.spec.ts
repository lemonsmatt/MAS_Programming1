import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulletinPage } from './create-bulletin';

describe('CreateBulletinPage', () => {
  let component: CreateBulletinPage;
  let fixture: ComponentFixture<CreateBulletinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBulletinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBulletinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
