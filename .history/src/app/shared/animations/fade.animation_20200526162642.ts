import { trigger, transition, style, animate } from '@angular/animations';

export const fadeStateTrigger = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1.2s', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('1.2s', style({ opacity: 0 }))
  ])
]);
