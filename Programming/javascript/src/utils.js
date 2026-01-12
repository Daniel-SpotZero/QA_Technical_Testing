/**
 * Utility Functions to Test
 * 
 * Your task: Write comprehensive tests for these functions (10 minutes)
 * Focus: Test happy path + edge cases + error handling
 * 
 * Instructions:
 * - Find and document any bugs you discover
 * - Write tests that expose these bugs
 * - Test boundary conditions and invalid inputs
 */

// String utilities
export function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str, maxLength) {
  if (typeof str !== 'string') return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

export function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Array utilities
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

export function findMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

export function average(arr) {
  return sum(arr) / arr.length;
}

// Object utilities
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Async utilities
export async function fetchWithRetry(url, maxRetries = 3) {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

export function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
