import { Injectable, inject } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable()
export class IsMobileViewportService {
  private breakpointObserver = inject(BreakpointObserver);

  private isMobileViewport$ = this.breakpointObserver
    .observe('(max-width: 640px)')
    .pipe(map((state: BreakpointState) => state.matches));
  isMobileViewport = toSignal(this.isMobileViewport$, { initialValue: false });
}
