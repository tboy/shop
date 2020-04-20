Vue.component('Items', {
	props: ['item'],
	template: '<div  class="rect"><img :src="item.img" class="p_img" /><div class="bottomItem"><div class="titleTxt">{{item.title}}</div><div class="price"><div>￥{{item.price}}</div><div>￥{{item.oPrice}}</div></div></div></div>'
})

