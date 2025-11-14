import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngebotSinglePage } from './angebot-single-page';

describe('AngebotSinglePage', () => {
  let component: AngebotSinglePage;
  let fixture: ComponentFixture<AngebotSinglePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngebotSinglePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngebotSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
