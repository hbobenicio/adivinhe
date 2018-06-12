/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Controller da página
 */
var advinheCtrl = {
	DicaInicial: "O número mágico é <span style='color: rgb(255, 165, 165);'>maior que 0</span> e <span style='color: rgb(255, 165, 165);'>menor que 1000</span>.",
	DicaPalpitePequeno: "O número mágico é <span style='color: rgb(255, 165, 165);'>maior</span> que seu palpite.",
	DicaPalpiteGrande: "O número mágico é <span style='color: rgb(255, 165, 165);'>menor</span> que seu palpite.",
	DicaPalpiteCerto: "<span style='color: rgb(255, 165, 165);'>Parabéns</span>, você acertou o número mágico!",

	contadorPalpites: 0,

	novoJogo: function() {
		this.playNovoJogo();

		this.contadorPalpites = 0;
		$("#qtdPalpites").html("0");

		var numeroMagico = getRandomInt(1, 999);
		var $numeroMagico = $("#numeroMagico");
		$numeroMagico.val(numeroMagico.toString());
		this.definirDica(this.DicaInicial);
		this.selecionarPalpite();
	},

	getNumeroMagico: function() {
		var $numeroMagico = $("#numeroMagico");
		return parseInt($numeroMagico.val());
	},

	getPalpite: function() {
		var $palpite = $("#palpite");
		return parseInt($palpite.val());
	},

	definirDica: function(dica) {
		var $dica = $("#dica");
		$dica.html(dica);
	},

	selecionarPalpite: function() {
		$("#palpite").select();
	},

	incrementarPalpite: function() {
		this.contadorPalpites++;
		var $qtdPalpites = $("#qtdPalpites");
		$qtdPalpites.html(this.contadorPalpites.toString());
	},

	playNo: function() {
		$("#audioNo").get(0).play();
	},

	playVictory: function() {
		$("#audioVictory").get(0).play();
	},

	playNovoJogo: function() {
		$("#audioNovoJogo").get(0).play();
	},

	onKeyUp: function(event) {
		if (event.keyCode == 13) {
			$("#btnPalpite").click();
		}
	},

	onPalpite: function(e) {
		var ctrl = advinheCtrl;
		var numeroMagico = ctrl.getNumeroMagico();
		var palpite = ctrl.getPalpite();

		ctrl.incrementarPalpite();

		if (palpite < numeroMagico) {
			ctrl.playNo();
			ctrl.definirDica(ctrl.DicaPalpitePequeno);
			ctrl.selecionarPalpite();
		} else if (palpite > numeroMagico) {
			ctrl.playNo();
			ctrl.definirDica(ctrl.DicaPalpiteGrande);
			ctrl.selecionarPalpite();
		} else {
			ctrl.playVictory();
			ctrl.definirDica(ctrl.DicaPalpiteCerto);
			if (confirm("Parabéns! Você acertou o número mágico " + numeroMagico.toString() + " em " + ctrl.contadorPalpites.toString() + " palpites. Deseja ver sua premiação agora?")) {
				//ctrl.novoJogo();
        window.location.href = "final.html";
			}
		}
	}
}

/**
 * jQuery onDocumentReady
 */
$(document).ready(function(){
	advinheCtrl.novoJogo();

// 	var video = $("#videoFinal").get(0);
// 	if (video.requestFullscreen) {
// 	  video.requestFullscreen();
// 	} else if (video.mozRequestFullScreen) {
// 	  video.mozRequestFullScreen();
// 	} else if (video.webkitRequestFullscreen) {
// 	  video.webkitRequestFullscreen();
// 	}


	$("#btnPalpite").click(advinheCtrl.onPalpite);
	$("#palpite").keyup(advinheCtrl.onKeyUp);
});
