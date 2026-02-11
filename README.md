# Todo Mobile App

A simple, clean, and portfolio-ready Todo application built with React Native and Expo. This app allows users to efficiently manage their tasks, featuring task creation, completion toggling, and deletion, with data persistence across app launches.

## Features

*   **Add New Tasks**: Easily add new todo items via an intuitive input field.
*   **Toggle Completion**: Mark tasks as complete or incomplete with a single tap. Completed tasks are visually distinguished (strikethrough text).
*   **Delete Tasks**: Remove unwanted tasks with a confirmation prompt.
*   **Data Persistence**: All tasks are saved locally on the device using `AsyncStorage`, ensuring your todo list remains intact even after closing the app.
*   **Clean UI/UX**: A minimalist and modern design using `@expo/vector-icons` for clear visual cues.
*   **TypeScript**: Developed with TypeScript for better code quality, maintainability, and fewer runtime errors.

## Technologies Used

*   **React Native**: For building native mobile applications using JavaScript/TypeScript.
*   **Expo**: A framework and platform for universal React applications, simplifying development and deployment.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **`@react-native-async-storage/async-storage`**: For persistent key-value storage.
*   **`uuid`**: For generating unique IDs for todo items.
*   **`@expo/vector-icons`**: For a wide range of customizable vector icons.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn (npm is used in this guide)
*   Expo Go app on your iOS or Android device (download from App Store or Google Play)

### Installation

1.  **Clone the repository (if applicable, though for this context you've been given the files):**
    ```bash
git clone <repository-url>
cd todo-mobile-app
    ```

2.  **Install dependencies:**
    ```bash
npm install
    ```

### Running the Application

1.  **Start the Expo development server:**
    ```bash
npm start
    ```
    This will open a new tab in your web browser with the Expo Developer Tools.

2.  **Open on your device:**
    *   **iOS**: Open the **Expo Go** app on your iPhone and scan the QR code displayed in your terminal or the web browser.
    *   **Android**: Open the **Expo Go** app on your Android device and scan the QR code. You might also be able to tap "Run on Android device/emulator" from the web interface.

The app should load on your device within Expo Go.

## Project Structure

```
.
├── App.tsx             # Main application entry point
├── app.json            # Expo configuration file
├── babel.config.js     # Babel configuration
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── src/
    ├── components/
    │   ├── TodoInput.tsx   # Component for adding new tasks
    │   └── TodoItem.tsx    # Component for displaying individual tasks
    ├── screens/
    │   └── HomeScreen.tsx  # Main screen managing todo logic and state
    └── types/
        └── index.ts        # TypeScript type definitions (e.g., for Todo)
```