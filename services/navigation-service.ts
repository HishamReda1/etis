import type { NavigationLink } from "@/types";


export const navigationService = {
  navigateToPage: (page: string): NavigationLink => {
    switch (page.toLowerCase()) {
      case 'home':
        return { label: 'Home', href: '/home', ariaLabel: 'Home', onClick: () => {}, isActive: false };
      case 'about':
        return { label: 'About', href: '/about', ariaLabel: 'About', onClick: () => {}, isActive: false };
      case 'achievements':
        return { label: 'Achievements', href: '/achievements', ariaLabel: 'Achievements', onClick: () => {}, isActive: false };
      case 'clients':
        return { label: 'Clients', href: '/clients', ariaLabel: 'Clients', onClick: () => {}, isActive: false };
      case 'contact':
        return { label: 'Contact', href: '/contact', ariaLabel: 'Contact', onClick: () => {}, isActive: false };
      case 'projects':
        return { label: 'Projects', href: '/projects', ariaLabel: 'Projects', onClick: () => {}, isActive: false };
      case 'products':
        return { label: 'Products', href: '/products', ariaLabel: 'Products', onClick: () => {}, isActive: false };
      case 'partners':
        return { label: 'Partners', href: '/partners', ariaLabel: 'Partners', onClick: () => {}, isActive: false };
      default:
        return { label: 'Home', href: '/home', ariaLabel: 'Home', onClick: () => {}, isActive: false };
    }
  }
};
