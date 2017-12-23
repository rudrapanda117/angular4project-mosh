import { Directive  , HostListener, ElementRef , Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('format') format;
  constructor(private el: ElementRef) { }

@HostListener('focus')
  onFocus() {
    console.log('on Focus');
  }

  @HostListener('blur')
  onBlur() {
    let value = this.el.nativeElement.value;
    if(this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
    
    console.log('on blur');
  }
}
