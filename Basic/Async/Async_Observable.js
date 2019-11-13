import {Observable} from 'rxjs';
import _ from "lodash";

console.log(Observable);

const numberObservable = new Observable(observer => {
    observer.next(5);
    observer.next(10);
    observer.next(11);
});

numberObservable.subscribe(value => console.log(value));


const a = [1,2,3];

_.each(a, x => console.log(x));