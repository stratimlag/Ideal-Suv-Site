// ─── Translations ───────────────────────────────────────────────────────────
const translations = {
  ru: {
    "nav.about": "О воде",
    "nav.products": "Продукция",
    "nav.benefits": "Преимущества",
    "nav.delivery": "Доставка",
    "nav.contact": "Контакты",
    "nav.order": "Заказать",
    "hero.badge": "Природная питьевая вода",
    "hero.title": "Чистота, рождённая природой Ташкента",
    "hero.subtitle": "Ideal Water — питьевая вода высшего качества из древнего водоносного слоя, насыщенная природными минералами тысячелетиями.",
    "hero.cta.order": "Заказать воду",
    "hero.cta.call": "Позвонить",
    "hero.stat.years": "лет на рынке",
    "hero.stat.liters": "литров в день",
    "hero.stat.clients": "довольных клиентов",
    "about.tag": "О воде",
    "about.title": "Вода, созданная самой природой",
    "about.body": "Природная питьевая вода «Ideal» добывается в уникальном по чистоте месте — из одного из самых древних водоносных слоёв Ташкентской области. Воды формировались в толще земли тысячелетиями, вбирая полезные микроэлементы и минеральные соли.",
    "about.point1": "Древний водоносный слой",
    "about.point1.d": "Экологически чистая зона Ташкентской области",
    "about.point2": "Природная минерализация",
    "about.point2.d": "Сбалансированный состав микроэлементов",
    "about.point3": "Прямо с завода",
    "about.point3.d": "Без посредников, всегда свежая партия",
    "products.tag": "Продукция",
    "products.title": "Выберите свой объём",
    "products.subtitle": "Премиальная питьевая вода в удобной упаковке для дома и офиса.",
    "products.size": "Литров",
    "products.order": "Заказать",
    "products.popular": "Популярное",
    "products.currency": "сум",
    "products.details": "Подробнее",
    "products.used": "Б/у",
    "products.usedNote": "Кулеры с пробегом — проверены и обслужены нашими мастерами. Гарантия и доставка включены.",
    "products.cat.water": "Вода",
    "products.cat.cooler2": "Кулеры 2 режима",
    "products.cat.cooler3": "Кулеры 3 режима",
    "products.cat.used": "Б/у кулеры",
    "products.cat.accessories": "Аксессуары",
    "products.cat.service": "Чистка кулеров",
    "products.mode.hot": "Горячая",
    "products.mode.cold": "Холодная",
    "products.mode.room": "Комнатная",
    "products.acc.pump.t": "Помпа с откидной крышкой",
    "products.acc.pump.d": "Электрическая, для бутылей 19 л.",
    "products.acc.manualPump.t": "Ручная помпа",
    "products.acc.manualPump.d": "Надёжная механика без батареек.",
    "products.acc.cupHolder.t": "Держатель стаканчиков",
    "products.acc.cupHolder.d": "Удобный диспенсер для одноразовых стаканов.",
    "products.acc.cupsBundle.t": "Стаканчики (упаковка)",
    "products.acc.cupsBundle.d": "Одноразовые стаканы для воды.",
    "products.acc.chair.t": "Подставка под бутыль",
    "products.acc.chair.d": "Складная подставка для удобного розлива.",
    "products.acc.thermos.t": "Термосы",
    "products.acc.thermos.d": "Розовый, белый, чёрный, серый.",
    "products.service.t": "Профессиональная чистка кулеров",
    "products.service.d": "Полная дезинфекция и обслуживание вашего кулера на дому или в офисе.",
    "products.service.p1": "Разборка и санитарная обработка узлов",
    "products.service.p2": "Промывка и дезинфекция системы подачи",
    "products.service.p3": "Проверка нагрева и охлаждения",
    "products.service.cta": "Заказать чистку",
    "benefits.tag": "Почему мы",
    "benefits.title": "Качество, которому доверяют",
    "benefits.b1.t": "Контроль качества",
    "benefits.b1.d": "Многоступенчатая проверка на каждом этапе производства.",
    "benefits.b2.t": "Бесплатная доставка",
    "benefits.b2.d": "По всему Ташкенту — на дом и в офис без доплат.",
    "benefits.b3.t": "Свежая партия",
    "benefits.b3.d": "Розлив непосредственно перед отправкой клиенту.",
    "benefits.b4.t": "Лидер рынка",
    "benefits.b4.d": "Одни из ведущих поставщиков питьевой воды в регионе.",
    "delivery.tag": "Доставка",
    "delivery.title": "Привезём за пару часов",
    "delivery.body": "Оформите заказ по телефону или через Telegram-бот — мы доставим воду бесплатно по всему Ташкенту в удобное время.",
    "delivery.step1": "Оставьте заявку",
    "delivery.step2": "Подтверждаем заказ",
    "delivery.step3": "Привозим и заносим",
    "contact.tag": "Контакты",
    "contact.title": "Готовы попробовать Ideal?",
    "contact.subtitle": "Свяжитесь с нами любым удобным способом.",
    "contact.phone": "Телефон",
    "contact.telegram": "Telegram-бот",
    "contact.hours": "Ежедневно, 09:00 — 21:00",
    "footer.rights": "Все права защищены.",
    "footer.tagline": "Питьевая вода высшего качества",
  },
  uz: {
    "nav.about": "Suv haqida",
    "nav.products": "Mahsulotlar",
    "nav.benefits": "Afzalliklar",
    "nav.delivery": "Yetkazib berish",
    "nav.contact": "Aloqa",
    "nav.order": "Buyurtma",
    "hero.badge": "Tabiiy ichimlik suvi",
    "hero.title": "Toshkent tabiatidan tug'ilgan tozalik",
    "hero.subtitle": "Ideal Water — qadimiy suv qatlamidan olingan, ming yillar davomida tabiiy minerallarga to'yingan oliy sifatli ichimlik suvi.",
    "hero.cta.order": "Suv buyurtma qilish",
    "hero.cta.call": "Qo'ng'iroq qilish",
    "hero.stat.years": "yil bozorda",
    "hero.stat.liters": "litr har kuni",
    "hero.stat.clients": "mamnun mijozlar",
    "about.tag": "Suv haqida",
    "about.title": "Tabiat tomonidan yaratilgan suv",
    "about.body": "«Ideal» tabiiy ichimlik suvi Toshkent viloyatining eng qadimiy suv qatlamlaridan birida — tozaligi bilan noyob joyda olinadi. Suv ming yillar davomida yer qa'rida shakllanib, foydali mikroelementlar va mineral tuzlarni o'ziga singdirgan.",
    "about.point1": "Qadimiy suv qatlami",
    "about.point1.d": "Toshkent viloyatining ekologik toza zonasi",
    "about.point2": "Tabiiy minerallashuv",
    "about.point2.d": "Mikroelementlarning muvozanatli tarkibi",
    "about.point3": "To'g'ridan-to'g'ri zavoddan",
    "about.point3.d": "Vositachisiz, doim yangi partiya",
    "products.tag": "Mahsulotlar",
    "products.title": "O'z hajmingizni tanlang",
    "products.subtitle": "Uy va ofis uchun qulay qadoqdagi premium ichimlik suvi.",
    "products.size": "Litr",
    "products.order": "Buyurtma",
    "products.popular": "Mashhur",
    "products.currency": "so'm",
    "products.details": "Batafsil",
    "products.used": "Ishlatilgan",
    "products.usedNote": "Ishlatilgan kulerlar — ustalarimiz tomonidan tekshirilgan va xizmat ko'rsatilgan. Kafolat va yetkazib berish kiritilgan.",
    "products.cat.water": "Suv",
    "products.cat.cooler2": "2 rejimli kulerlar",
    "products.cat.cooler3": "3 rejimli kulerlar",
    "products.cat.used": "Ishlatilgan kulerlar",
    "products.cat.accessories": "Aksessuarlar",
    "products.cat.service": "Kuler tozalash",
    "products.mode.hot": "Issiq",
    "products.mode.cold": "Sovuq",
    "products.mode.room": "Xona harorati",
    "products.acc.pump.t": "Qopqoqli elektr nasos",
    "products.acc.pump.d": "19 litrli butilkalar uchun elektr nasos.",
    "products.acc.manualPump.t": "Qo'l nasosi",
    "products.acc.manualPump.d": "Batareyasiz ishonchli mexanika.",
    "products.acc.cupHolder.t": "Stakan ushlagichi",
    "products.acc.cupHolder.d": "Bir martalik stakanlar uchun qulay dispenser.",
    "products.acc.cupsBundle.t": "Stakanlar (to'plam)",
    "products.acc.cupsBundle.d": "Suv uchun bir martalik stakanlar.",
    "products.acc.chair.t": "Butilka tagligi",
    "products.acc.chair.d": "Quyish uchun qulay yig'ma taglik.",
    "products.acc.thermos.t": "Termoslar",
    "products.acc.thermos.d": "Pushti, oq, qora, kulrang.",
    "products.service.t": "Professional kuler tozalash",
    "products.service.d": "Uy yoki ofisingizda kulerni to'liq dezinfektsiya qilish va xizmat ko'rsatish.",
    "products.service.p1": "Qismlarni qismlarga ajratish va sanitariya",
    "products.service.p2": "Tarqatish tizimini yuvish va dezinfektsiya qilish",
    "products.service.p3": "Isitish va sovutishni tekshirish",
    "products.service.cta": "Tozalashga buyurtma",
    "benefits.tag": "Nega biz",
    "benefits.title": "Ishonchli sifat",
    "benefits.b1.t": "Sifat nazorati",
    "benefits.b1.d": "Ishlab chiqarishning har bir bosqichida ko'p bosqichli tekshiruv.",
    "benefits.b2.t": "Bepul yetkazib berish",
    "benefits.b2.d": "Toshkent bo'ylab — uy va ofisga qo'shimcha to'lovsiz.",
    "benefits.b3.t": "Yangi partiya",
    "benefits.b3.d": "Mijozga jo'natishdan oldin quyiladi.",
    "benefits.b4.t": "Bozor yetakchisi",
    "benefits.b4.d": "Mintaqadagi yetakchi suv yetkazib beruvchilardan biri.",
    "delivery.tag": "Yetkazib berish",
    "delivery.title": "Bir necha soatda yetkazamiz",
    "delivery.body": "Telefon yoki Telegram-bot orqali buyurtma bering — Toshkent bo'ylab qulay vaqtda bepul yetkazib beramiz.",
    "delivery.step1": "Buyurtma qoldiring",
    "delivery.step2": "Tasdiqlaymiz",
    "delivery.step3": "Yetkazib beramiz",
    "contact.tag": "Aloqa",
    "contact.title": "Ideal'ni sinab ko'rishga tayyormisiz?",
    "contact.subtitle": "Biz bilan istalgan qulay usulda bog'laning.",
    "contact.phone": "Telefon",
    "contact.telegram": "Telegram-bot",
    "contact.hours": "Har kuni, 09:00 — 21:00",
    "footer.rights": "Barcha huquqlar himoyalangan.",
    "footer.tagline": "Oliy sifatli ichimlik suvi",
  },
  en: {
    "nav.about": "About",
    "nav.products": "Products",
    "nav.benefits": "Benefits",
    "nav.delivery": "Delivery",
    "nav.contact": "Contact",
    "nav.order": "Order",
    "hero.badge": "Natural drinking water",
    "hero.title": "Purity born from the heart of Tashkent",
    "hero.subtitle": "Ideal Water — premium drinking water drawn from an ancient aquifer, enriched with natural minerals for thousands of years.",
    "hero.cta.order": "Order water",
    "hero.cta.call": "Call us",
    "hero.stat.years": "years on the market",
    "hero.stat.liters": "liters delivered daily",
    "hero.stat.clients": "happy customers",
    "about.tag": "About",
    "about.title": "Water crafted by nature itself",
    "about.body": "Ideal natural drinking water is sourced from one of the oldest aquifers in the Tashkent region — a place of exceptional purity. The water formed deep in the earth for millennia, absorbing beneficial trace elements and minerals.",
    "about.point1": "Ancient aquifer",
    "about.point1.d": "Pristine ecological zone near Tashkent",
    "about.point2": "Natural minerals",
    "about.point2.d": "Balanced blend of essential elements",
    "about.point3": "Straight from the plant",
    "about.point3.d": "No middlemen — always a fresh batch",
    "products.tag": "Products",
    "products.title": "Choose your size",
    "products.subtitle": "Premium drinking water in convenient packaging for home and office.",
    "products.size": "Liters",
    "products.order": "Order",
    "products.popular": "Popular",
    "products.currency": "UZS",
    "products.details": "Details",
    "products.used": "Used",
    "products.usedNote": "Pre-owned coolers — inspected and serviced by our technicians. Warranty and delivery included.",
    "products.cat.water": "Water",
    "products.cat.cooler2": "2-mode coolers",
    "products.cat.cooler3": "3-mode coolers",
    "products.cat.used": "Used coolers",
    "products.cat.accessories": "Accessories",
    "products.cat.service": "Cooler cleaning",
    "products.mode.hot": "Hot",
    "products.mode.cold": "Cold",
    "products.mode.room": "Room",
    "products.acc.pump.t": "Electric pump with lid",
    "products.acc.pump.d": "Electric pump for 19L bottles.",
    "products.acc.manualPump.t": "Manual pump",
    "products.acc.manualPump.d": "Reliable mechanics, no batteries.",
    "products.acc.cupHolder.t": "Cup holder",
    "products.acc.cupHolder.d": "Convenient dispenser for disposable cups.",
    "products.acc.cupsBundle.t": "Cups (bundle)",
    "products.acc.cupsBundle.d": "Disposable cups for water.",
    "products.acc.chair.t": "Bottle stand",
    "products.acc.chair.d": "Foldable stand for easy pouring.",
    "products.acc.thermos.t": "Thermoses",
    "products.acc.thermos.d": "Pink, white, black, gray.",
    "products.service.t": "Professional cooler cleaning",
    "products.service.d": "Full disinfection and servicing of your cooler at home or at the office.",
    "products.service.p1": "Disassembly and sanitary treatment of parts",
    "products.service.p2": "Flushing and disinfecting the dispensing system",
    "products.service.p3": "Heating and cooling check",
    "products.service.cta": "Order cleaning",
    "benefits.tag": "Why us",
    "benefits.title": "Quality you can trust",
    "benefits.b1.t": "Quality control",
    "benefits.b1.d": "Multi-stage testing at every step of production.",
    "benefits.b2.t": "Free delivery",
    "benefits.b2.d": "Across Tashkent — to your home or office at no extra cost.",
    "benefits.b3.t": "Fresh batch",
    "benefits.b3.d": "Bottled right before dispatch to the customer.",
    "benefits.b4.t": "Market leader",
    "benefits.b4.d": "One of the leading water suppliers in the region.",
    "delivery.tag": "Delivery",
    "delivery.title": "Delivered within hours",
    "delivery.body": "Place an order by phone or via our Telegram bot — we deliver free of charge across Tashkent at a time that suits you.",
    "delivery.step1": "Place an order",
    "delivery.step2": "We confirm",
    "delivery.step3": "We deliver to your door",
    "contact.tag": "Contact",
    "contact.title": "Ready to try Ideal?",
    "contact.subtitle": "Reach out in whichever way works best for you.",
    "contact.phone": "Phone",
    "contact.telegram": "Telegram bot",
    "contact.hours": "Daily, 9:00 — 21:00",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Premium drinking water",
  }
};

// ─── State ────────────────────────────────────────────────────────────────────
let lang = localStorage.getItem('lang') || 'ru';
let activeTab = 'water';

function t(key) {
  return (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const icons = {
  droplet: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2s7 8.5 7 13a7 7 0 0 1-14 0c0-4.5 7-13 7-13z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 18 9 6 12 12 15 9 21 18 3 18"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M5 20l.6-1.8L7.4 18l-1.8-.6L5 15.6l-.6 1.8L2.6 18l1.8.6L5 20z"/><path d="M19 4l.5-1.5L21 2l-1.5-.5L19 0l-.5 1.5L17 2l1.5.5L19 4z"/></svg>`,
  factory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M6 20V10l6-5v5l6-5v15"/><path d="M10 20v-5h4v5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  droplets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  imageOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" y1="13.5" x2="6" y2="21"/><path d="M18 12l3 3-3 3"/><path d="M3 6a3 3 0 0 0 3 3h9"/><path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2.1.9"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  snowflake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M20 16l-4-4 4-4"/><path d="M4 8l4 4-4 4"/><path d="M16 4l-4 4-4-4"/><path d="M8 20l4-4 4 4"/></svg>`,
  droplet2: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s7 8.5 7 13a7 7 0 0 1-14 0c0-4.5 7-13 7-13z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function placeholder(filename) {
  return `<div class="product-img-placeholder">
    ${icons.imageOff}
    <p>Add photo to<br><code>assets/products/${filename}</code></p>
  </div>`;
}

function modeBadges(modes) {
  return `<div class="mode-badges">
    ${modes.includes('hot') ? `<span class="badge-hot">${icons.flame} <span data-i18n="products.mode.hot"></span></span>` : ''}
    ${modes.includes('cold') ? `<span class="badge-cold">${icons.snowflake} <span data-i18n="products.mode.cold"></span></span>` : ''}
    ${modes.includes('room') ? `<span class="badge-room">${icons.droplet2} <span data-i18n="products.mode.room"></span></span>` : ''}
  </div>`;
}

// ─── Render Functions ────────────────────────────────────────────────────────
function renderTabs() {
  const tabIds = ['water','cooler2','cooler3','used','accessories','service'];
  const tabKeys = ['products.cat.water','products.cat.cooler2','products.cat.cooler3','products.cat.used','products.cat.accessories','products.cat.service'];
  return tabIds.map((id, i) =>
    `<button class="tab-btn ${activeTab === id ? 'active' : ''}" data-tab="${id}">${t(tabKeys[i])}</button>`
  ).join('');
}

function renderWater() {
  const items = [
    { size: '0.5', price: '3 000', popular: false, filename: 'bottle-0.5l.jpg' },
    { size: '1.5', price: '6 000', popular: false, filename: 'bottle-1.5l.jpg' },
    { size: '5', price: '15 000', popular: false, filename: 'bottle-5l.jpg' },
    { size: '18.9', price: '35 000', popular: true, filename: 'bottle-18.9l.jpg' },
  ];
  return `<div class="products-grid-4">${items.map(p => `
    <div class="product-card ${p.popular ? 'popular' : ''}">
      ${p.popular ? `<span class="popular-badge">${t('products.popular')}</span>` : ''}
      ${placeholder(p.filename)}
      <div class="product-size">${p.size}<span>L</span></div>
      <div class="product-size-label">${t('products.size')}</div>
      <div class="product-price">
        <span class="product-price-val">${p.price}</span>
        <span class="product-price-cur">${t('products.currency')}</span>
      </div>
      <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
        class="btn-card ${p.popular ? 'primary' : 'outline'}">${t('products.order')}</a>
    </div>`).join('')}</div>`;
}

function renderCoolers2() {
  const items = [
    { model: 'HSM-91LWB-ADX', modes: ['hot','cold'], filename: 'hsm-91lwb-adx.jpg' },
    { model: 'HSM-25 FB', modes: ['hot','cold'], filename: 'hsm-25-fb.jpg' },
    { model: 'HSM-25 FB', modes: ['hot','room'], filename: 'hsm-25-fb-compressor.jpg', note: 'Compressor' },
  ];
  return `<div class="products-grid-3">${items.map(c => `
    <div class="product-card">
      ${placeholder(c.filename)}
      <div class="product-model">${c.model}</div>
      ${c.note ? `<div class="product-note">${c.note}</div>` : ''}
      ${modeBadges(c.modes)}
      <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
        class="btn-card outline">${t('products.details')}</a>
    </div>`).join('')}</div>`;
}

function renderCoolers3() {
  const items = [
    { model: 'Model 235 WB', modes: ['hot','cold','room'], filename: 'model-235-wb.jpg' },
    { model: 'HSM-31 D WB', modes: ['hot','cold','room'], filename: 'hsm-31-d-wb.jpg', note: 'With refrigerator' },
    { model: 'HSM-91 B', modes: ['hot','cold','room'], filename: 'hsm-91-b.jpg', note: 'With bottle protection' },
    { model: 'HSM-91 D', modes: ['hot','cold','room'], filename: 'hsm-91-d.jpg', note: 'With bottle protection' },
    { model: 'HSM-225 (Black)', modes: ['hot','cold','room'], filename: 'hsm-225-black.jpg' },
    { model: 'HSM-225', modes: ['hot','cold','room'], filename: 'hsm-225.jpg' },
    { model: 'HSM-2002 (Black)', modes: ['hot','cold','room'], filename: 'hsm-2002-black.jpg' },
    { model: 'HSM-2002', modes: ['hot','cold','room'], filename: 'hsm-2002.jpg' },
  ];
  return `<div class="products-grid-4">${items.map(c => `
    <div class="product-card">
      ${placeholder(c.filename)}
      <div class="product-model">${c.model}</div>
      ${c.note ? `<div class="product-note">${c.note}</div>` : ''}
      ${modeBadges(c.modes)}
      <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
        class="btn-card outline">${t('products.details')}</a>
    </div>`).join('')}</div>`;
}

function renderUsed() {
  const items = [
    { model: 'Cooler Ideal HS-2', modes: ['hot','cold'], filename: 'used-hs-2.jpg' },
    { model: 'Ideal HSM-91 B', modes: ['hot','cold'], filename: 'used-hsm-91-b.jpg' },
    { model: 'Cooler HSM-31 D WB', modes: ['hot','cold','room'], filename: 'used-hsm-31-d-wb.jpg' },
    { model: 'Ideal HSM-225', modes: ['hot','cold','room'], filename: 'used-hsm-225.jpg' },
  ];
  return `
    <div class="used-note">${t('products.usedNote')}</div>
    <div class="products-grid-4">${items.map(c => `
      <div class="product-card">
        <span class="used-badge">${t('products.used')}</span>
        ${placeholder(c.filename)}
        <div class="product-model">${c.model}</div>
        ${modeBadges(c.modes)}
        <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
          class="btn-card outline">${t('products.details')}</a>
      </div>`).join('')}</div>`;
}

function renderAccessories() {
  const items = [
    { key: 'pump', icon: icons.wrench, filename: 'acc-electric-pump.jpg' },
    { key: 'manualPump', icon: icons.wrench, filename: 'acc-manual-pump.jpg' },
    { key: 'cupHolder', icon: icons.package, filename: 'acc-cup-holder.jpg' },
    { key: 'cupsBundle', icon: icons.package, filename: 'acc-cups-bundle.jpg' },
    { key: 'chair', icon: icons.package, filename: 'acc-chair.jpg' },
    { key: 'thermos', icon: icons.thermometer, filename: 'acc-thermos.jpg' },
  ];
  return `<div class="products-grid-3">${items.map(a => `
    <div class="product-card" style="align-items:center">
      ${placeholder(a.filename)}
      <div class="product-model">${t('products.acc.' + a.key + '.t')}</div>
      <div class="product-note">${t('products.acc.' + a.key + '.d')}</div>
      <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
        class="btn-card outline">${t('products.order')}</a>
    </div>`).join('')}</div>`;
}

function renderService() {
  return `<div class="service-card">
    <div class="service-art">
      ${icons.sparkles}
      <div class="service-art-glow"></div>
    </div>
    <div class="service-body">
      <span class="section-tag">${t('products.cat.service')}</span>
      <h3 style="font-family:var(--font-display);font-size:1.875rem;font-weight:700;color:var(--foreground);margin-top:0.5rem;">
        ${t('products.service.t')}
      </h3>
      <p style="margin-top:1rem;color:var(--muted-foreground);">${t('products.service.d')}</p>
      <ul>
        <li>${t('products.service.p1')}</li>
        <li>${t('products.service.p2')}</li>
        <li>${t('products.service.p3')}</li>
      </ul>
      <a href="https://t.me/idealwaterbot" target="_blank" rel="noreferrer"
        class="btn-card primary" style="margin-top:1.75rem;max-width:fit-content;padding:0 1.5rem;">
        ${t('products.service.cta')}
      </a>
    </div>
  </div>`;
}

// ─── Main render ──────────────────────────────────────────────────────────────
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Tabs
  document.getElementById('tabs-list').innerHTML = renderTabs();
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      applyTranslations();
    });
  });

  // Tab contents
  const contents = {
    water: renderWater(),
    cooler2: renderCoolers2(),
    cooler3: renderCoolers3(),
    used: renderUsed(),
    accessories: renderAccessories(),
    service: renderService(),
  };
  document.querySelectorAll('.tab-content').forEach(el => {
    const id = el.dataset.tab;
    el.innerHTML = contents[id] || '';
    el.classList.toggle('active', id === activeTab);
  });

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      applyTranslations();
    });
  });

  // Scroll header
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.innerHTML = open ? icons.close : icons.menu;
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.innerHTML = icons.menu;
    });
  });

  applyTranslations();
});
