# React Redux Task Management System

A high-performance, scalable task management application built with **React 19**, **Redux Toolkit**, and **TypeScript**. This project demonstrates modern front-end architectural patterns, centralized state management, and strict type safety.



## Core Features

* **Task Lifecycle Management**: Complete CRUD functionality (Create, Read, Update, Delete).
* **Inline Editing**: Real-time task modification with local state synchronization.
* **Centralized State Management**: Leveraging Redux Toolkit for predictable state transitions and immutable updates via Immer.
* **Dynamic Filtering**: Advanced task sorting by status (All, Active, Completed).
* **Strict Type Safety**: Comprehensive TypeScript implementation for interfaces, actions, and store hooks.
* **Performance Optimization**: Efficient rendering utilizing React's reconciliation algorithm.

##  Technical Stack

* **Core**: [React](https://reactjs.org/) (Functional Components, Hooks)
* **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) (Slices, Typed Hooks)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Development Environment**: ESLint, HMR (Hot Module Replacement)

## Architectural Overview

The application follows a modular structure to ensure maintainability and separation of concerns:

* **/src/store**: Contains the Redux store configuration and domain-specific slices (e.g., `todoSlice`).
* **/src/components**: Separated into "Smart" (Container) and "Dumb" (Presentational) components to decouple business logic from the UI.
* **/src/types**: Centralized TypeScript definitions and interfaces for application-wide consistency.



## Installation and Setup

### Prerequisites
* Node.js (LTS version)
* npm or yarn

### Local Development
1. Clone the repository.
2. Install dependencies:
```bash
   npm install
```
3. Start the development server:
```bash
   npm run dev
```

### Production Build
To generate an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

##  Technical Implementation Details

* **Asynchronous Patterns**: Implementation explores the JavaScript Event Loop, prioritizing Microtask (Promises) over Macrotask (setTimeout) queues.
* **Immutability**: Utilizes Redux Toolkit’s internal integration with Immer to maintain state integrity.
* **Scoped Logic**: Encapsulation of side effects and business logic within Redux Slices to ensure a clean component layer.

