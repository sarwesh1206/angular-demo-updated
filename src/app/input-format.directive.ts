import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@HostListener('focus') onFocus(){
  console.log("on focus");
}
@HostListener('blur') onBlur(){
  console.log("on blur")
}
  constructor() { }

}
