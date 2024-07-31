class House {
   private bedroom: number;
   private bathroom: number;
 
   constructor(builder: HouseBuilder) {
     this.bedroom = builder.bedroom;
     this.bathroom = builder.bathroom;
   }
 
   public description(): string {
     return `House with ${this.bedroom} bedrooms and ${this.bathroom} bathrooms.`;
   }
 }
 
 class HouseBuilder {
   public bedroom: number = 0;
   public bathroom: number = 0;
 
   public setBedroom(bedroom: number): HouseBuilder {
     this.bedroom = bedroom;
     return this;
   }
 
   public setBathroom(bathroom: number): HouseBuilder {
     this.bathroom = bathroom;
     return this;
   }
 
   public build(): House {
     return new House(this);
   }
 }
 
 const house = new HouseBuilder()
   .setBedroom(3)
   .setBathroom(2)
   .build();
 
 console.log(house.description());
 