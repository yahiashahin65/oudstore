'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { products, Product } from '@/data/products';

type CartItem = Product & { quantity: number };

const formatPrice = (value: number) => `${value.toLocaleString('ar-SA')} ر.س`;

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toast, setToast] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('oud-store-cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('oud-store-cart', JSON.stringify(cart));
  }, [cart]);

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart((current) => {
      const exists = current.find((item) => item.id === product.id);
      if (exists) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setToast(`تمت إضافة ${product.name} للسلة`);
    window.setTimeout(() => setToast(''), 1800);
  };

  const checkout = () => {
    if (!cart.length) {
      setToast('السلة فارغة، أضف منتج أولاً');
      window.setTimeout(() => setToast(''), 1800);
      return;
    }
    setToast('هذه نسخة تجريبية. اربط بوابة الدفع الحقيقية من ملف .env');
    window.setTimeout(() => setToast(''), 2800);
  };

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#top"><span className="logo-mark">ع</span> براند العود</a>
          <nav className="nav-links">
            <a href="#products">المنتجات</a>
            <a href="#checkout">الدفع</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <button className="cart-btn">السلة ({count})</button>
        </div>
      </header>

      <section id="top" className="container hero">
        <div>
          <span className="badge">متجر عطور سعودي تجريبي</span>
          <h1>فخامة العود والبخور بتجربة شراء بسيطة.</h1>
          <p>واجهة أولية قابلة للتطوير لبراند عطور سعودي، تدعم المنتجات، السلة، صفحة الدفع، وتجهيز الربط لاحقًا مع بوابة دفع سعودية.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#products">تسوق الآن</a>
            <a className="outline-btn" href="#checkout">جرّب الدفع</a>
          </div>
        </div>
        <div className="hero-card">
          <span className="badge">عرض الإطلاق</span>
          <strong>خصم حتى 20%</strong>
          <p>على مختارات العود والبخور لفترة محدودة.</p>
        </div>
      </section>

      <section id="products" className="container">
        <div className="section-title">
          <div>
            <h2>الأكثر طلبًا</h2>
            <p>منتجات تجريبية قابلة للاستبدال من Firestore لاحقًا.</p>
          </div>
          <strong>{products.length} منتجات</strong>
        </div>
        <div className="grid">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <Image src={product.image} alt={product.name} width={700} height={500} />
              <div className="product-content">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price-row">
                  <span className="price">{formatPrice(product.price)}</span>
                  {product.oldPrice && <span className="old">{formatPrice(product.oldPrice)}</span>}
                </div>
                <button className="add" onClick={() => addToCart(product)}>أضف للسلة</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="checkout" className="container checkout">
        <div>
          <span className="badge">Checkout</span>
          <h2>الدفع المناسب للسوق السعودي</h2>
          <p>النسخة الحالية تعرض تجربة Checkout فقط. لتشغيل دفع حقيقي محمي، اربط Moyasar أو HyperPay من API Route في السيرفر، وضع Secret Key داخل Vercel Environment Variables فقط.</p>
          <h3>الإجمالي: {formatPrice(total)}</h3>
        </div>
        <div className="checkout-box">
          <div className="field">
            <label>الاسم</label>
            <input placeholder="مثال: محمد أحمد" />
          </div>
          <div className="field">
            <label>رقم الجوال</label>
            <input placeholder="05xxxxxxxx" />
          </div>
          <div className="field">
            <label>طريقة الدفع</label>
            <select defaultValue="mada">
              <option value="mada">مدى / Visa / Mastercard</option>
              <option value="applepay">Apple Pay</option>
              <option value="stcpay">STC Pay</option>
              <option value="bank">تحويل بنكي</option>
            </select>
          </div>
          <button className="primary-btn" onClick={checkout}>إتمام الطلب التجريبي</button>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">© {new Date().getFullYear()} براند العود — نسخة MVP للتجربة على Vercel</div>
      </footer>
      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}
