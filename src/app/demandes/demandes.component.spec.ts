import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesComponent } from './demandes.component';

describe('DemandesComponent', () => {
  let component: DemandesComponent;
  let fixture: ComponentFixture<DemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('teste d état',()=>{
  let component: DemandesComponent;

it('should be true', () => {
expect(true).toEqual(true)
}
  )
})
