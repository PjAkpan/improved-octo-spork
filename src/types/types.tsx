export interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
  }

export interface MenuSection {
    title: string;
    items: MenuItem[];
  }