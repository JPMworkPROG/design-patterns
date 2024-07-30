interface IMonster {
   name: string;
}

interface IWeak {
   name: string;
}

class Werewolf implements IMonster {
   name = "werewolf";
}

class Metamorph implements IMonster {
   name = "metamorph";
}

class Vampire implements IMonster {
   name = "vampire";
}

class Silver implements IWeak {
   name = "silver";
}

class Decapitation implements IWeak {
   name = "decapitation";
}

abstract class MonsterAbstractFactory {
   static create(monster: "werewolf" | "metamorph" | "vampire"): { monster: IMonster, weak: IWeak } {
      switch (monster) {
         case "werewolf":
            return { monster: new Werewolf(), weak: new Silver() };
         case "metamorph":
            return { monster: new Metamorph(), weak: new Silver() };
         case "vampire":
            return { monster: new Vampire(), weak: new Decapitation() };
         default:
            throw new Error("Invalid monster category.")
      }
   }
}

const { monster: werewolf, weak: werewolfWeak } = MonsterAbstractFactory.create("werewolf");
const { monster: metamorph, weak: metamorphWeak } = MonsterAbstractFactory.create("metamorph");
const { monster: vampire, weak: vampireWeak } = MonsterAbstractFactory.create("vampire");

console.log(werewolf.name);
console.log(werewolfWeak.name);

console.log(metamorph.name);
console.log(metamorphWeak.name);

console.log(vampire.name);
console.log(vampireWeak.name);

export { }