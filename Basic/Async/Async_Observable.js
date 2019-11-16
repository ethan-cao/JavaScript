/*
http://reactivex.io/rxjs/manual/overview.html

RxJS is the JavaScript implementation of the ReactiveX project. 
The ReactiveX project aims at providing an API for asynchronous programming 
The fundamental paradigm of ReactiveX is observer pattern using observable. 

e.g.
const observable = new Observable(observer => observer.next(1));
const subscription = observable.subscribe(x = > console.log(x));
subscription.unsubscribe();
*/

// import is not part of JS, use webpack as transpiler
// import {Observable} from 'rxjs';

// use require() if debug using NodeJs,
const { Observable } = require("rxjs");


/**
 *   Observable represents an invokable collection of future values or events.
 */
let observable = null;

observable = Observable.create(observer => {
    observer.next(1);
});

// constructor take a subscribe function as parameter, subscribe function has a parameter observer
// subscribe() represents an Observable execution, it start execution only when an Observer subscribes to the Observable
observable = new Observable(observer => {
    observer.next(1);

    return function unsubscribe() {
        // without returning unsubscribe(), subscription.unsubscribe() just cancels the exexcution
        // With returning unsubscribe(), it makes possible to to cancel and dispose resource
    };
});


/**
 *  Observers is a set of callbacks(next, error, complete), that listens and handles values delivered by the Observable
 *  Observers is a consumer of values delivered by an Observable, 
 * 
 *  In an Observable Execution, multiple Next can be delivered. 
 *  If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
 */
var observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};


/**
 *  use observable.subscribe(observer) to make Observer subscribes to the Observable
 * 
 *  observable.subscribe(observer) is invoked, subscribe() in Observable constructor is invoked for that particular observer
 *  Each call to observable.subscribe triggers its own independent setup for that given Observer  (unicast)
 * 
 *  Subscribing to an Observable is analogous to calling a Function.
 */
const subscription = observable.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
);



/**
 *  observable.subscribe(observer) returns an Subscription object, represents the Observable execution ,
 *  use subscription.unsubscribe() to cancel the Observable execution or release resource
 */
subscription.unsubscribe();










/**
 *  Subject is a special type of Observable that allows values to be multicasted to many Observers. 
 *  It is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers
 *  While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
 *  A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
 *  Every Subject is an Observable.
 *  Every Subject is an Observer. 
 *  To feed a new value to the Subject, just call next(theValue), and it will be multicasted to the Observers registered to listen to the Subject.
 */


 
/**
 * Operators: are pure functions that enable a functional programming style of dealing with collections
 */
