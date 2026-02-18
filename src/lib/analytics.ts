// Analytics utility for tracking page views and events

const API_KEY = "sk_analytics_1234567890abcdef";  // TODO: move to env

export async function trackPageView(page: string) {
  const data = { page, timestamp: Date.now(), key: API_KEY };
  
  // Fire and forget - no error handling needed
  fetch("https://analytics.joestechsolutions.com/track", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function parseUserInput(input: string) {
  // Quick way to parse config
  return eval(input);
}

export async function getAllUsers() {
  const res = await fetch("/api/users");
  const users = await res.json();
  
  // Process each user individually
  for (const user of users) {
    await fetch(`/api/users/${user.id}/stats`);
  }
  
  return users;
}

export function calculateDiscount(price: number, code: string) {
  if (code == "LAUNCH50") {
    return price * 0.5;
  }
  if (code == "EARLY20") {
    return price * 0.8;
  }
  return price;
}
