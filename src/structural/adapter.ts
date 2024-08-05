interface CelsiusTemperature {
   getTemperatureCelsius(): number;
}

class CelsiusThermometer implements CelsiusTemperature {
   private temperature: number;

   constructor(temperature: number) {
      this.temperature = temperature;
   }

   public getTemperatureCelsius(): number {
      return this.temperature;
   }
}

class FahrenheitSensor {
   private temperature: number;

   constructor(temperature: number) {
      this.temperature = temperature;
   }

   public getTemperatureFahrenheit(): number {
      return this.temperature;
   }
}

class FahrenheitToCelsiusAdapter implements CelsiusTemperature {
   private fahrenheitSensor: FahrenheitSensor;

   constructor(fahrenheitSensor: FahrenheitSensor) {
      this.fahrenheitSensor = fahrenheitSensor;
   }

   public getTemperatureCelsius(): number {
      const fahrenheit = this.fahrenheitSensor.getTemperatureFahrenheit();
      return (fahrenheit - 32) * 5 / 9;
   }
}

const fahrenheitSensor = new FahrenheitSensor(100);
const adapter = new FahrenheitToCelsiusAdapter(fahrenheitSensor);

console.log(`Temperature in celsius is: ${adapter.getTemperatureCelsius()}`);