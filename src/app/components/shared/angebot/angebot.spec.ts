import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angebot } from './angebot';

describe('Angebot', () => {
  let component: Angebot;
  let fixture: ComponentFixture<Angebot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angebot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angebot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
