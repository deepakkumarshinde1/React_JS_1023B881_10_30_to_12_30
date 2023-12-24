// class collection methods

// methods
// function

// global object ---> window

class MyClass {
  username = "deepakkumar";

  constructor(options) {
    this.options = options;
  }

  printData() {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  }

  static config(option) {
    let default_option = {
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    };

    if (option.length === 0) {
      return new MyClass(default_option);
    } else {
      return new MyClass(option);
    }
  }
}

let myClass = MyClass.config({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

let myClass2 = new MyClass({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

myClass.printData();

MyClass.con;
// MyClass() --> Constructor

let date = new Date();

date.getTime();

Date.now(); // static method of Date

// handel exception
// complex opt not logic

// Promise

// async

async function getData() {
  try {
    // GET , PUT , POST  , DELETE
    let url = `https://fakestoreapi.com/products`;
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
}

getData();
