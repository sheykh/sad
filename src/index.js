process.on('unhandledRejection', e => {
  console.log(e);
});

process.on('uncaughtException', e => {
  console.log(e);
});

process.on('rejectionHandled', event => {
  console.log(event);
});

require('dotenv').config();
const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const session = require('telegraf/session');
const axios = require('axios');
const _ = require('lodash');
const {
  productCard,
  getProduct,
  removeEmojis,
  count,
  phoneCheck,
} = require('./utils');

const bot = new Telegraf(process.env.BOT_TOKEN);

const API_URL = process.env.API_URL;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

bot.use(session());

bot.start(ctx => {
  ctx.session.basket = [];
  ctx.session.user = false;
  ctx.session.order = [];

  return ctx.reply(
    `Я могу помочь Вам подобрать подарки для любого случая.

  Для кого будем подбирать подарок?
  Выберите товары для кого из меню`,
    Markup.keyboard([
      ['🛒 Корзина', "🚖 Оформить заказ"],
      ['🍺 Пиво', '🥗 Салаты'],
      ['🍱 Закуски', '🍲 Супы'],
      ['🍢 Шашлык', '🐠 Рыба'],
      ['🍲 Блюда', '🍷🍸🍹 Напитки'],
      ['☎️ Контакты'],
      ])
      .resize()
      .extra()
  );
});

bot.hears('🍺 Пиво', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});

bot.hears('🥗 Салаты', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});

bot.hears('🍲 Супы', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});

bot.hears('🍢 Шашлык', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});

bot.hears('🐠 Рыба', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});
bot.hears('🍲 Блюда', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});
bot.hears('🍷🍸🍹 Напитки', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lvl2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
    return ctx.reply('Нет подкатегорий');
  }
});


bot.hears('☎️ Контакты', async ctx => {
  try {
    return ctx.replyWithHTML(
      `Если у Вас возникли вопросы можете позвонить или написать:\n\n📱 +998996045060\n👉 @shakha`
    );
  } catch (error) {
    console.log(error);
  }
});

bot.hears('🛒 Корзина', async ctx => {
  try {
    if (ctx.session.basket.length === 0) {
      return ctx.replyWithHTML(`В корзине ничего нет!`);
    }

    let sum = 0;
    let list = '';

    ctx.session.basket.forEach(item => {
      list += `${item.title} - ${item.price * item.quantity} сум\n`;
      sum += item.price * item.quantity;
    });
    ctx.session.preorderList = `${list}--------------\nОбщая сумма: 💳 ${sum} сум`;

    return ctx.reply(
      `${list}--------------\nОбщая сумма: 💳 ${sum} сум`,
      Extra.HTML().markup(
        Markup.inlineKeyboard([
          [Markup.callbackButton('❌ Удалить все товары', `delete`)],
          [Markup.callbackButton('✅ Оформить заказ', `yes`)],
        ])
      )
    );
  } catch (error) {
    console.log(error);
  }
});

bot.hears('🍱 Закуски', async ctx => {
  try {
    const subcat = removeEmojis(ctx.match).trimLeft();
    const res = await axios.get(`${API_URL}/shop/subcats`, {
      params: {slug: subcat},
    });

    const data = res.data;

    ctx.session.flag = 'lv2';

    data.push({title: '◀️ Назад'});

    ctx.session.back = data; // Here prev category

    return ctx.replyWithHTML(
      `Категория: ${ctx.message.text}`,
      Markup.keyboard(data.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
  } catch (error) {
    console.log(error);
  }
});

bot.action(/shopcart.+/, async ctx => {
  const [id, flag] = ctx.match[0].split('.');

  if (flag === 'add') {
    try {
      const result = await axios.get(`${API_URL}/shopcart/add`, {
        params: {
          id: ctx.session.product.item_id,
          count: 1,
          user_id: ctx.from.id,
        },
      });

      if (result) return ctx.answerCbQuery('Товар добавлено в корзину');
    } catch (err) {
      console.log(err);
    }
  }
});

bot.hears('◀️ Назад', ctx => {
  if (ctx.session.flag && ctx.session.back ) {
    ctx.session.flag = 'lvl2';

    ctx.replyWithHTML(
      `${ctx.message.text}`,
      Markup.keyboard(ctx.session.back.map(e => e.title), {columns: 2})
        .resize()
        .extra()
    );
    ctx.session.back = '';
  }

  return ctx.replyWithHTML(
    'Главное меню:',
    Markup.keyboard([
      ['🛒 Корзина', "🚖 Оформить заказ"],
      ['🍺 Пиво', '🥗 Салаты'],
      ['🍱 Закуски', '🍲 Супы'],
      ['🍢 Шашлык', '🐠 Рыба'],
      ['🍲 Блюда', '🍷🍸🍹 Напитки'],
      ['☎️ Контакты'],
      ])
      .resize()
      .extra()
  );
});

bot.on('text', async ctx => {
  if (ctx.session.flag === 'lvl2') {
    try {
      const res = await axios.get(`${API_URL}/shop/item`, {
        params: {slug: ctx.message.text},
      });

      const data = res.data;

      ctx.session.products = data;

      console.log(data);

      data.push({title: '◀️ Назад'});

      ctx.session.flag = 'product';
      return ctx.replyWithHTML(
        `${ctx.message.text}`,
        Markup.keyboard(data.map(e => e.title), {columns: 2})
          .resize()
          .extra()
      );
    } catch (error) {
      console.log(error);
      ctx.reply('Нет товара');
    }
  } else if (ctx.session.flag == 'product') {
    const product = getProduct(ctx.session.products, ctx.message.text);

    ctx.session.product = product;

    await productCard(ctx.session.product, 'create', ctx, API_URL);
  }

  return false;
});

bot.action(/buy.+/, async ctx => {
  if (ctx.session.basket === undefined) ctx.session.basket = [];
  try {
    const [section, flag] = ctx.match[0].split('.');

    if (flag === 'back') {
      return productCard(ctx.session.product, 'edit', ctx, API_URL);
    }

    return count('count', 'Выберите количество товара', ctx);
  } catch (err) {
    console.log(err);
  }
});

bot.action(/count.+/, async ctx => {
  try {
    const [section, flag] = ctx.match[0].split('.');

    let index = _.findIndex(ctx.session.basket, {
      item_id: ctx.session.product.item_id,
    });
    console.log(index);

    if (index === -1) {
      ctx.session.basket.push({
        item_id: ctx.session.product.item_id,
        title: ctx.session.product.title,
        price: ctx.session.product.price,
        quantity: parseInt(flag),
      });
    } else {
      ctx.session.basket.splice(index, 1, {
        item_id: ctx.session.product.item_id,
        title: ctx.session.product.title,
        price: ctx.session.product.price,
        quantity: parseInt(flag),
      });
    }

    const extra = Extra.HTML().markup(
      Markup.inlineKeyboard([
        [Markup.callbackButton('📦 Купить', `buy.product`)],
        [Markup.callbackButton('✅ Оформить', `order`)],
      ])
    );

    const caption = `🛍 ${ctx.session.product.title}
💳 ${ctx.session.product.price}
✅ В наличии`;
    return ctx.editMessageCaption(caption, extra);
  } catch (err) {
    console.log(err);
  }
});

bot.action('order', async ctx => {
  if (ctx.session.basket.length > 0) {
    const caption = `🛍 ${ctx.session.product.title}
💳 ${ctx.session.product.price}
✅ В наличии`;
    ctx.editMessageCaption(caption);

    let sum = 0;
    let list = '';

    ctx.session.basket.forEach(item => {
      list += `${item.title} - ${item.price * item.quantity} сум\n`;
      sum += item.price * item.quantity;
    });

    ctx.session.preorderList = `${list}--------------\nОбщая сумма: 💳 ${sum} сум`;

    return ctx.reply(
      `${list}--------------\nОбщая сумма: 💳 ${sum} сум`,
      Extra.HTML().markup(
        Markup.inlineKeyboard([
          [Markup.callbackButton('❌ Удалить все товары', `delete`)],
          [Markup.callbackButton('✅ Оформить заказ', `yes`)],
        ])
      )
    );
  }

  return ctx.answerCbQuery('В корзине ничего нет');
});

bot.action('yes', async ctx => {
  await ctx.editMessageText(`${ctx.session.preorderList}`);

  return ctx.reply(
    'Укажите тип доставки',
    Extra.HTML().markup(
      Markup.inlineKeyboard([
        [Markup.callbackButton('🏃‍♂️ Заберу', `delivery.1`)],
        [Markup.callbackButton('🚚 Доставка', `delivery.2`)],
      ])
    )
  );
});

bot.action(/delivery.+/, async ctx => {
  const [section, type] = ctx.match[0].split('.');
  await ctx.editMessageText(
    `Тип доставки ${type === 1 ? 'Сам заберу' : 'Доставка'}`
  );

  if (type === 2) {
    ctx.session.delivery = true;
    return ctx.reply(
      'Пожалуйста поделитесь адресом или просто укажите текстом свой адрес куда надо доставить',
      Extra.markup(markup => {
        return markup
          .resize()
          .keyboard([markup.locationRequestButton('📍 Моя локация')]);
      })
    );
  }

  return ctx.reply(
    'Пожалуйста отправьте свой номер или поделитесь контактом',
    Extra.markup(markup => {
      return markup
        .resize()
        .keyboard([markup.contactRequestButton('📱 Мой номер')]);
    })
  );
});
bot.on('location', async ctx => {
  return ctx.reply(
    'Пожалуйста отправьте свой номер или поделитесь контактом',
    Extra.markup(markup => {
      return markup
        .resize()
        .keyboard([markup.contactRequestButton('📱 Мой номер')]);
    })
  );
});

bot.on('contact', async ctx => {
  try {
    const phone = ctx.message.contact.phone_number;

    console.log(phone, ctx.from.id);

    const order = await axios.get(`${API_URL}/shop/order`, {
      params: {
        user_id: ctx.from.id,
        phone: phone,
      },
    });

    const goodsorder = [{goods: ctx.session.basket, order_id: order.data}];

    const data = await axios.post(`${API_URL}/shop/good`, {
      data: goodsorder,
    });

    await ctx.replyWithHTML(
      `Ваш заказ по номеру: ${
        order.data
      } ожидает проверки модератором. Скоро мы с вами свяжемся`
    );

    ctx.session.basket = [];

    return ctx.replyWithHTML(
      'Главное меню:',
      Markup.keyboard([
        ['🛒 Корзина', "🚖 Оформить заказ"],
        ['🍺 Пиво', '🥗 Салаты'],
        ['🍱 Закуски', '🍲 Супы'],
        ['🍢 Шашлык', '🐠 Рыба'],
        ['🍲 Блюда', '🍷🍸🍹 Напитки'],
        ['☎️ Контакты'],
        ])
        .resize()
        .extra()
    );
  } catch (err) {
    console.log(err);
  }
});

bot.action('delete', async ctx => {
  ctx.session.basket = [];

  ctx.editMessageText('Вы очистили корзину!');

  return ctx.replyWithHTML(
    'Главное меню:',
    Markup.keyboard([
      ['🛒 Корзина', "🚖 Оформить заказ"],
      ['🍺 Пиво', '🥗 Салаты'],
      ['🍱 Закуски', '🍲 Супы'],
      ['🍢 Шашлык', '🐠 Рыба'],
      ['🍲 Блюда', '🍷🍸🍹 Напитки'],
      ['☎️ Контакты'],
      ])
      .resize()
      .extra()
  );
});

bot.launch();