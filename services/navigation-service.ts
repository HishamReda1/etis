import type { PageType } from "@/types";

export const navigationService = {
  // دالة للتنقل إلى صفحة معينة
  navigateToPage: (page: string): PageType => {
    // هنا نقوم بإرجاع الصفحة المطلوبة بناءً على اسم الصفحة
    // يجب أن يكون page من النوع PageType
    switch (page.toLowerCase()) {
      case "home":
        return "home";
      case "about":
        return "about";
      case "partners":
        return "partners";
      case "achievements":
        return "achievements";
      case "clients":
        return "clients";
      case "contact":
        return "contact";
      case "projects":
        return "projects";
      case "team":
        return "team";
      case "products":
        return "products";
        case "blog":
          return "blog";
      default:
        return "home"; // القيمة الافتراضية في حالة لم يتوافق الاسم مع أي صفحة
    }
  },
};