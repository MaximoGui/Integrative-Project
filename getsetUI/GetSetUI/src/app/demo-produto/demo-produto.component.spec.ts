import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProdutoComponent } from './demo-produto.component';

describe('DemoProdutoComponent', () => {
  let component: DemoProdutoComponent;
  let fixture: ComponentFixture<DemoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
