import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoriasComponent } from './post-categorias.component';

describe('PostCategoriasComponent', () => {
  let component: PostCategoriasComponent;
  let fixture: ComponentFixture<PostCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
