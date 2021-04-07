
var app = new Vue(
{
	el: '#root',
	data: {
		emailList: [],
	},
	methods: {

	},
	mounted: function() {
		for (let i = 0; i < 10; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
			.then( (risposta)=>{
				this.emailList.push(risposta.data.response);
			});
		};
	},
}
);
