Vue.component('Navs', {
	props: ['titl'],
	template: '<header style="border-bottom:1px solid #f2f2f2;background-color: #FFFFFF;box-shadow:0 0 0 #fff" class="mui-bar mui-bar-nav"><a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" style="color:#999;"></a><h1 class="mui-title" style="text-align: left;font-size:15px;color:#1e1e1e;">{{titl}}</h1></header>'
})
