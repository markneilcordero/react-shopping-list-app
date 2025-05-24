// utils/itemHelpers.js

/**
 * Apply filtering and sorting to the item list.
 * 
 * @param {Array} items - The full list of shopping items
 * @param {string} filter - One of: 'All', 'Purchased', 'Pending'
 * @param {string} sort - One of: 'date', 'name', 'purchased'
 * @returns {Array} - Filtered and sorted list
 */
export function applyFiltersAndSort(items, filter = "All", sort = "date") {
  let filtered = [...items];

  // Filter logic
  if (filter === "Purchased") {
    filtered = filtered.filter((item) => item.purchased);
  } else if (filter === "Pending") {
    filtered = filtered.filter((item) => !item.purchased);
  }

  // Sort logic
  switch (sort) {
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "purchased":
      filtered.sort((a, b) => a.purchased - b.purchased); // Pending first
      break;
    case "date":
    default:
      // Assuming newer items are later in array (default order)
      break;
  }

  return filtered;
}
