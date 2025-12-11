import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemviewer } from './itemviewer';

describe('Itemviewer', () => {
  let component: Itemviewer;
  let fixture: ComponentFixture<Itemviewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itemviewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Itemviewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
