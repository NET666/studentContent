new Vue({
	el: "#app",
	data: function() {
		return {
			userInfo: { // 添加用户信息
				name: '',
				gender: '',
				wxNum: '',
				birthday: ''
			},
			editObj: { 
				name: '',
				gender: '',
				wxNum: '',
				birthday: ''
			},
			tableData: [{
				name: '王小虎',
				gender:'男',
				wxNum:'404notFound',
				birthday:'1997-12-18'
			}],
			dialogVisible: false, // 弹窗显示
			unserIndex:0
		}
	},
	methods: {
		// 添加用户信息
		addUser() {
			if(!this.userInfo.name || !this.userInfo.gender || !this.userInfo.wxNum || !this.userInfo.birthday) {
				this.$message({
					message:"请把信息填写完整/不能留空",
					type:"warning"
				})
				return
			}
			this.tableData.push(this.userInfo)
			// 清空
			this.userInfo = {name: '', gender: '', wxNum: '', birthday: ''}
		},
		//删除
		delUser(index) {
			this.$confirm('确认删除？').then(_ => {
			        this.tableData.splice(index,1)
			}).catch(_ => {});
		},
		// 关闭弹窗(右上角×按钮)
		handleClose() {
			this.dialogVisible = false
		},
		// 编辑数据
		editUser(itme,idx) {
			this.unserIndex = idx
			this.editObj = {name: itme.name, gender: itme.gender, wxNum: itme.wxNum, birthday: itme.birthday}
			this.dialogVisible = true
		},
		confirm() {
			this.dialogVisible = false
			// 下面的方法不可以，虽然事件可以监听到但不能及时渲染到页面上去
			//this.tableData[this.unserIndex] = this.editObj
			 // Vue对象提供的静态方法
			Vue.set(this.tableData,this.unserIndex,this.editObj)
		}
	}
})
