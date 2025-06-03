// Hydration debugging utility
export const HydrationDebug = {
  isClient: typeof window !== 'undefined',
  
  log: (component: string, message: string, data?: any) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log(`[Hydration Debug] ${component}: ${message}`, data || '');
    }
  },

  warn: (component: string, message: string, data?: any) => {
    if (typeof window !== 'undefined') {
      console.warn(`[Hydration Warning] ${component}: ${message}`, data || '');
    }
  },

  checkHydrationMismatch: (componentName: string, serverValue: any, clientValue: any) => {
    if (typeof window !== 'undefined' && serverValue !== clientValue) {
      console.error(`[Hydration Mismatch] ${componentName}:`, {
        server: serverValue,
        client: clientValue
      });
    }
  },

  // Safe date formatting that won't cause hydration issues
  formatDate: (date: string | Date, options?: Intl.DateTimeFormatOptions) => {
    // Use the same formatting for both server and client
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    };
    
    // Create date with UTC to ensure consistency
    const utcDate = new Date(date + 'T00:00:00.000Z');
    return utcDate.toLocaleDateString('en-US', options || defaultOptions);
  },

  // Safe year getter
  getCurrentYear: () => {
    if (typeof window === 'undefined') {
      return '2025'; // Fallback year for SSR
    }
    return new Date().getFullYear().toString();
  }
};
