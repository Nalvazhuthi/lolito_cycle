import cycle1 from "../assets/image/cycles/TOP SPEED 26 FLASH SS/1.png";
import cycle2 from "../assets/image/cycles/TOP SPEED 26 FLASH SS/2.png";

import cycle3 from "../assets/image/cycles/TOP SPEED 26 FLASH MS.png";

import cycle4 from "../assets/image/cycles/TOP SPEED 26 TORNADO SS/1.png";
import cycle5 from "../assets/image/cycles/TOP SPEED 26 TORNADO SS/2.png";

import { StaticImageData } from "next/image";

export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    image: string | StaticImageData;
    quantity: number;
    uploadedAt: string; // Can be 'Date' if you parse it later
}


export const products: Product[] = [
    {
        id: 1,
        name: 'Top Speed 26 Flash SS 1',
        price: 7499,
        originalPrice: 9399,
        image: cycle1,
        quantity: 1,
        uploadedAt: '2025-09-17',

    },
    {
        id: 2,
        name: 'Top Speed 26 Flash SS 2',
        price: 7999,
        originalPrice: 9999,
        image: cycle2,
        quantity: 1,
        uploadedAt: '2025-09-17',
    },
    {
        id: 3,
        name: 'Top Speed 26 Flash MS 1',
        price: 8999,
        originalPrice: 10999,
        image: cycle3,
        quantity: 1,
        uploadedAt: '2025-09-17',
    },
    {
        id: 4,
        name: 'Top Speed 26 Tornado SS 1',
        price: 10499,
        originalPrice: 12499,
        image: cycle4,
        quantity: 1,
        uploadedAt: '2025-09-17',
    },
    {
        id: 5,
        name: 'Top Speed 26 Tornado SS 2',
        price: 10999,
        originalPrice: 12999,
        image: cycle5,
        quantity: 1,
        uploadedAt: '2025-09-17',
    },
];
