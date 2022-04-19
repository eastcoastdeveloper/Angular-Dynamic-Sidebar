import { Component, Injectable } from '@angular/core';

// Get Window Size, step 1
function _window(): any {
  return window;
}

// Get Window Size, step 2
@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class AppComponent {
  // Get Window Size, step 3
  windowSize: any;
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerWidth;
  mobileWidth: number = 760;

  ngOnInit(): void {
    // Get Window Size, step 4
    this.isMobile = this.width < this.mobileWidth;
  }

  // Get Window Size, step 5
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    console.log(this.width, this.isMobile);
  }
}
