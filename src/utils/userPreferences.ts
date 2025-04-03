
// Utility functions for handling user preferences

// Keys for localStorage
const PREFERENCES_KEY = 'stratifiedUserPreferences';

// Default preferences
const defaultPreferences = {
  theme: 'light',
  notifications: true,
  chatEnabled: true,
  autoSaveResponses: true,
  lastVisit: new Date().toISOString(),
};

// Get all user preferences
export const getUserPreferences = () => {
  try {
    const storedPreferences = localStorage.getItem(PREFERENCES_KEY);
    if (!storedPreferences) {
      // Initialize with defaults if no preferences exist
      localStorage.setItem(PREFERENCES_KEY, JSON.stringify(defaultPreferences));
      return defaultPreferences;
    }
    return JSON.parse(storedPreferences);
  } catch (error) {
    console.error('Error retrieving user preferences:', error);
    return defaultPreferences;
  }
};

// Update a specific preference
export const updatePreference = (key: string, value: any) => {
  try {
    const currentPreferences = getUserPreferences();
    const updatedPreferences = {
      ...currentPreferences,
      [key]: value,
    };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updatedPreferences));
    return updatedPreferences;
  } catch (error) {
    console.error('Error updating user preference:', error);
    return null;
  }
};

// Update the last visit timestamp
export const updateLastVisit = () => {
  try {
    const currentPreferences = getUserPreferences();
    const updatedPreferences = {
      ...currentPreferences,
      lastVisit: new Date().toISOString(),
    };
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updatedPreferences));
    return updatedPreferences;
  } catch (error) {
    console.error('Error updating last visit:', error);
    return null;
  }
};

// Clear all user preferences
export const clearPreferences = () => {
  try {
    localStorage.removeItem(PREFERENCES_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing user preferences:', error);
    return false;
  }
};
