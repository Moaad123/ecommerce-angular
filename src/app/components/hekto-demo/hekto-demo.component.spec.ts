import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HektoDemoComponent } from './hekto-demo.component';

describe('HektoDemoComponent', () => {
  let component: HektoDemoComponent;
  let fixture: ComponentFixture<HektoDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HektoDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HektoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
