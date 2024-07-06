import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "../../../../Services/message.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-message-consumer',
  template: '<app-message-presenter [messages]="messages"></app-message-presenter>',
  styleUrls: ['./massage-consumer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassageConsumerComponent implements OnInit, OnDestroy{
  public messages: any[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.pollMessages();
    setInterval(() => this.pollMessages(), 5000); // Poll every 5 seconds
    this.cdr.markForCheck();
  }

  pollMessages() {
    this.messageService.getMessages()
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages: any) => {
      this.messages = messages;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
