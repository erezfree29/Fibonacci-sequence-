import { TestBed, async } from '@angular/core/testing';
import { FibonacciComponent } from './fibonacci.component';


describe('Component: Fibonacci', () => {
    let component: FibonacciComponent;

    it('should create the fibonacci component', async(() => {
        const fixture = TestBed.createComponent(FibonacciComponent);
        const fibonacci = fixture.debugElement.componentInstance;
        expect(fibonacci).toBeTruthy();
    }));

    it('it should return "the index is 1 or 2" when the number is 1', () => {
        var result = component.getIndex(1);
      });

});



