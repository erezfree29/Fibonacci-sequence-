import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FibonacciComponent } from './fibonacci.component';


describe('Component: Fibonacci', () => {
    let component: FibonacciComponent;
    let fixture: ComponentFixture<FibonacciComponent>;

    it('should create the fibonacci component', async(() => {
        const fixture = TestBed.createComponent(FibonacciComponent);
        const fibonacci = fixture.debugElement.componentInstance;
        expect(fibonacci).toBeTruthy();
    }));

    it('it should return "the index is 0" when the number is 0', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(0);
        expect(result).toBe('the index is 0');
    });


    it('it should return "the index is 1 or 2" when the number is 1', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(1);
        expect(result).toBe('the index is 1 or 2');
    });

    it('it should return "the index is 3" when the number is 2', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(2);
        expect(result).toBe('the index is 3');
    });

    it('it should return "the index is 4" when the number is 3', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(3);
        expect(result).toBe('the index is 4');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 4', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(4);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 5" when the number is 5', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(5);
        expect(result).toBe('the index is 5');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 7', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(7);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 6" when the number is 8', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(8);
        expect(result).toBe('the index is 6');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 9', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(9);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 10', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(10);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 11', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(11);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 12', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(12);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 7" when the number is 13', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(13);
        expect(result).toBe('the index is 7');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 20', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(20);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 8" when the number is 21', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(21);
        expect(result).toBe('the index is 8');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 22', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(22);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 33', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(33);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 9" when the number is 34', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(34);
        expect(result).toBe('the index is 9');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 35', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(35);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 54', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(54);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 10" when the number is 55', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(55);
        expect(result).toBe('the index is 10');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 56', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(56);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 88', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(88);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });


    it('it should return "the index is 11" when the number is 89', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(89);
        expect(result).toBe('the index is 11');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 90', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(90);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 143', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(143);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

    it('it should return "the index is 12" when the number is 144', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(144);
        expect(result).toBe('the index is 12');
    });

    it('it should return "the number is not in the Fibonacci Sequence" when the number is 145', () => {
        fixture = TestBed.createComponent(FibonacciComponent);
        component = fixture.componentInstance;
        var component: FibonacciComponent;
        var result = component.getIndex(145);
        expect(result).toBe('the number is not in the Fibonacci Sequence');
    });

});



