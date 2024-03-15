// Sample function to interact with an API
async function fetchIngredientData(ingredient) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.walmart.com/search?query=${encodeURIComponent(ingredient)}&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET', // Most APIs will use GET for data retrieval
        headers: {
          'Content-Type': 'application/json',
          // Add other necessary headers
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Parse and return the data
    } catch (error) {
      console.error('Failed to fetch data from API:', error);
      return null; // Handle errors appropriately
    }
  }
  
console.log('Hello, ME!');

console.log('cheese is good');