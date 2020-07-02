import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilPage } from './aceuil.page';

describe('AceuilPage', () => {
  let component: AceuilPage;
  let fixture: ComponentFixture<AceuilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceuilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
