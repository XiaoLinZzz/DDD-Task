# Fruit Storage System Demo

This repo is about a demo of backend application using DDD (Domain Driven Design) approach.

## To-do list
### Project Setup

- [x] Set up a new Node.js project with TypeScript, Mongoose, Jest, and Nexus.
- [x] Configure linters, precommit hooks, and other development tools.

### Domain Design

- [x] Design the project folder structure following Domain Driven Design principles.
- [x] Create the Fruit domain model, including Value Objects for name and description.
- [x] Implement a Fruit Factory to create new Fruit instances.
- [x] Implement a Fruit Repository to manage storage and retrieval of fruits.

### Mappers & Services

- [x] Implement mappers to convert between database objects and domain objects.
- [x] Develop Domain Services to handle unique fruit name checks and other business logic.

### GraphQL

- [x] Set up the GraphQL schema generation using Nexus.
- [x] Implement the GraphQL mutations and queries with appropriate input validation.

### Domain Events

- [x] Create a mechanism to emit domain events with guaranteed at least once delivery.

### Testing

- [ ] Write acceptance tests for the mutations and query as described in the task.
- [ ] Implement any additional unit or integration tests to ensure code quality.

### Code Review & Optimization

- [ ] Review the code and optimize for readability, maintainability, and performance.
- [ ] Document any assumptions made, decisions taken, and the project setup.





## Structure
The structure of the project is as follows:

```css
src/
├── server.ts 
├── domain/
│   ├── entities/
│   │   └── Fruit.ts
│   ├── valueObjects/
│   │   └── Description.ts
│   ├── factories/
│   │   └── FruitFactory.ts
│   ├── repositories/
│   │   └── FruitRepository.ts
│   ├── services/
|   |   ├── FruitStorageService.ts 
│   │   └── UniqueFruitNameService.ts
│   └── events/
│       └── FruitDomainEventEmitter.ts
|
├── graphql/
│   ├── types/
│   │   ├── FruitType.ts 
│   │   ├── storeFruitToFruitStorage.ts 
│   │   ├── removeFruitFromFruitStorage.ts 
│   │   ├── createFruitForFruitStorage.ts 
│   │   ├── updateFruitForFruitStorage.ts 
│   │   ├── deleteFruitFromFruitStorage.ts 
│   │   ├── findFruit.ts 
│   │   └── index.ts 
│   ├── context.ts 
│   └── schema.ts 
|
└── infrastructure/
    ├── database/
    │   └── mongoose/
    │       ├── models/
    │       │   └── FruitModel.ts
    │       └── repositories/
    │           └── MongooseFruitRepository.ts
    └── mappers/
        └── FruitMapper.ts
```

### Details
1. `src/`: The root folder of the source code.
2. `domain/`: This folder contains the domain layer of the application, which represents the core business logic.
    - `entities/`: Contains the entity classes, like `Fruit.ts`, which define the main building blocks of the domain model.
    - `valueObjects/`: Contains value objects, like `Description.ts`, which are immutable and represent specific aspects of the domain model.
    - `factories/`: Contains factory classes, like `FruitFactory.ts`, which are responsible for creating instances of entities or value objects.
    - `repositories/`: Contains repository interfaces, like `FruitRepository.ts`, which define the contracts for data access and storage.
    - `services/`: Contains domain services, like `UniqueFruitNameService.ts`, which encapsulate domain logic that doesn't fit within a specific entity or value object.
    - `events/`: Contains domain event-related classes, like `FruitDomainEventEmitter.ts`, which handle and manage events generated by the domain layer.
3. `graphql/`: This folder contains the GraphQL-related code.
    - `context.ts`: Contains the GraphQL context setup, which is responsible for setting up and managing the context passed to resolvers.
    - `schema.ts`: Contains the GraphQL schema definition, including type definitions, queries, and mutations.
4. `infrastructure/`: This folder contains the infrastructure layer of the application, which deals with external concerns like data storage and communication.
    - `database/`: Contains the database-related code.
        - `mongoose/`: Contains the Mongoose-specific code for the application.
            - `models/`: Contains the Mongoose schema and model definitions, like `FruitModel.ts`.
            - `repositories/`: Contains the Mongoose-based repository implementations, like `MongooseFruitRepository.ts`, which handle data access and storage using Mongoose.
    - `mappers/`: Contains the mapper classes, like `FruitMapper.ts`, which handle the conversion of domain objects to database models and vice versa.


### Why this structure?
This structure helps to maintain a **clean** architecture, where the domain layer is separated from external concerns, like data access and APIs. This makes the code **more maintainable**, **testable**, and **easier to understand**, as each part of the system has a clearly defined purpose.


## Code Quality
The code quality is maintained using the following tools:
1. [ESLint](https://eslint.org/): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
2. [Prettier](https://prettier.io/): An opinionated code formatter.
