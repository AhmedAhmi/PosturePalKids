import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {}
