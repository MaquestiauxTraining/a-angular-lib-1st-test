import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuiTableComponent } from './eui-table.component';

describe('EuiTableComponent', () => {
  let component: EuiTableComponent;
  let fixture: ComponentFixture<EuiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuiTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EuiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
