interface Restaurant {
    id: number;
    name: string;
    image: string;
    description?: string;
    currency: Currency;
    menus: Menu[];
}

interface Menu {
    id: number;
    name: string;
    description?: string;
    type: MenuType;
    from?: Date;
    to?: Date;
    content: Content[];
}

interface Content {
    id: number;
    icon: string;
    categories: Category[];
}

interface Category {
    id: number;
    icon: string;
    name: string;
    description?: string;
    items: Item[];
}

interface Item {
    id: number;
    name: string;
    description?: string;
    price?: string;
    variations?: PriceVariation[]
    ingredients?: Ingredient[]
    assets?: Asset[];
    isSponsored?: boolean;
    icon?: String;
}

interface PriceVariation {
    variation: string;
    price: string;
}

interface Ingredient {
    id: number
    base: string;  // govedina       || inčuni
    label: string; // goveja polpeta || inčuni v olivnem olju z baziloko
    allergens?: Allergen[]
    diet?: Diet;
}

interface Allergen {
    id: number;
    label: string;
    icon: string;
}

interface Asset {
    id: number;
    source: String;
    type: AssetType;
}

interface Currency {
    id: number;
    name: String;
    symbol: String;
}

enum Diet {
    "VEGAN" = "vegan",
    "VEGETARIAN" = "vegetarian",
    "PESKETARIAN" = "pesketarian",
}

enum AssetType {
    "IMAGE" = "image",
    "VIDEO" = "video",
}

enum MenuType {
    "INTERVAL" = "interval",
    "STANDARD" = "standard",
    "DRINK" = "drink",
}
