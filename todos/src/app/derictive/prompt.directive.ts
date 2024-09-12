import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrompt]',
  standalone: true
})
export class PromptDirective {

  @Input('appPrompt') promptText!: string;  // Входное значение для текста подсказки
  promptElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    if(!this.promptElement){
      this.onPrompt();
    }
  }

  @HostListener('mouseleave') onMouseLeave(){
    if(this.promptElement){
      this.offPrompt()
    }
  }

  private onPrompt(){
    this.promptElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.promptText)

    this.renderer.appendChild(this.promptElement, text);
    this.renderer.appendChild(document.body, this.promptElement);

    this.renderer.setStyle(this.promptElement, 'position', 'absolute');
    this.renderer.setStyle(this.promptElement, 'background-color', '#fff1ab');
    this.renderer.setStyle(this.promptElement, 'font-size', '12px');
    this.renderer.setStyle(this.promptElement, 'color', '#3c3c3c');
    this.renderer.setStyle(this.promptElement, 'padding', '2px');
    this.renderer.setStyle(this.promptElement, 'border-radius', '5px');
    this.renderer.setStyle(this.promptElement, 'top', `${this.el.nativeElement.getBoundingClientRect().top - 30}px`);
    this.renderer.setStyle(this.promptElement, 'left', `${this.el.nativeElement.getBoundingClientRect().right - 100}px`);
  }

  private offPrompt(){
    if(this.promptElement){
      this.renderer.removeChild(document.body, this.promptElement);
      this.promptElement = null;
    }
  }

}
