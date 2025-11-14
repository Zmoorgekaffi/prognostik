import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSubTitle } from './section-sub-title';

describe('SectionSubTitle', () => {
  let component: SectionSubTitle;
  let fixture: ComponentFixture<SectionSubTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSubTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSubTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
