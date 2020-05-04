import { Directive,HostListener, ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private e1: ElementRef) {

   }
   @Input('format') format
@HostListener('focus') onFocus(){
  console.log("on focus");
}
@HostListener('blur') onBlur(){
  let value: string = this.e1.nativeElement.value
  this.e1.nativeElement.value = value;
  if(this.format == 'lowercase'){
    this.e1.nativeElement.value = value.toLowerCase()
  }
    else{
      this.e1.nativeElement.value = value.toUpperCase()
    }
  }



}
