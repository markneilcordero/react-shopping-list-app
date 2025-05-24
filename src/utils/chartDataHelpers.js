// utils/chartDataHelpers.js

/**
 * Processes shopping list items to extract datasets for dashboard charts.
 * 
 * @param {Array} items - Shopping list items
 * @returns {Object} - Datasets for all chart types
 */
export function prepareChartData(items) {
  const statusData = { purchased: 0, pending: 0 };
  const categoryData = {};
  const priorityData = { Low: 0, Medium: 0, High: 0 };
  const historyData = {};

  items.forEach((item) => {
    // Purchased / Pending count
    if (item.purchased) {
      statusData.purchased++;
    } else {
      statusData.pending++;
    }

    // Category count
    if (item.category) {
      const cat = item.category.trim();
      categoryData[cat] = (categoryData[cat] || 0) + 1;
    }

    // Priority count
    if (item.priority && priorityData[item.priority] !== undefined) {
      priorityData[item.priority]++;
    }

    // Date-based history (format: YYYY-MM-DD)
    if (item.createdAt) {
      const date = item.createdAt.slice(0, 10); // e.g., '2025-05-24'
      historyData[date] = (historyData[date] || 0) + 1;
    }
  });

  return {
    statusData,
    categoryData,
    priorityData,
    historyData,
  };
}
