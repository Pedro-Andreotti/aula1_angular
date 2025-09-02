import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Botaocomponent } from './botaocomponent';

describe('Botaocomponent', () => {
  let component: Botaocomponent;
  let fixture: ComponentFixture<Botaocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Botaocomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Botaocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
