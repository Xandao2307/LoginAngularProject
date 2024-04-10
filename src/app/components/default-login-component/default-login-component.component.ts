import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-component',
  standalone: true,
  imports: [],
  templateUrl: './default-login-component.component.html',
  styleUrl: './default-login-component.component.scss'
})
export class DefaultLoginComponentComponent {
  @Input() title: string = ""
  @Input() primaryBtnText: string = ""
  @Input() secundaryBtnText: string = ""

}
