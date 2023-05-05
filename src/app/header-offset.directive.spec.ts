import { ElementRef } from '@angular/core';
import { HeaderOffsetDirective } from './header-offset.directive';

describe('HeaderOffsetDirective', () => {
  it('should create an instance', () => {
    const directive = new HeaderOffsetDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
