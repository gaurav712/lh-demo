import {createContext} from 'react';

interface NavigationContextType {
  activeScreenName: string;
  setActiveScreenName: (screenName: string) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeScreenName: 'Explore',
  setActiveScreenName: () => {},
});
