// define ชื่อ class
class Person{

	// การ define properties
	name:string;
	age:number;

	// การ define constructor
	// constructor จะทำงานเมื่อมีการประกาศ instance
	constructor(name:string,age:number){

		// การ assign ค่า ลง ใน properties
		this.name = name;
		this.age = age;
	}

	// การประกาศ method โดย ระบุ เป็น void คือการไม่ส่งค่ากลับ
	displayInfo():void{
		// แสดงค่า ใน properties
		console.info(`name : ${this.name} age : ${this.age}`);
	}
	// method สำหรับการ change ค่าใน properties
	updateInfo(newName:string, newAge:number):void{
		this.name = newName
		this.age = newAge

	}
}
// การประกาศ instance
// instace คือ ตัวแปล ที่ assgin class ลงในตัวแปล
const person1 = new Person("kaw",24);

// การเรียกใช้ method ใน instace
person1.displayInfo();

// เรียกใช้ method ใน instace เพื่อ update ค่า properties ใหม่
person1.updateInfo("kawZaza",20)

// เรียกแสดงผลค่าใน instace ใหม่อีกครั้ง
person1.displayInfo();

