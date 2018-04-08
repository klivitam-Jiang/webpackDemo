class Animal {
	can () {
		console.log("呼吸");
	}
}

// 类继承，es5要用call，apply来弄 麻烦
class Dog extends Animal {

}

let animal = new Dog;
animal.can()