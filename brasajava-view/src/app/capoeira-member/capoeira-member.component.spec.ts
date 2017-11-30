import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraMemberComponent } from './capoeira-member.component';

describe('CapoeiraMemberComponent', () => {
  let component: CapoeiraMemberComponent;
  let fixture: ComponentFixture<CapoeiraMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
