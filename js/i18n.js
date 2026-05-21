/* Translations + language switcher */
// ─── i18n translations ───
const i18n = {
  ru: {
    nav_about: 'О воде', nav_process: 'Очистка', nav_products: 'Продукция',
    nav_delivery: 'Доставка', nav_contacts: 'Контакты', nav_order: 'Заказать',
    hero_badge: 'Ташкент — доставка 6 дней в неделю',
    hero_title: 'Чистая вода — <em>дар природы</em>',
    hero_sub: 'Артезианская вода с 9-ступенчатой очисткой. Доставка на дом и в офис. Кулеры в аренду.',
    hero_btn1: 'Заказать воду',
    stat1_label: 'Ступеней очистки', stat2_label: 'Дней доставки', stat3_label: 'Качество',
    about_label: 'О нашей воде',
    about_title: 'Природа создавала её <em>тысячелетиями</em>',
    about_p1: 'Вода «Ideal» добывается из уникального артезианского источника в экологически чистой зоне Ташкентской области. Водоносные пласты формировались долгое время, впитывая полезные микроэлементы и минеральные соли.',
    about_p2: 'Производство расположено на 1000 м² и оснащено современным оборудованием. Автоматическая линия розлива исключает контакт воды с персоналом. Ежедневный микробиологический и физико-химический контроль.',
    about_p3: 'В воде нет искусственных добавок и подсластителей. Каждый поликарбонатный бутыль проходит автоматическую обработку и проверку на стерильность.',
    process_label: 'Технология очистки',
    process_title: '9 ступеней <em>на пути к чистоте</em>',
    process_intro: 'Каждая капля проходит многоуровневую систему очистки, сохраняя природную минерализацию и приобретая кристальную чистоту.',
    step1_title: 'Механическая очистка', step1_text: 'Прохождение через механический фильтр — удаление песка и мелких примесей.',
    step2_title: 'Активированный уголь', step2_text: 'Поглощает вредные вещества, улучшает цвет и вкус воды.',
    step3_title: 'Фильтры умягчения', step3_text: 'Удаление солей жёсткости — вода становится мягкой и приятной на вкус.',
    step4_title: 'Мембранная очистка', step4_text: 'Мембраны задерживают все вредные вещества, пропуская только полезные.',
    step5_title: 'Ультрафиолет', step5_text: 'Уничтожает вирусы и бактерии — эффективный и безопасный метод дезинфекции.',
    step6_title: 'Озонирование', step6_text: 'Уничтожает все известные микроорганизмы, придавая воде свежий вкус.',
    products_label: 'Каталог', products_title: 'Наша <em>продукция</em>',
    tab_water: 'Вода', tab_cooler2: 'Кулеры 2 режима', tab_cooler3: 'Кулеры 3 режима', tab_used: 'Б/У кулеры', tab_acc: 'Аксессуары',
    prod_w19: 'Вода IDEAL — 18,9 литров', prod_w10: 'Вода IDEAL — 10 литров', prod_w5: 'Вода IDEAL — 5 литров',
    delivery_label: 'Доставка',
    delivery_title: 'Следующий день — <em>ваша вода</em>',
    feat1_t: 'Бесплатная доставка', feat1_d: 'На дом, в офис, школы и учреждения по Ташкенту',
    feat2_t: '6 дней в неделю', feat2_d: 'Заказывайте заранее — получайте на следующий день',
    feat3_t: 'Прямо с завода', feat3_d: 'Вся продукция хранится на нашем складе',
    feat4_t: 'Дружелюбные операторы', feat4_d: 'Расскажут всё о воде и оформят заказ по тел. 200-81-18',
    delivery_btn1: 'Коммерческое предложение', delivery_btn2: 'Позвонить',
    delivery_badge: 'Доставка',
    reviews_label: 'Отзывы',
    reviews_title: 'Что говорят <em>наши клиенты</em>',
    review1_text: 'Вода хорошая. Доставку делают в день заказа, если успеть заказать до 10 утра, иначе — на следующий день. Есть бот для онлайн-заказа, очень удобно — не нужно ни с кем разговаривать)',
    review2_text: 'Пользуюсь уже 4 года, привозят оперативно.',
    review3_text: 'Три месяца берём воду — вкус приятный, без примесей. Бутыли новые, крепкая защитная наклейка. Претензий нет ни у кого из семьи.',
    review4_text: 'Отличная компания, заказываю только здесь. Вода прекрасная, особенно по соотношению цена/качество.',
    review5_text: 'Понравилась цена, не ожидал особого качества — приятно удивился. Отлично подходит для чая, кофе, приготовления еды. Хорошо, что есть такие компании.',
    review6_text: 'Очень довольна! Курьер всегда вежливый и пунктуальный. Кулер взяли в аренду — работает отлично уже больше года. Рекомендую всем коллегам в офисе.',
    promos_label: 'Акции', promos_title: 'Актуальные <em>предложения</em>',
    promo1_t: 'Выдув ПЭТ бутылок', promo1_d: 'Услуги по выдуву ПЭТ бутылок на заказ',
    promo2_t: 'Помпа в подарок', promo2_d: 'При покупке 20 капсул воды Ideal',
    promo3_t: 'Кулер в аренду', promo3_d: 'При оплате за воду — кулер бесплатно',
    clients_label: 'Клиенты', clients_title: 'Нам доверяют',
    contacts_label: 'Контакты',
    contacts_title: 'Свяжитесь <em>с нами</em>',
    c_addr_l: 'Адрес', c_addr_v: 'Ташкент, Олмос МФЙ, Навруз кучаси, 26-уй',
    c_phone_l: 'Телефон', c_email_l: 'Email',
    footer_copy: '© 2024 Ideal Water. Ташкент, Узбекистан',
    footer_tag: 'Питьевая вода высшего качества',
    totop_aria: 'Наверх',
  },
  uz: {
    nav_about: 'Suv haqida', nav_process: 'Tozalash', nav_products: 'Mahsulotlar',
    nav_delivery: 'Yetkazib berish', nav_contacts: 'Kontaktlar', nav_order: 'Buyurtma',
    hero_badge: 'Toshkent — haftada 6 kun yetkazib berish',
    hero_title: 'Toza suv — <em>tabiat in\'omi</em>',
    hero_sub: '9 bosqichli tozalashdan o\'tgan artezian suvi. Uyga va ofisga yetkazib berish. Kullerlarni ijaraga berish.',
    hero_btn1: 'Suv buyurtma qilish',
    stat1_label: 'Tozalash bosqichi', stat2_label: 'Yetkazib berish kunlari', stat3_label: 'Sifat',
    about_label: 'Suvimiz haqida',
    about_title: 'Tabiat uni <em>ming yillar davomida</em> yaratgan',
    about_p1: '«Ideal» suvi Toshkent viloyatining ekologik toza hududidagi noyob artezian manbaidan olinadi. Suv qatlamlari uzoq vaqt davomida shakllanib, foydali mikroelementlar va mineral tuzlarni o\'ziga singdirgan.',
    about_p2: 'Ishlab chiqarish 1000 m² maydonda joylashgan va zamonaviy uskunalar bilan jihozlangan. Avtomatlashtirilgan quyish liniyasi suvning xodimlar bilan aloqasini istisno qiladi. Har kuni mikrobiologik va fizik-kimyoviy nazorat o\'tkaziladi.',
    about_p3: 'Suvda sun\'iy qo\'shimchalar va shirinlashtiruvchilar yo\'q. Har bir polikarbonat idish avtomatik ishlov berish va sterillik tekshiruvidan o\'tadi.',
    process_label: 'Tozalash texnologiyasi',
    process_title: '<em>Tozalik sari</em> 9 bosqich',
    process_intro: 'Har bir tomchi ko\'p bosqichli tozalash tizimidan o\'tib, tabiiy mineralizatsiyani saqlaydi va kristall tiniqlikka ega bo\'ladi.',
    step1_title: 'Mexanik tozalash', step1_text: 'Mexanik filtr orqali o\'tish — qum va mayda aralashmalarni olib tashlash.',
    step2_title: 'Faollashtirilgan ko\'mir', step2_text: 'Zararli moddalarni yutadi, suvning rangi va ta\'mini yaxshilaydi.',
    step3_title: 'Yumshatuvchi filtrlar', step3_text: 'Qattiqlik tuzlarini olib tashlash — suv yumshoq va yoqimli ta\'mga ega bo\'ladi.',
    step4_title: 'Membranali tozalash', step4_text: 'Membranalar barcha zararli moddalarni ushlab qoladi, faqat foydalilarini o\'tkazadi.',
    step5_title: 'Ultrabinafsha nurlar', step5_text: 'Virus va bakteriyalarni yo\'q qiladi — samarali va xavfsiz dezinfeksiya usuli.',
    step6_title: 'Ozonlash', step6_text: 'Barcha ma\'lum mikroorganizmlarni yo\'q qiladi va suvga yangi ta\'m beradi.',
    products_label: 'Katalog', products_title: 'Bizning <em>mahsulotlar</em>',
    tab_water: 'Suv', tab_cooler2: '2 rejimli kullerlar', tab_cooler3: '3 rejimli kullerlar', tab_used: 'Ishlatilgan kullerlar', tab_acc: 'Aksessuarlar',
    prod_w19: 'IDEAL suvi — 18,9 litr', prod_w10: 'IDEAL suvi — 10 litr', prod_w5: 'IDEAL suvi — 5 litr',
    delivery_label: 'Yetkazib berish',
    delivery_title: 'Ertasi kun — <em>sizning suvingiz</em>',
    feat1_t: 'Bepul yetkazib berish', feat1_d: 'Toshkent bo\'ylab uyga, ofisga, maktab va muassasalarga',
    feat2_t: 'Haftada 6 kun', feat2_d: 'Oldindan buyurtma bering — ertasi kuni oling',
    feat3_t: 'To\'g\'ridan-to\'g\'ri zavoddan', feat3_d: 'Barcha mahsulot o\'z omborimizda saqlanadi',
    feat4_t: 'Xushmuomala operatorlar', feat4_d: 'Suv haqida hammasini aytadi va 200-81-18 raqami orqali buyurtma qabul qiladi',
    delivery_btn1: 'Tijorat taklifi', delivery_btn2: 'Qo\'ng\'iroq qilish',
    delivery_badge: 'Yetkazib berish',
    reviews_label: 'Fikrlar',
    reviews_title: '<em>Mijozlarimiz</em> nima deydi',
    review1_text: 'Suv yaxshi. Agar soat 10 gacha buyurtma qilinsa, o\'sha kuni yetkazib berishadi, aks holda — ertasi kuni. Onlayn buyurtma uchun bot bor, juda qulay — hech kim bilan gaplashishning hojati yo\'q)',
    review2_text: '4 yildan beri foydalanaman, tezda yetkazib berishadi.',
    review3_text: 'Uch oydan beri suv olamiz — ta\'mi yoqimli, aralashmalar yo\'q. Idishlar yangi, mustahkam himoya belbog\'i. Oilaning hech kimida e\'tiroz yo\'q.',
    review4_text: 'Ajoyib kompaniya, faqat shu yerdan buyurtma qilaman. Suv zo\'r, ayniqsa narx/sifat nisbati bo\'yicha.',
    review5_text: 'Narxi yoqdi, alohida sifat kutmagan edim — xursand bo\'ldim. Choy, qahva, ovqat pishirish uchun zo\'r. Bunday kompaniyalar borligidan xursandman.',
    review6_text: 'Juda mamnunman! Kuryer doim xushmuomala va o\'z vaqtida keladi. Kullerni ijaraga oldik — bir yildan ortiq a\'lo ishlayapti. Ofisdagi barcha hamkasblarimga tavsiya qilaman.',
    promos_label: 'Aksiyalar', promos_title: 'Dolzarb <em>takliflar</em>',
    promo1_t: 'PET shishalarni puflash', promo1_d: 'Buyurtma bo\'yicha PET shisha puflash xizmatlari',
    promo2_t: 'Sovg\'aga nasos', promo2_d: 'Ideal suvining 20 ta kapsulasini sotib olganda',
    promo3_t: 'Kuler ijaraga', promo3_d: 'Suv uchun to\'lov qilganda — kuler bepul',
    clients_label: 'Mijozlar', clients_title: 'Bizga ishonishadi',
    contacts_label: 'Kontaktlar',
    contacts_title: '<em>Biz bilan</em> bog\'laning',
    c_addr_l: 'Manzil', c_addr_v: 'Toshkent, Olmos MFY, Navro\'z ko\'chasi, 26-uy',
    c_phone_l: 'Telefon', c_email_l: 'Email',
    footer_copy: '© 2024 Ideal Water. Toshkent, O\'zbekiston',
    footer_tag: 'Eng yuqori sifatli ichimlik suvi',
    totop_aria: 'Yuqoriga',
  }
};

// Strip dangerous tags/attributes from translation strings before injection.
// Only safe inline tags are allowed (em, strong, b, i, br, span).
function sanitizeI18n(str) {
  if (typeof str !== 'string') return '';
  const tpl = document.createElement('template');
  tpl.innerHTML = str;
  const allowed = new Set(['EM','STRONG','B','I','BR','SPAN']);
  tpl.content.querySelectorAll('*').forEach(node => {
    if (!allowed.has(node.tagName)) {
      node.replaceWith(...node.childNodes);
      return;
    }
    [...node.attributes].forEach(a => {
      if (a.name.startsWith('on') || /javascript:/i.test(a.value)) node.removeAttribute(a.name);
    });
  });
  return tpl.innerHTML;
}

function setLang(lang) {
  // Guard against prototype pollution and unknown keys
  if (!Object.prototype.hasOwnProperty.call(i18n, lang)) return;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  const t = i18n[lang] || i18n.ru;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = sanitizeI18n(t[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', String(t[key]).replace(/[<>"']/g,''));
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch(e){}
}

// Wire language buttons via event listeners (no inline onclick — compatible with CSP)
document.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
  btn.addEventListener('click', function () {
    setLang(this.dataset.lang);
  });
});

// Apply saved language on load
try {
  const saved = localStorage.getItem('lang');
  if (saved && i18n[saved]) setLang(saved);
} catch(e){}
