export const searchFilter = (goods, value) => {
	return goods.filter((goodsItem) =>
		goodsItem.title.toLowerCase().includes(value.toLowerCase())
	);
};

export const categoryFilter = (goods, value) => {
	return goods.filter((goodsItem) => goodsItem.category === value);
};

export const priceFilter = (goods, min, max) => {
	return goods.filter((goodsItem) => {
		if (min === '' && max === '') {
			return goodsItem;
		} else if (min !== '' && max !== '') {
			return (
				goodsItem.price >= Number(min) &&
				goodsItem.price <= Number(max)
			);
		} else if (min !== '' && max === '') {
			return goodsItem.price >= Number(min);
		} else if (min === '' && max !== '') {
			return goodsItem.price <= Number(max);
		}
	});
};

export const hotSaleFilter = (goods, value) => {
	return goods.filter((goodsItem) =>{
		if(value) {
			return goodsItem.sale === true
		} else {
			return goodsItem
		}
	})
};
