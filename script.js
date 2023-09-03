function calcular() {
    // Obtener los valores de los campos de entrada
    var entry_tapas = parseFloat(document.getElementById("tapas").value);
    var entry_fig_canal = parseFloat(document.getElementById("fig_canal").value);
    var entry_m_bajante = parseFloat(document.getElementById("m_bajante").value);
    var entry_n_fig_bajante = parseFloat(document.getElementById("n_fig_bajante").value);
    var entry_m_canal = parseFloat(document.getElementById("m_canal").value);
    var entry_nacimientos = parseFloat(document.getElementById("nacimientos").value);

    // Verificar si los valores son numéricos
    if (isNaN(entry_tapas) || isNaN(entry_fig_canal) || isNaN(entry_m_bajante) || isNaN (entry_n_fig_bajante) || isNaN(entry_m_canal) || isNaN(entry_nacimientos)) {
        alert("Por favor, ingrese números válidos");
        return;
    }

    // PRECIOS

    var BOBINA = 4.3;
    var TAPAS = 	0.63;
    var BAJANTE_2x3 = 	4.09;
    var CODO	 = 1.83;
    var INGLETE	 = 2.14;
    var FALSO_INGLETE = 	2.34;
    var DESVIACIÓN_FRONTAL_2x3 = 2.69;
    var DESVIACIÓN_LATERAL_2x3 = 3.83;
    var FIJACIÓN_DE_BAJANTE_2x3 =0.47;
    var BUZÓN = 	17.98;
    var BAJANTE_REFORZADA = 	15.84;
    var NACIMIENTO_2x3 = 	0.83;
    var BAJANTE_3x4 = 	6.69;
    var NACIMIENTO_3x4 = 	2.4;
    var CODO_3x4 = 	2.62;
    var FIJACIÓN_BAJANTE_3x4 = 	0.57;
    var BAJANTE_80 = 	6.4;
    var BAJANTE_100 = 	6.73;
    var CODO_100 = 	7;
    var FIJACIÓN_DE_CANAL =  	0.39;
    var SOPORTE_DE_TEJA_MIXTO = 	0.97;
    var SOPORTE_DE_TEJA_URALITA = 	0.99;
    var SOPORTE_EXTRIADO = 	0.9;
    var TACO_GOLPE_6x70 = 	0.65;
    var TACO_GOLPE_6x60 = 	0.6;
    var TACO_GOLPE_6x40 = 	0.03;
    var TACO_GOLPE_6x30 = 	0.025;
    var REJILLA = 	5.38;
    var PINCHO_ANTIPÁJARO = 	3.45;
    var SEPARADOR_CORREDERO_200_8 = 	1.03;
    var SEPARADOR_CORREDERO_300_8 = 	1.07;
    var SEPARADOR_7_40 = 	0.86;
    var SEPARADOR_7_60 = 	0.93;
    var DISCO_CORTE_1_0 = 	0.95;
    var DISCO_CORTE_1_6 = 	1.15;
    var POLIURETANO = 	7.86;
    var TACO_QUÍMICO = 	9.43;
    var REMACHES_4 = 	0.018;
    var REMACHES_3_5 = 	0.02;
    var AUTORROSCANTE_4_8x13 = 	0.03;
    var AUTORROSCANTE_5_5x22 = 	0.055;
    var AUTORROSCANTE_5_5x50 = 	0.1;
    var AUTORROSCANTE_5_5x63 = 	0.14;
    var AUTORROSCANTE_5_5x115 = 	0.18;
    var BOBINA_600 = 	11.05;
    var CANALETA_40x60 = 	7.14;

    
    //CALCULAR LOS COSTES DE CADA CONCEPTO

     var canal_metros_calc = entry_m_canal*BOBINA;
     var soporte_teja_mixto_calc = (entry_m_canal/0.7)*SOPORTE_DE_TEJA_MIXTO;
     var tapas_calc = entry_tapas*TAPAS;
     var figuras_canal_calc =entry_fig_canal*INGLETE;
     var bajante_calc = entry_m_bajante*BAJANTE_2x3;
     var fijacion_canal_calc = (entry_m_bajante/1.5)*FIJACIÓN_DE_CANAL;
     var figuras_bajante_calc= entry_n_fig_bajante*CODO_3x4;
     var poliuretano_calc=((0.15*entry_tapas)+(0.5*entry_fig_canal)+(0.1*entry_nacimientos))*POLIURETANO;
     var nacimientos_calc = entry_nacimientos*NACIMIENTO_2x3;
     var remaches_calc = ((12*entry_fig_canal)+((entry_m_bajante/3)*3))*REMACHES_3_5;
     var tacos_golpe=((entry_m_bajante/1.5)*2)*TACO_GOLPE_6x30;


    // CALCULAR LA SUMA DEL TOTAL DE CONCEPTOS
    var suma = canal_metros_calc+soporte_teja_mixto_calc+tapas_calc+figuras_canal_calc+bajante_calc+fijacion_canal_calc+figuras_bajante_calc+poliuretano_calc+nacimientos_calc+remaches_calc+tacos_golpe;

      // Mostrar los resultados
    var resultadosElement = document.querySelector(".resultados");
    resultadosElement.style.display = "block"; // Muestra el elemento

    // Desplazar la página hacia los resultados
    resultadosElement.scrollTo({ top: resultadosElement.offsetTop, behavior: 'smooth' });
     
     

    document.getElementById("show_precio_m_canal").textContent = canal_metros_calc.toFixed(2);
    document.getElementById("show_soporte_teja_mixta").textContent = soporte_teja_mixto_calc.toFixed(2);
    document.getElementById("show_tapas").textContent = tapas_calc.toFixed(2);
    document.getElementById("show_figuras_canal").textContent = figuras_canal_calc.toFixed(2);
    document.getElementById("show_bajante").textContent = bajante_calc.toFixed(2);
    document.getElementById("show_fijacion_canal").textContent = fijacion_canal_calc.toFixed(2);
    document.getElementById("show_figuras_bajante").textContent = figuras_bajante_calc.toFixed(2);
    document.getElementById("show_poliuretano").textContent = poliuretano_calc.toFixed(2);
    document.getElementById("show_nacimientos").textContent = nacimientos_calc.toFixed(2);
    document.getElementById("show_remaches").textContent =remaches_calc.toFixed(2);
    document.getElementById("show_tacos_golpe").textContent = tacos_golpe.toFixed(2);
    //COSTE TOTAL
    document.getElementById("resultado").textContent = suma.toFixed(2);




}
