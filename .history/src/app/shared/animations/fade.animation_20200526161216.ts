import { trigger, transition, style, animate } from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(5000)
  ]),
  transition('* => void', animate(5000, style({
    opacity: 0
  })))
]);
