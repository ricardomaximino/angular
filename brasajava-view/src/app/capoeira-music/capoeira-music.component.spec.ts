import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraMusicComponent } from './capoeira-music.component';

describe('CapoeiraMusicComponent', () => {
  let component: CapoeiraMusicComponent;
  let fixture: ComponentFixture<CapoeiraMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
