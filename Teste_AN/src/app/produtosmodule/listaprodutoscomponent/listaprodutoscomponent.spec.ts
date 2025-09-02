import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaprodutoscomponent } from './listaprodutoscomponent';

describe('Listaprodutoscomponent', () => {
  let component: Listaprodutoscomponent;
  let fixture: ComponentFixture<Listaprodutoscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listaprodutoscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaprodutoscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
