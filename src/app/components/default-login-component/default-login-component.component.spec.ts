import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginComponentComponent } from './default-login-component.component';

describe('DefaultLoginComponentComponent', () => {
  let component: DefaultLoginComponentComponent;
  let fixture: ComponentFixture<DefaultLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
