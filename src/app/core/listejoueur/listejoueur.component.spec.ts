import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListejoueurComponent } from './listejoueur.component';

describe('ListejoueurComponent', () => {
  let component: ListejoueurComponent;
  let fixture: ComponentFixture<ListejoueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListejoueurComponent]
    });
    fixture = TestBed.createComponent(ListejoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
