import { InjectionToken } from '@angular/core';

export const DEMO_ONE = new InjectionToken('DEMO_ONE');

export const DEMO_TWO = new InjectionToken('DEMO_TWO', {
    providedIn: 'root',
    factory: () => 'two2'
});
