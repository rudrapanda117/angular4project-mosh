import { Directive  , HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

@HostListener('focus')
  onFocus() {
    console.log('on Focus');
  }

  @HostListener('blur')
  onBlur() {
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
    console.log('on blur');
  }
}
