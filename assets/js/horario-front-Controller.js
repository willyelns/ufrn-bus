var circularInverso = new Vue({
  el: '#circular-inverso',
  data: {
    hora: '10',
    minuto: '50'
  }
})
var circularDireto = new Vue({
  el: '#circular-direto',
  data: {
    hora: '10',
    minuto: '35'
  }
})


//Getting time
var listaDireto= [
			{ hora:'06', minuto:'00', empresa:'Guanabara'},
      { hora:'06', minuto:'10', empresa:'Santa Maria'},
      { hora:'06', minuto:'30', empresa:'Reunidas'},
      { hora:'06', minuto:'35', empresa:'Guanabara'},
      { hora:'06', minuto:'40', empresa:'Guanabara'},
      { hora:'06', minuto:'46', empresa:'Guanabara'},
      { hora:'07', minuto:'00', empresa:'Santa Maria'},
      { hora:'07', minuto:'05', empresa:'Reunidas'},
      { hora:'07', minuto:'10', empresa:'Guanabara'},
      { hora:'07', minuto:'18', empresa:'Guanabara'},
      { hora:'07', minuto:'22', empresa:'Santa Maria'},
			{ hora:'07', minuto:'35', empresa:'Cidade Natal'},
			{ hora:'07', minuto:'40', empresa:'Reunidas'},
			{ hora:'07', minuto:'45', empresa:'Guanabara'},
			{ hora:'08', minuto:'00', empresa:'Santa Maria'},
			{ hora:'08', minuto:'27', empresa:'Cidade Natal'},
			{ hora:'08', minuto:'45', empresa:'Guanabara'},
			{ hora:'08', minuto:'55', empresa:'Guanabara'},
			{ hora:'09', minuto:'15', empresa:'Cidade Natal'},
			{ hora:'09', minuto:'35', empresa:'Guanabara'},
			{ hora:'09', minuto:'45', empresa:'Santa Maria'},
			{ hora:'10', minuto:'05', empresa:'Reunidas'},
			{ hora:'10', minuto:'15', empresa:'Guanabara'},
			{ hora:'10', minuto:'20', empresa:'Guanabara'},
			{ hora:'10', minuto:'25', empresa:'Santa Maria'},
			{ hora:'10', minuto:'35', empresa:'Reunidas'},
			{ hora:'10', minuto:'55', empresa:'Guanabara'},
			{ hora:'11', minuto:'00', empresa:'Cidade Natal'},
			{ hora:'11', minuto:'04', empresa:'Guanabara'},
			{ hora:'11', minuto:'08', empresa:'Santa Maria'},
			{ hora:'11', minuto:'16', empresa:'Reunidas'},
			{ hora:'11', minuto:'30', empresa:'Guanabara'},
			{ hora:'11', minuto:'35', empresa:'Cidade Natal'},
			{ hora:'11', minuto:'38', empresa:'Guanabara'},
			{ hora:'11', minuto:'43', empresa:'Santa Maria'},
			{ hora:'11', minuto:'51', empresa:'Reunidas'},
			{ hora:'12', minuto:'05', empresa:'Guanabara'},
			{ hora:'12', minuto:'10', empresa:'Cidade Natal'},
			{ hora:'12', minuto:'15', empresa:'Guanabara'},
			{ hora:'12', minuto:'20', empresa:'Santa Maria'},
			{ hora:'12', minuto:'30', empresa:'Reunidas'},
			{ hora:'12', minuto:'45', empresa:'Guanabara'},
			{ hora:'12', minuto:'52', empresa:'Cidade Natal'},
			{ hora:'12', minuto:'59', empresa:'Guanabara'},
			{ hora:'13', minuto:'06', empresa:'Santa Maria'},
			{ hora:'13', minuto:'19', empresa:'Reunidas'},
			{ hora:'13', minuto:'40', empresa:'Guanabara'},
			{ hora:'13', minuto:'47', empresa:'Cidade Natal'},
			{ hora:'13', minuto:'54', empresa:'Guanabara'},
			{ hora:'14', minuto:'01', empresa:'Santa Maria'},
			{ hora:'14', minuto:'15', empresa:'Reunidas'},
			{ hora:'14', minuto:'36', empresa:'Guanabara'},
			{ hora:'14', minuto:'43', empresa:'Cidade Natal'},
			{ hora:'14', minuto:'50', empresa:'Guanabara'},
			{ hora:'14', minuto:'57', empresa:'Santa Maria'},
			{ hora:'15', minuto:'11', empresa:'Reunidas'},
			{ hora:'15', minuto:'32', empresa:'Guanabara'},
			{ hora:'15', minuto:'39', empresa:'Cidade Natal'},
			{ hora:'15', minuto:'46', empresa:'Guanabara'},
			{ hora:'15', minuto:'53', empresa:'Santa Maria'},
			{ hora:'16', minuto:'06', empresa:'Reunidas'},
			{ hora:'16', minuto:'24', empresa:'Cidade Natal'},
			{ hora:'16', minuto:'30', empresa:'Guanabara'},
			{ hora:'16', minuto:'42', empresa:'Reunidas'},
			{ hora:'17', minuto:'00', empresa:'Cidade Natal'},
			{ hora:'17', minuto:'05', empresa:'Guanabara'},
			{ hora:'17', minuto:'10', empresa:'Guanabara'},
			{ hora:'17', minuto:'20', empresa:'Reunidas'},
			{ hora:'17', minuto:'30', empresa:'Santa Maria'},
			{ hora:'17', minuto:'40', empresa:'Cidade Natal'},
			{ hora:'17', minuto:'45', empresa:'Guanabara'},
			{ hora:'17', minuto:'50', empresa:'Guanabara'},
			{ hora:'17', minuto:'55', empresa:'Reunidas'},
			{ hora:'18', minuto:'07', empresa:'Santa Maria'},
			{ hora:'18', minuto:'21', empresa:'Cidade Natal'},
			{ hora:'18', minuto:'29', empresa:'Guanabara'},
			{ hora:'18', minuto:'36', empresa:'Guanabara'},
			{ hora:'18', minuto:'43', empresa:'Santa Maria'},
			{ hora:'18', minuto:'58', empresa:'Cidade Natal'},
			{ hora:'19', minuto:'06', empresa:'Guanabara'},
			{ hora:'19', minuto:'22', empresa:'Santa Maria'},
			{ hora:'19', minuto:'30', empresa:'Reunidas'},
			{ hora:'19', minuto:'50', empresa:'Guanabara'},
			{ hora:'20', minuto:'08', empresa:'Santa Maria'},
			{ hora:'20', minuto:'16', empresa:'Reunidas'},
			{ hora:'20', minuto:'24', empresa:'Guanabara'},
			{ hora:'20', minuto:'50', empresa:'Guanabara'},
			{ hora:'21', minuto:'00', empresa:'Cidade Natal'},
			{ hora:'21', minuto:'20', empresa:'Santa Maria'},
			{ hora:'21', minuto:'30', empresa:'Reunidas'},
			{ hora:'21', minuto:'40', empresa:'Guanabara'},
			{ hora:'22', minuto:'05', empresa:'Cidade Natal'},
			{ hora:'22', minuto:'15', empresa:'Guanabara'},
			{ hora:'22', minuto:'40', empresa:'Cidade Natal'},
			{ hora:'22', minuto:'50', empresa:'Guanabara'},
]
var proximoHorario = [];
listaDireto.forEach(function(item){
  if(new Date().getHours() == item.hora){
  	//console.log(item.hora + ":" + item.minuto);
    if(new Date().getMinutes() <= item.minuto){
    	console.log(item.hora + ":" + item.minuto);
      proximoHorario.push(item);
    }
  }
});
var app = new Vue({
  el: '#app',
  data: {
    horaAtual: new Date().getHours() + ':' + new Date().getMinutes(),
    proximoCircularHora: proximoHorario[0].hora,
    proximoCircularMinuto: proximoHorario[0].minuto,
    proximoCircularEmpresa: proximoHorario[0].empresa,
    horaAtualizada: ""
  },
  methods: {
  	atualizaTempo: function(){
      this.horaAtualizada = this.addZero(new Date().getHours()) + ":" + this.addZero(new Date().getMinutes()) + ":" + this.addZero(new Date().getSeconds());
			setTimeout(this.atualizaTempo,1000);		    
		},
    addZero: function(number){
    	if(number < "10"){
      	return number = "0"+ number;
      }
    }
  },
  beforeMount(){
    this.atualizaTempo()
 }
});
