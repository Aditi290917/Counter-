import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  standalone: true,
  imports: [NgFor],
})
export class DefaultComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    //this.counter.update((oldcounter) => oldcounter + 1);
    this.counter.set((this.counter() + 1));
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  
  }

  decrement() {
    //this.counter.update((oldcounter) => oldcounter - 1);
    this.counter.set((this.counter() - 1));
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
    
  }
}
