interface Cloneable {
   clone(): Cloneable;
 }
 
 class People implements Cloneable {
   constructor(public name: string, public age: number) {}
 
   public clone(): People {
     return new People(this.name, this.age);
   }
 
   public description(): string {
     return `Name: ${this.name}, Age: ${this.age}`;
   }
 }
 
 const originalPeople = new People("Jean", 30);
 const clonedPeople = originalPeople.clone();
 clonedPeople.name = "Malavasi";

 console.log(originalPeople.description());
 console.log(clonedPeople.description());
 