import { Directive, ElementRef, effect, inject, input } from '@angular/core';

/**
 * Renders a TeX expression into the host element with KaTeX.
 * Only the host element is touched, so `$` elsewhere on the page (e.g. in
 * price strings) is never treated as math.
 *
 * KaTeX is loaded on demand: the math only appears in the cross-reference
 * dialog, so it should not weigh down the initial bundle.
 */
@Directive({
  selector: '[appKatex]',
  standalone: true,
})
export class KatexDirective {
  public readonly appKatex = input.required<string>();
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      // Content is written as `$...$`; KaTeX takes the bare expression.
      const expression = this.appKatex().replace(/^\$|\$$/g, '');
      import('katex').then(({ default: katex }) => {
        katex.render(expression, this.element.nativeElement, {
          throwOnError: false,
        });
      });
    });
  }
}
