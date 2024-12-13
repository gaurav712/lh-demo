import {createContext} from 'react';

// Define the context interface
interface SidebarContextType {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

// Create the context
export const SidebarContext = createContext<SidebarContextType>({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});
