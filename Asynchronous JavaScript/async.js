// Asynchronous code in a nutshell is a code that can start right away and finish later, letting the rest of the code run. This whole idea is the beating heart of asynchronous behavior

setTimeout(() => {
  console.log(0, 'setTimeout callback is fired with a delay of 0ms');
}, 0);

console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
  console.log(4, 'setTimeout callback is fired with a delay of 3000ms');
}, 3000);

console.log(5);

// JavaScript by its nature is a single threaded (synchronous) language, and that means that it can execute only one statement (function) at a time in order, from top to bottom. A thread is like an ordered sequence of statements. One statement being executed at a time is a crux of synchronous code.

// Async JS governs how we perform tasks which take some time to complete (like getting data from a database or an API that takes 2 or 3 seconds to complete) In a synchronous programming world this fetching of data stalls the program, blocking the rest of the code underneath from running until this long task is complete, and it's a downfall of sync code.

// Async code comes to play to help us out. We are using asynchronous functions mostly to request some external data. The browser takes that network request and handles it outside of the scope of this single thread, and JavaScript can carry on down the queue and run the remaining functions.

// Since an async function finishes later, we typically pass this function or this statement some kind of callback function as a parameter. The browser takes and puts a callback func aside too to execute it later on once the request is complete and the data comes back. Now we are allowed to call this callback func and finish the parent function.

// HTTP requests

// Sometimes we wanna show stuff on our website which is stored in some kind of database or in another server, such as blog posts, or comments, or maybe a list of songs, or even user data for a profile page. So, we'd make what's known an http request to reach out to that external server or that database to get the data and then do something with it. We can make those requests to what's known as API endpoints, and these are just URLs that a particular API or server exposes to us. For example, a song library API like Deezer or Soundcloud might have an endpoint which looks like this: 'https://api.deezer.com/artist/399/top' So, making a request to this endpoint would return us a list of Radiohead most popular songs. From our code which runs in the browser we make a request to a server endpoint, and the server sends us back a selection of data in a JSON format as a response. Now we can do something with this data, like render it to the browser, if we want to.

// API

// An API allows different applications that aren't built exactly the same to communicate. We can build functionality in the client app written in JS to make a request to the server app written in, say, Python, and the server app can give a response back to the client. That is why we're building an API, an interface for these pieces of software to communicate with one another. In general it's a one way thing: the client consumes information given from the server.

// REST API

// It works exactly the same way with a REST API, although instead of getting HTML, you get JSON which is actually an array of keys with associated values. This way to notate objects is supported in pretty much every language, and this is now a standard for APIs. So JSON is basically a language of communication for the API. If you need to get a list of users or update some comments, whatever you want to do, your actions are defined as API endpoints. For example, a web server will have either an IP address or a domain name. So, if you request, say, 'calebsfavoritedrinks.com/api/drinks/25', this will return JSON with all the information about the specific drink.

// Why do we use endpoints?

// We are not given direct access to the database for security, versatility and modularity reasons, when, say, frontend desktop app and mobile app are sharing the same backend, consuming the same API, which means they will always have the same data, and they are going to be synchronized, when the data is being updated. And as far as frontend and backend are separated, we can swap different things out without breaking other pieces of the application. If we, say, want to rewrite our backend in another language, we can expose the same exact API endpoints, and the frontend doesn't even need to know about those changes. This is great because you can upgrade the backend of software without requiring an update to the app or requiring a new deployment of the website as long as you are able to give a consistent interface to work with your backend.

// Public API endpoints

// This setup is also good for interoperability reasons. You can actually expose certain endpoints, making them public. In this case you don't have to worry about authentication or authorization, and anybody can go ahead and create some new and improved app to consume your API. If I don't like the way instagram looks, I can go create my very own instagram viewer because they have an API that can be consumed. There are loads of APIs that we can use, and each one of them is going to have its own set of endpoints that we may request to for data. You can make your own API using a server-side language. Many web sites have APIs that let us automate different things in code. So, it's not always just about making a pretty interface. If an API is private, you still can access it, but you need to be authorized.

// Request methods

// C - create | POST
// R - read   | GET
// U - update | PUT
// D - delete | DELETE

// Replacing a resource requires some way to identify it, and it's often done with an id: 'PUT/drinks/25'. When you are adding new data with POST, you don't know what that id is going to be because it's auto-incremented in the database.

// Now, how can we interact with API endpoints and make HTTP requests to them from our JS code so that we can get some data back in a JSON format and then do something with it, like output a dynamic html template in the browser? Well, there are different ways of doing it.

// XMLHttpRequest (XHR)

// 1. We create a request object (client) The XML part represents the older data format, but this request object can work with any kind of data now, it's built into JS language

// 2. We are setting up the request method 'open' with two parameters that specify method and endpoint, or what the type of request is and where to send the request to

// 3. Now we can use this request object to send a request to get some data

// XHR states / readyState property

// At the moment we don't know in our code, when the fetch operation is complete and how to access this data. So how do we do all that? In our code we can track the progress of a request using an event listener and a specific event called 'readystatechange'. We attach it to the request object itself. This event fires every time there's a state change in the request that goes through the following states:

// 0 UNSENT
// 1 OPENED
// 2 HEADERS_RECEIVED
// 3 LOADING
// 4 DONE

// Status codes

// When the request is complete, we've got access to the response, but that's not enough, because if there was some kind of error with the request, for example, if I create an endpoint which is not valid, it still goes through the motions, and it will reach state 4, but the responseText will be empty and the status will be 404, which means it cannot find the non-existing resource that we are trying to send our request to. So, we should also check for the status to be 200.

// JSON

// The crux of JSON is a way of transferring data between server and client. JSON format is essentially strings, which look like JS objects. When a browser exchanges data with a server, it has to be done in text format because that is a format of data transfer. So, we need to figure out a way of taking this JSON string we get back and turning it into a real JS object so that we can access all of the properties and values easily. That kind of stuff is much easier, if we have everything nicely packaged into objects in an array. Fortunately, there is a JSON object built into JS that we can use to do this.

// We can also create our own JSON in the separate files with the .json extension

// We wrap up our code inside a function getToDos1 to make it reusable

// Passing through a resource which is a URL to whatever we want to get, and passing in a callback func to getToDos1, we can do something different each time, when we call the parent function

const getToDos1 = (resource, callback) => {
  const request = new XMLHttpRequest(); // 0 UNSENT

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); // converting JSON string into an array of JS objects
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch the data', undefined);
    }
  });

  // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // 1 OPENED
  request.open('GET', resource); // 1 OPENED
  request.send(); // 2 HEADERS_RECEIVED
};

console.log(6);
console.log(7);

// Often times we need to request data from different sources one after the other, sequentially. The idea of waiting until one request is done to go out and do another is quite common, when you are making requests to different APIs. Often you might need to make a request to one API to get some data, and then use that data to make a request to another API, so we have to do them in turn.

// Callback hell

// (err, data) is a conventional order of callback parameters, when we do a network request:
getToDos1('todos/shaun.json', (err, data) => {
  console.log(8, 'Callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  getToDos1('todos/brad.json', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    getToDos1('todos/bucky.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  });
});

console.log(9);
console.log(10);

// This code is starting to look pretty messy. Nesting callback within callback within callback etc is known as a callback hell, and it is hard to maintain and read it. However, sometimes we do need to wait for one lot of data before getting the next. It would be nice, if there was an alternative way to do this in JS, and there is. We can use promises to perform this kind of one request at a time methodology, but in a nicer, more readable way.

// Promises

// The Promise is an object representing a completion or failure of the async operation. It represents an intermediate state. It is essentially the browser's way of saying 'hey, I promise I will get back to you asap'

// A promise is basically something which is gonna take some time to do. It's ultimately gonna lead to one of two outcomes: either it's gonna be resolved meaning we get the data we want, or it's gonna be rejected meaning we get an error at some point. In a promise we automatically get access to 'resolve' and 'reject' parameters inside a callback used to initialize a promise. These two are functions built into the Promise API, we don't make them up.

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('some data');
    // reject('some error');
  });
};

// Invoking a promise:

// 1. 'then' method

// A promise will fire a function getSomething(). If we resolve a promise, it fires the first callback inside the 'then' method, and that callback takes the data that we pass through to the resolve function. We also get a second callback as a second argument inside the 'then' method, and this callback would only fire, if we reject a promise

// So, this is promises in action: we either resolve something or reject something, and then fire one of two functions depending on that.

getSomething().then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);

// 2. 'then' method.'catch' method

// Sometimes, when we are adding two functions as arguments into the 'then' method, it can get a little bit confusing and look a bit messy, and there's a slightly different way we can write this. Instead of a second function for the 'reject' case, we can tack on method 'catch', and what this does is catch an error. Now what happens? When we get a 'resolve', the 'then' method fires, and fires the callback for that 'resolve'. If we get a 'reject' with a rejection or an error instead, it comes to the 'catch' method to catch that error, and then it fires the callback for the 'reject'. 'Catch' method internally calls .then(null, errorHandler). And this syntax looks a bit neater, especially when it comes to chaining promises together

getSomething()
  .then(data => console.log(data))
  .catch(err => console.log(err));

// This is another way, other than using callbacks to work with asynchronous code, and this is really gonna come in handy, when we try to sequentially get data one after another because we are going to be able to chain promises together

const getToDos2 = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error getting resource');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

// Chaining promises

// One of the best things about promises is that we can chain them together, so we can perform one async task after another in order should we need to.

// Each 'then' block is essentially returning another promise, so multiple asynchronous operations are being made to run in order one after the other. In other words, all the async operations or promises are being put into an event queue. This event queue will run after the main thread has finished processing, so they do not block the other javascript code from running.

// When we fire the callback in the first 'then' method, we know that we've already got the first lot of data, and this is a safe position to go out and try to get the next lot of data, and this second lot of data returns a promise. What that means is that the parent, the whole thing now returns a promise. Now we can tack on the 'then' method again to fire the next callback and have the next lot of data etc. If we get an error at some point, the good thing about the 'catch' at the end is that it catches any error, so we don't have to rewrite it for every 'then'

getToDos2('todos/shaun.json')
  .then(data => {
    console.log('Promise 1 resolved:', data);
    return getToDos2('todos/brad.json');
  })
  .then(data => {
    console.log('Promise 2 resolved:', data);
    return getToDos2('todos/bucky.json');
  })
  .then(data => {
    console.log('Promise 3 resolved:', data);
  })
  .catch(err => {
    console.log('Promise rejected:', err);
  });

// The Fetch API

// Many developers still use an XHR object to make HTTP requests, and it's ok, but there's a newer and quicker way to make these requests, using the native Fetch API, which is now built right into JS. This fairly modern addition to the language is gonna require us to write much less code, and it also implements the Promise API under the hood which makes handling success and error cases easy too. It's actually a simplified approach to getting data, which implements all the different moving pieces of how callbacks and promises work with requests

// The native Fetch API is just a function built into the language, and we call it by just saying fetch() and passing in it external or local resource that we want to fetch as an argument. It's gonna return us a promise

// When using fetch(), the promise is only ever rejected, when we get some kind of network error, like we are offline or we can't reach the API for some reason. If we mistype the resource, we don't get the rejection, but instead we get the response with a status of 404.

// To get and parse our JSON data with fetch, we use the 'json' method on the response object. It returns a promise, so we write it with the keyword 'return' to make this promise an overall value and be able to tack on another 'then' method. Inside this 'then' we can actually take the data that we get back from the 'json' method, this returns to us a promise which when resolved gives us the data that we went out to fetch, and now we have access to that data

fetch('todos/shaun.json')
  .then(response => {
    console.log('resolved', response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('rejected', err);
  });

// This way of making network requests for data is easier to write and maintain. These are the steps to remember:

// - first of all, we fetch the data;
// - then, we take the response;
// - after that, we return response.json() that returns a promise, so we can tack on another 'then' inside of which we fire a function where we actually have access to that data;
// - and we catch an error at the end

// With Fetch API we chained a couple of promises together. We got a promise back with fetch(resource), we fired a function, when that promise resolved, then we returned another promise inside and we chained that on, using the 'then' method again. It looks a lot better than callbacks, but when we start to chain a lot of different promises together, then it still can start to look a bit messy

// Async & Await

// Keywords 'async' and 'await' allow us to chain promises together in a clean and readable way. Using this modern JS feature, we can section off all of our asynchronous code into a single 'async' function, and then use the 'await' keyword inside to chain promises together in a more logical way.

const getToDos3 = async () => {
  const response = await fetch('todos/shaun.json');

  // What this does is do this 'fetch', and this returns a promise, and the 'await' keyword stalls JS inside this async function, it stops it from assigning a value to const response until the promise has resolved. Once the promise has resolved, we can take the value from that resolve function, the response object, and assign it to const response.

  console.log(response);

  // Throwing Errors

  // When we throw a new Error inside async function, the promise returned by this async function is rejected, and we are going to catch it in the call of the function

  if (response.status !== 200) {
    throw new Error('Cannot fetch the data');

    // That will be the message property on the error object, and we get this error now instead of the json error, when there's a problem with the resource URL, and that's much better
  }

  // When we get a response object back from using fetch(), we use the 'json' method to get the data back. As far as this method is asynchronous in itself, and it returns a promise in itself, we can use the 'await' keyword to chain on this promise, it stalls JS again until this promise resolves, then we take the value that this promise resolves and assign it to the data variable
  
  const data = await response.json();

  console.log(data);

  // Ultimately what we want to do is return this data, so when we call it, we get access to that data, but we are not directly getting that data, because any function with 'async' keyword in front of it returns a promise

  return data;

  // The power of 'await' keyword' is that if we wanted to, we could chain together many of these different things that return promises, and then we'd be doing them sequentially. We'd be waiting for one promise to resolve, before assigning it to a variable, then another before assigning it another variable, so it does each step in turn, and that's really nice. In a sense, it's blocking code inside async function, because we are waiting until every task is done, but because this whole function is asynchronous and it returns a promise, when we call that, that function in itself is non-blocking, it would let JS carry on with the rest of the code
};

// Whenever we call an async function, it always returns a promise, regardless of what's inside.

const test = getToDos3();

console.log(test);

// Async function is taking some time to do, and at some point it's gonna resolve or reject. So we still need to tack on the 'then' method once to getToDos function, when we call it, because this is returning a promise, and we don't want this to be blocking

getToDos3()
  .then(data => console.log('Resolved:', data))
  .catch(err => console.log('Rejected:', err.message));

// So what have async underway really achieved for us?

// - Firstly, it bundled up all of our async code inside a function, which we can call and use whenever we want.
// - Secondly, it's not gonna block the rest of the code in our application.
// - Thirdly, it gives us a much cleaner and readable way to chain promises together, and the beauty of this is that we could chain as many promises together as we want, maybe to get more data one after another. We just follow the same pattern of using 'await' before each call

// This chapter has been probably a tough one, but I know eventually after some practice this whole idea of asynchronous code and the tools we use for it will sink in.
