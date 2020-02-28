//1
function range(x, y) {
    var RangeN = [];
    while (x <= y) RangeN.push(x++);

    return RangeN;
}

function sum(ran) {
    var SumN = 0;
    for (var i of ran) console.log((SumN += i));

    return SumN;
}
console.log(sum(range(1, 10)));


// 3

function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
  };
  Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
  };
  Vector.prototype.toString = function toString() {
    return 'Vector { x: ' + this.x + ', y: ' + this.y + ' }';
  }
  
  console.log(new Vector(1, 2).plus(new Vector(2, 3)));

// 5 

const Product = function (name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
};
const Client = function (name, lastname, sum) {
    this.name = name;
    this.lastname = lastname;
    this.sum = sum;
};
const History = function (time, nameProduct, tipe, amount, allSum) {
    this.time = time;
    this.nameProduct = nameProduct;
    this.tipe = tipe;
    this.amount = amount;
    this.allSum = allSum;
};
const Shop = function () {
    this.client = [];
    this.product = [];
    this.history = [];

    this.addProduct = (item, count = 1) => {
        for (let i = 1; i <= count; i++) {
            this.product.push(item);
        }
    }
    this.addClient = (item) => {
        this.client.push(item);
    }

    this.deleteProduct = (item, count = 1) => {
        this.product.splice(this.product.indexOf(item), count);
    }

}
  
  
var product1 = new Product('мыло', 'жидкое', 60);
product1.addProduct('мыло','жидкое', 40);
console.log(product1.constructor.name)