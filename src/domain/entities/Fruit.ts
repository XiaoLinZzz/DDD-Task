import { fruitEventEmitter } from "../events/FruitDomainEventEmitter";
import { Description } from "../valueObjects/Description";

export class Fruit {
    constructor(
      public id: string,
      public name: string,
      public description: Description,
      public limit: number,
      public amount: number = 0
    ) {}
  
    add(amount: number): void {
      this.amount += amount;
    }
    
    remove(amount: number): void {
      if (this.amount - amount < 0) {
        throw new Error("Exceeds limit");
      }
      this.amount -= amount;
    }
    
    getDescription(): string {
      return this.description.getValue();
    }

    update(description: string, limit: number): void {
      this.description = new Description(description);
      this.limit = limit;
    }

    store(amount: number): void {
      if (this.amount + amount > this.limit) {
        throw new Error("Exceeds limit");
      }
      this.amount += amount;
    }

    emitCreatedEvent(): void {
      fruitEventEmitter.emit("fruitCreated", this);
    }

    emitUpdatedEvent(): void {
      fruitEventEmitter.emit("fruitUpdated", this);
    }

    emitDeletedEvent(): void {
      fruitEventEmitter.emit("fruitDeleted", this);
    }
}
  