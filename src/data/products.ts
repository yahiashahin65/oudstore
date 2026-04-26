export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  notes: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'عود ملكي فاخر',
    category: 'عود',
    price: 349,
    oldPrice: 420,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    description: 'اختيار فاخر لمحبي روائح العود العميقة والثابتة.',
    notes: ['عود', 'خشب الصندل', 'عنبر'],
  },
  {
    id: 2,
    name: 'مسك أبيض شرقي',
    category: 'مسك',
    price: 129,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop',
    description: 'رائحة ناعمة ونظيفة مناسبة للاستخدام اليومي.',
    notes: ['مسك', 'ورد', 'فانيلا'],
  },
  {
    id: 3,
    name: 'بخور ضيافة فاخر',
    category: 'بخور',
    price: 199,
    oldPrice: 240,
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200&auto=format&fit=crop',
    description: 'بخور فاخر للمجالس والضيافة بروح سعودية أصيلة.',
    notes: ['بخور', 'عنبر', 'توابل شرقية'],
  },
  {
    id: 4,
    name: 'عطر ليالي نجد',
    category: 'عطور',
    price: 269,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
    description: 'عطر شرقي أنيق يجمع الفخامة والثبات العالي.',
    notes: ['زعفران', 'عود', 'جلد'],
  },
];
