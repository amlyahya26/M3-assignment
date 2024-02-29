function translateHelloWorld(languageCode) {
switch (languageCode) {
case "es":
return "Hola Mundo";
case "de":
return "Hallo Welt";
case "fr":
return "Bonjour le monde";
default:
return "Hello World";
}
}
// Prompt the user for a language code
const userLanguageCode = prompt("Enter a language code (es, de, en, or fr):");

// Get the translated version
const translatedHelloWorld = translateHelloWorld(userLanguageCode);

// Display the result
console.log(`Hello World translated in ${userLanguageCode} is: ${translatedHelloWorld}`);
