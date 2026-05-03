import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    setTimeout(() => this.el.nativeElement.focus());
  }
}
