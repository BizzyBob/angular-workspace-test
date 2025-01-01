import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederatedDialogComponent } from './federated-dialog.component';

describe('FederatedDialogComponent', () => {
  let component: FederatedDialogComponent;
  let fixture: ComponentFixture<FederatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FederatedDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FederatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
