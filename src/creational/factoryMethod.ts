interface IFood {
   name: string
}

class FastFood implements IFood {
   name: string = "Fast Food";
}

class GourmetFood implements IFood {
   name: string = "Gourmet Food";
}

abstract class FoodFactory {
   static create(foodCategory: "fastfood" | "gourmetfood"): IFood {
      switch (foodCategory) {
         case "fastfood":
            return new FastFood();
         case "gourmetfood":
            return new GourmetFood();
         default:
            throw new Error("Invalid food category.")
      }
   }
}

const foodA = FoodFactory.create("fastfood");
const foodB = FoodFactory.create("gourmetfood");

console.log(foodA.name);
console.log(foodB.name);

export {}