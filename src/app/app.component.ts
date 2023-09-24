import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clase-04-interpolacion-y-directivas';
  enabled = true;
  getBackgroundColor(): object {
    return {
      backgroundColor: this.enabled ? 'green' : 'grey',
    };
  }

  alternarEnabled() {
    this.enabled = !this.enabled;
  }
}
