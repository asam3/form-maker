/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormMakerComponent } from './form-maker.component';

describe('FormMakerComponent', () => {
  let component: FormMakerComponent;
  let fixture: ComponentFixture<FormMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
