const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

function count(nav, caption, ctx) {
	const extra = Extra.HTML().markup(
		Markup.inlineKeyboard([
			[
				Markup.callbackButton('1', `${nav}.1`),
				Markup.callbackButton('2', `${nav}.2`),
				Markup.callbackButton('3', `${nav}.3`),
			],
			[
				Markup.callbackButton('4', `${nav}.4`),
				Markup.callbackButton('5', `${nav}.5`),
				Markup.callbackButton('6', `${nav}.6`),
			],
			[
				Markup.callbackButton('7', `${nav}.7`),
				Markup.callbackButton('8', `${nav}.8`),
				Markup.callbackButton('9', `${nav}.9`),
			],

			[Markup.callbackButton('⏪ Назад ', 'buy.back')],
		])
	)
  return ctx.editMessageCaption(`${caption}`, extra)
}

const getProduct = (data, slug) => {
	const product = data.filter(a => a.title === slug)

  return product[0]
};

const removeEmojis = str => {
	return str.replace(
		/([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g,
		''
	)
};

function productCard({price, title, image}, flag, ctx, api) {
	const extra = Extra.HTML().markup(
		Markup.inlineKeyboard([
			[Markup.callbackButton('📦 Купить', 'buy.product')],
			[Markup.callbackButton('✅ Оформить', 'order')],
		])
	)
  const caption = `🛍 ${title}\n💳 ${price} сум\n✅ В наличии`
  if (flag === 'edit') {
		ctx.editMessageCaption(`${caption}`, extra)
  } else {
		extra.caption = caption
    return ctx.replyWithPhoto({url: `${api}${image}`}, extra)
  }
}

module.exports = {count, getProduct, removeEmojis, productCard}
