import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeequipeComponent } from './listeequipe.component';

describe('ListeequipeComponent', () => {
  let component: ListeequipeComponent;
  let fixture: ComponentFixture<ListeequipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeequipeComponent]
    });
    fixture = TestBed.createComponent(ListeequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
