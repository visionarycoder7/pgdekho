/**
 * ============================================================================
 * PG DEKHO - API SERVICE LAYER (PLACEHOLDER)
 * ============================================================================
 * 
 * This file serves as the centralized communication bridge between the 
 * React frontend and your future backend server (e.g. Node.js/Express, Python/FastAPI, Go, Firebase, or Supabase).
 * 
 * How it works:
 * 1. Currently, all functions simulate network delays using setTimeout and return mock responses.
 * 2. When you build your real backend, you will replace the mock logic with real `fetch()` or `axios` calls.
 * 3. Keep all API endpoint URLs and token headers here so your UI components remain clean.
 */

// Base URL for the future REST / GraphQL API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.pgdekho.com/v1';

/**
 * 1. WAITLIST SUBMISSION
 * Future Endpoint: POST /api/v1/waitlist
 * Payload: { email: string, userType: 'renter' | 'owner', city: string }
 */
export async function submitWaitlist({ email, userType = 'renter', city = 'Bengaluru' }) {
  // Simulate network latency (500ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  // In local development / preview mode, we simulate a successful 200 OK response.
  // When your backend is ready, uncomment the real fetch logic below:
  /*
  const response = await fetch(`${API_BASE_URL}/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, userType, city, timestamp: new Date().toISOString() })
  });
  if (!response.ok) throw new Error('Failed to join waitlist. Please try again.');
  return await response.json();
  */

  // Mock successful response
  return {
    success: true,
    message: "You're on the list! We'll keep you posted with early access.",
    data: {
      email,
      userType,
      city,
      queuePosition: Math.floor(800 + Math.random() * 200),
      joinedAt: new Date().toISOString()
    }
  };
}

/**
 * 2. GET PROPERTIES LISTINGS (FUTURE FEATURE)
 * Future Endpoint: GET /api/v1/properties?city=Bengaluru&type=pg&budget=12000
 */
export async function getProperties(filters = {}) {
  // TODO: Connect to backend API
  // Example: const query = new URLSearchParams(filters).toString();
  // const res = await fetch(`${API_BASE_URL}/properties?${query}`);
  // return await res.json();
  return {
    status: 'coming_soon',
    message: 'Property listings API is in active development on the backend roadmap.',
    results: []
  };
}

/**
 * 3. GET SINGLE PROPERTY DETAILS (FUTURE FEATURE)
 * Future Endpoint: GET /api/v1/properties/:id
 */
export async function getPropertyById(propertyId) {
  // TODO: Connect to backend API
  // const res = await fetch(`${API_BASE_URL}/properties/${propertyId}`);
  // return await res.json();
  return {
    status: 'coming_soon',
    propertyId,
    details: null
  };
}

/**
 * 4. OWNER PROPERTY REGISTRATION (FUTURE FEATURE)
 * Future Endpoint: POST /api/v1/owner/properties
 */
export async function registerOwnerProperty(propertyData) {
  // TODO: Connect to owner onboarding endpoint
  // const res = await fetch(`${API_BASE_URL}/owner/properties`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(propertyData)
  // });
  // return await res.json();
  return {
    status: 'coming_soon',
    message: 'Owner listing portal is launching in Phase 2.'
  };
}

/**
 * 5. USER AUTHENTICATION (FUTURE FEATURE)
 * Future Endpoint: POST /api/v1/auth/login or POST /api/v1/auth/otp-verify
 */
export async function loginUser(credentials) {
  // TODO: Integrate Firebase Auth, Supabase, or custom JWT Auth
  return {
    status: 'coming_soon',
    message: 'Authentication module planned for private beta release.'
  };
}
