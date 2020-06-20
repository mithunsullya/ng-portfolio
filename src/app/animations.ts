import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

export let fade = trigger('fade', [
  transition('void => *', [ // each time the binding value changes
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
  ])
])