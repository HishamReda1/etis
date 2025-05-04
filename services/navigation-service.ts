import type { PageType } from "@/types"

class NavigationService {
  private validPages: PageType[] = [
    "home",
    "about",
    "partners",
    "clients",
    "projects",
    "contact",
    "achievements",
    
  ]

  navigateToPage(page: string): PageType {
    const normalizedPage = this.stripHash(page)

    if (this.isValidPageType(normalizedPage)) {
      const validPage = normalizedPage as PageType
      this.setHash(validPage)
      return validPage
    }

    this.setHash("home")
    return "home"
  }

  isValidPageType(page: string): boolean {
    return this.validPages.includes(page as PageType)
  }

  getHashedPage(page: PageType): string {
    return `#${page}`
  }

  stripHash(page: string): string {
    return page.startsWith("#") ? page.slice(1) : page
  }

  setHash(page: PageType): void {
    window.location.hash = this.getHashedPage(page)
  }

  getIconForNavItem(name: string): string {
    switch (name.toLowerCase()) {
      case "home":
        return "home"
      case "about":
        return "info"
      case "partners":
        return "users"
      case "clients":
        return "store"
      case "achievements":
        return "award"
      case "contact":
        return "mail"
      default:
        return "info"
    }
  }
}

export const navigationService = new NavigationService()
