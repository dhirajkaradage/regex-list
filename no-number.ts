import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appNoNumbersInput]",
})
export class NoNumbersInputDirective {
  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      "Tab",
      "Backspace",
      " ",
      ...Array.from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    ];

    // Allow only alphabetic characters, space, tab, and backspace
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
