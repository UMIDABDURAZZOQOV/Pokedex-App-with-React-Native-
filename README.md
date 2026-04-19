# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# Pokedex Mobile App 🐉

A sleek, interactive Pokedex application built with **React Native** and **Expo**. This app fetches real-time data from the PokeAPI to display a beautiful list of Pokemon with dynamic styling based on their types.

---

## 📸 Screenshots

<p align="center">
  <img src="./assets/screenshots/home.png" width="300" title="Home Screen" alt="Home Screen">
  <img src="./assets/screenshots/details.png" width="300" title="Pokemon Details" alt="Pokemon Details">
</p>

---

## ✨ Key Features

* **Dynamic Theming:** Card backgrounds change automatically based on the Pokemon's primary type (e.g., Fire is Orange, Water is Blue).
* **High-Quality Visuals:** Uses high-resolution "Official Artwork" from the PokeAPI database.
* **Smooth Interactions:** Includes haptic-like scaling effects when pressing cards for a better user experience.
* **Native Navigation:** Powered by **Expo Router** using a file-based routing system.
* **Responsive UI:** Features an iOS-style adaptive Bottom Sheet for viewing Pokemon details.

---

## 🛠️ Tech Stack

* **Framework:** [React Native](https://reactnative.dev/)
* **Platform:** [Expo](https://expo.dev/) (SDK 50+)
* **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/)
* **Language:** [TypeScript,JavaScript](https://www.typescriptlang.org/)
* **API:** [PokeAPI](https://pokeapi.co/)

---

## ⚙️ Installation & Usage

Follow these steps to get the project running locally:

1.  **Clone the repository**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npx expo start
    ```
4.  **Open the app:**
    Scan the QR code with your **Expo Go** app (Android/iOS) or run it on an emulator.

---

## 📂 Project Structure

* `app/` - Contains all screen components and layouts.
* `assets/` - Project images, fonts, and screenshots.
* `constants/` - Color palettes and API configurations.
* `components/` - Reusable UI elements like interactive buttons and badges.
