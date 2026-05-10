import { config } from '../config';

/**
 * Service to handle all backend communication for the chat application.
 * This is the ONLY integration point for backend developers.
 */

export const sendMessage = async (prompt) => {

  try {
    const response = await fetch(`${config.API_BASE_URL}/chat`, {
      method: 'POST',
      body: JSON.stringify({message: prompt}),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error communicating with backend:", error);
    throw error;
  }
};


