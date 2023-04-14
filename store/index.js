import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const HOST = 'https://api-demo.qnsdk.com'
// const PREFIX = '/v1/rtc'
// const API = {
// 	LIST_USERS: (appid, roomid) =>
// 		`${HOST}${PREFIX}/users/app/${appid}/room/${roomid}`,
// 	GET_APP_CONFIG: (appid) =>
// 		`${HOST}${PREFIX}/app/${appid}`,
// 	JOIN_ROOM_TOKEN: (roomid, userid, appid) =>
// 		`${HOST}${PREFIX}/token/app/${appid}/room/${roomid}/user/${userid}`,
// 	CREATE_ROOM_TOKEN: (roomid, userid, appid) =>
// 		`${HOST}${PREFIX}/token/admin/app/${appid}/room/${roomid}/user/${userid}`,
// }

const store = new Vuex.Store({
	state: {
		token: "",
		appID: "h0gyxvd10",
		userName: "2222",
		roomID: "audioVideoDemo",
		policy: "forceUDP",
		logLevel: "info",
		stereo: 0,
		bwePolicy: "TCC",
		allowAudioMixWithOthers: 1,
		hWCodecEnabled: 1,
		maintainResolution: 0,
		fieldTrials: "",
		encoderQualityMode: 0,
		isAEC3Enabled: 1,
		multiStreamEnable: 0,
		platform: "", // 手机机型 ios还是android
		encodeWidth: 640,
		encodeHeight: 480,
		captureHeight: 480,
		captureWidth: 640,
		statusBarHeight: 0, // 状态栏高度
		pixelRatio: 0, // 分辨率
		screenWidth: 0, // 屏幕宽度，单位px
		screenHeight: 0 // 屏幕高度，单位px
	},
	mutations: {
		setEncodeWidth(state, payload) {
			state.encodeWidth = payload
		},
		setEncodeHeight(state, payload) {
			state.encodeHeight = payload
		},
		setCaptureHeight(state, payload) {
			state.captureHeight = payload
		},
		setCaptureWidth(state, payload) {
			state.captureWidth = payload
		},
		setToken(state, payload) {
			state.token = payload
		},
		setPolicy(state, payload) {
			console.log(payload)
			state.policy = payload.detail.value
		},
		setMultiStreamEnable(state, payload) {
			console.log(payload)
			state.multiStreamEnable = payload.detail.value
		},
		setLogLevel(state, payload) {
			state.logLevel = payload.detail.value
		},
		setStereo(state, payload) {
			state.stereo = payload.detail.value
		},
		setBwePolicy(state, payload) {
			state.bwePolicy = payload.detail.value
		},
		setAllowAudioMixWithOthers(state, payload) {
			state.allowAudioMixWithOthers = payload.detail.value
		},
		setHWCodecEnabled(state, payload) {
			state.hWCodecEnabled = payload.detail.value
		},
		setMaintainResolution(state, payload) {
			state.maintainResolution = payload.detail.value
		},
		setFieldTrials(state, payload) {
			state.fieldTrials = payload
		},
		setEncoderQualityMode(state, payload) {
			state.encoderQualityMode = payload.detail.value
		},
		setIsAEC3Enabled(state, payload) {
			state.isAEC3Enabled = payload.detail.value
		},
		initToken(state) {
			if (!/^[a-zA-Z0-9_-]{1,50}$/.test(state.userName)) {
				uni.showModal({
					content: '用户名限制 1~50 个字符，并且只能包含字母、数字或下划线'
				})
			} else if (!/^[a-zA-Z0-9_-]{1,64}$/.test(state.roomID)) {
				uni.showModal({
					content: '房间名限制 1~64 个字符，并且只能包含字母、数字或下划线'
				})
			} else {
				// let member = uni.getStorageSync('audioDemoMemberToken')
				// if (member) { // 有缓存当前登录人的token信息
				// 	// store.commit('setToken', JSON.parse(roomToken))
				// 	uni.request({
				// 		url: `http://community-test.xy22.cn/api/rtc/token?room_name=${state.roomID}`,
				// 		header: {
				// 			'member-auth': JSON.parse(member)
				// 		},
				// 		method: 'GET',
				// 		success: res => {
				// 			if (res.data.code === 1) {
				// 				state.token = res.data.data.token
				// 			}
				// 		},
				// 		fail: err => {
				// 			console.log(err)
				// 		}
				// 	})

				// } else {
				uni.request({
					url: 'http://community-test.xy22.cn/portal/get/token?auth=asdhks8ahd362is95a3h0disahdkusadhs&uid=162970',
					success: res => {
						if (res.data.code === 1) {
							uni.setStorageSync('audioDemoMemberToken', JSON.stringify(res.data
								.data.token))
							let requestURL =
								`http://community-test.xy22.cn/api/rtc/token?room_name=${state.roomID}`
							uni.request({
								url: requestURL,
								header: {
									'member-auth': res.data.data.token
								},
								method: 'GET',
								success: res => {
									if (res.data.code === 1) {
										state.token = res.data.data.token
										// uni.setStorageSync('audioDemoRoomToken',
										// 	JSON.stringify(res.data.data.token))
										console.log(state.token, '房间的token')
									}
								},
								fail: err => {
									console.log(err)
								}
							})
						}
					}
				})
				// }

			}
		},
		getPlatform(state) {
			let data = uni.getSystemInfoSync()
			console.log(data, '系统')
			state.platform = data.platform // 手机机型
			state.statusBarHeight = data.statusBarHeight // 状态栏高度
			state.screenWidth = data.screenWidth // 屏幕宽度，单位px
			state.pixelRatio = data.pixelRatio // 分辨率
			state.screenHeight = data.screenHeight - (data.statusBarHeight * data.pixelRatio) // 屏幕高度，单位px
		}
	},
	actions: {
		setUserName({
			state,
			commit
		}, payload) {
			state.userName = payload
			commit("initToken")
		},
		setAppID({
			state,
			commit
		}, payload) {
			state.appID = payload
			commit("initToken")
		},
		setRoomID({
			state,
			commit
		}, payload) {
			state.roomID = payload
			commit("initToken")
		}
	}
})
export default store