import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-presenter',
  templateUrl: './massage-presenter.component.html',
  styleUrls: ['./massage-presenter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagePresenterComponent implements OnInit {
  @Input() messages: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.messages = this.messages.filter(
        message => message.expirationDate > new Date()
      );
      this.cdr.markForCheck()
    }, 1000); // Check for expired messages every second
  }
  isBase64(str: string): boolean {
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }

}
