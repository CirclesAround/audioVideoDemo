<script>
	import { mapMutations } from "vuex"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			this.initToken()
			this.getPlatform()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations(["initToken","getPlatform"])
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
