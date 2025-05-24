// utils/commandInterpreter.js
import { getLocalData, saveLocalData } from "./localStorageHelpers";
import { generateId } from "./uuidGenerator";

const STORAGE_KEY = "shopping-list-app-data";

/**
 * Handle rule-based chat commands and return assistant response.
 * @param {string} input - Raw user input
 * @returns {string} Assistant response
 */
export function handleCommand(input) {
  const lower = input.toLowerCase();

  // Add item: "add milk"
  if (lower.startsWith("add ")) {
    const itemName = input.slice(4).trim();
    if (!itemName) return "Please specify an item to add.";

    const items = getLocalData(STORAGE_KEY, []);
    items.push({
      id: generateId(),
      name: itemName,
      purchased: false,
    });
    saveLocalData(STORAGE_KEY, items);
    return `✅ Added "${itemName}" to your shopping list.`;
  }

  // Mark as purchased: "mark milk as purchased"
  if (lower.startsWith("mark ") && lower.includes(" as purchased")) {
    const itemName = input.slice(5, lower.indexOf(" as purchased")).trim();
    const items = getLocalData(STORAGE_KEY, []);
    const index = items.findIndex(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );
    if (index === -1) return `❌ Item "${itemName}" not found.`;
    items[index].purchased = true;
    saveLocalData(STORAGE_KEY, items);
    return `🛒 Marked "${itemName}" as purchased.`;
  }

  // List all items
  if (lower === "list all items") {
    const items = getLocalData(STORAGE_KEY, []);
    if (!items.length) return "📝 Your shopping list is empty.";
    return items
      .map((item) => `- ${item.name} ${item.purchased ? "✅" : ""}`)
      .join("\n");
  }

  // Show purchased items
  if (lower === "show purchased items") {
    const items = getLocalData(STORAGE_KEY, []);
    const purchased = items.filter((item) => item.purchased);
    if (!purchased.length) return "No items have been marked as purchased yet.";
    return purchased.map((item) => `- ${item.name} ✅`).join("\n");
  }

  return "🤖 Sorry, I didn’t understand that command.";
}
