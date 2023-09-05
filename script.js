
    // Agrega el evento 'click' al botón 'Borrar' para limpiar los campos del formulario
    document.getElementById('borrar').addEventListener('click', function () {
        document.getElementById('soporte').value = '';
        document.getElementById('tapas').value = '';
        document.getElementById('fig_canal').value = '';
        document.getElementById('m_bajante').value = '';
        document.getElementById('n_fig_bajante').value = '';
        document.getElementById('m_canal').value = '';
        document.getElementById('nacimientos').value = '';
        document.getElementById('id_tejado').value = '';
    });



    
    // Array para almacenar los datos
        var datosGuardados = [];

        // Recupera los datos almacenados en localStorage al cargar la página
        document.addEventListener('DOMContentLoaded', function () {
            var nombreGuardado = localStorage.getItem('nombre');
            var tfnoGuardado = localStorage.getItem('tfno');
            var soporteGuardado = localStorage.getItem('soporte');
            var tapasGuardado = localStorage.getItem('tapas');
            var fig_canalGuardado = localStorage.getItem('fig_canal');
            var m_bajanteGuardado = localStorage.getItem('m_bajante');
            var n_fig_bajanteGuardado = localStorage.getItem('n_fig_bajante');
            var m_canalGuardado = localStorage.getItem('m_canal');
            var nacimientosGuardado = localStorage.getItem('nacimientos');
            var id_tejado = localStorage.getItem('id_tejado');

            if (nombreGuardado && tfnoGuardado && soporteGuardado && tapasGuardado && fig_canalGuardado && m_bajanteGuardado && n_fig_bajanteGuardado && m_canalGuardado && nacimientosGuardado && id_tejado) {
                document.getElementById('nombre').value = nombreGuardado;
                document.getElementById('tfno').value = tfnoGuardado;
                document.getElementById('soporte').value = soporteGuardado;
                document.getElementById('tapas').value = tapasGuardado;
                document.getElementById('fig_canal').value = fig_canalGuardado;
                document.getElementById('m_bajante').value = m_bajanteGuardado;
                document.getElementById('n_fig_bajante').value = n_fig_bajanteGuardado;
                document.getElementById('m_canal').value = m_canalGuardado;
                document.getElementById('nacimientos').value = nacimientosGuardado;
                document.getElementById('id_tejado').value = id_tejado;
            }
        });

        // Agrega el evento 'submit' al formulario para guardar datos en el array
        document.getElementById('miFormulario').addEventListener('submit', function (e) {
            e.preventDefault(); // Evita el envío del formulario

            var nombre = document.getElementById('nombre').value;
            var tfno = document.getElementById('tfno').value;
            var soporte = document.getElementById('soporte').value;
            var tapas = document.getElementById('tapas').value;
            var fig_canal = document.getElementById('fig_canal').value;
            var m_bajante = document.getElementById('m_bajante').value;
            var n_fig_bajante = document.getElementById('n_fig_bajante').value;
            var m_canal = document.getElementById('m_canal').value;
            var nacimientos = document.getElementById('nacimientos').value;
            var id_tejado = document.getElementById('id_tejado').value;
            
            
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
            var FIJACIÓN_DE_CANAL =  0.39;
            var SOPORTE_DE_TEJA_MIXTO = 0.97;
            var SOPORTE_DE_TEJA_URALITA = 0.99;
            var SOPORTE_ESTRIADO = 0.9;
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

            //ANTES DE ALMACENAR LOS DATOS EN EL ARRAY, HACEMOS LOS CÁLCULOS
            tapas = tapas*TAPAS;
            //SOPORTE
            var soporte_seleccionado='';
            var soporte_calc = 0;
         
            switch(soporte){
                case "soporte_teja_mixto":
                    soporte_calc = (m_canal/0.7)*SOPORTE_DE_TEJA_MIXTO;
                    soporte_seleccionado = "SOPORTE TEJA MIXTO";
                    break;
                case "soporte_teja_uralita":
                    soporte_calc = (m_canal/0.7)*SOPORTE_DE_TEJA_URALITA;
                    soporte_seleccionado = "SOPORTE TEJA URALITA";
                    break;
                case "soporte_estriado":
                    soporte_calc = (m_canal/0.7)*SOPORTE_ESTRIADO;
                    soporte_seleccionado = "SOPORTE TEJA ESTRIADO";
                    break;
                }
            fig_canal=fig_canal*INGLETE;
            m_bajante = m_bajante*BAJANTE_2x3;
            var fijacion_bajante = (m_bajante/1.5)*FIJACIÓN_DE_BAJANTE_2x3;
            var fijacion_canal = (m_canal/0.7)*FIJACIÓN_DE_CANAL;
            n_fig_bajante= n_fig_bajante*CODO_3x4;
            var poliuretano = ((0.15*tapas)+(0.5*fig_canal)+(0.1*nacimientos))*POLIURETANO;
            nacimientos = nacimientos*NACIMIENTO_2x3;
            var remaches= ((12*fig_canal)+((m_bajante/3)*3))*REMACHES_3_5;
            var tacos_golpe=((m_bajante/1.5)*2)*TACO_GOLPE_6x30;
            var total_coste = 0;
            total_coste = tapas + soporte_calc + fig_canal + m_bajante+ fijacion_bajante + fijacion_canal + n_fig_bajante + poliuretano + nacimientos + remaches + tacos_golpe;
            /*total_coste = 0;
            console.log('tapas: ',tapas);
            console.log(total_coste+=tapas);
            console.log('soporte_calc: ',soporte_calc);
            console.log(total_coste+=soporte_calc);
            console.log('fit_canal ',fig_canal);
            console.log(total_coste+=fig_canal);
            console.log('m_bajante ',m_bajante);
            console.log(total_coste+=m_bajante);
            console.log('fijacion_bajante',fijacion_bajante);
            console.log(total_coste+=fijacion_bajante);
            console.log('fijacion_canal',fijacion_canal);
            console.log(total_coste+=fijacion_canal);
            console.log('n_fig_bajante',n_fig_bajante);
            console.log(total_coste+=n_fig_bajante);
            console.log('poliuretano',poliuretano);
            console.log(total_coste+=poliuretano);
            console.log('nacimientos',nacimientos);
            console.log(total_coste+=nacimientos);
            console.log('remaches',remaches);
            console.log(total_coste+=remaches);
            console.log('tacos_golpe',tacos_golpe);
            console.log(total_coste+=tacos_golpe);*/

            // Comprobar si existe una variable en localStorage para la total_ppto
            let total_ppto = localStorage.getItem('total_ppto');

            // Si no existe, inicializa la total_ppto en 0
            if (total_ppto === null) {
                total_ppto = 0;
            } else {
                // Si existe, convierte el valor almacenado en localStorage a un número
                total_ppto = parseFloat(total_ppto);
            }

            // Realiza la total_ppto
          
            total_ppto += total_coste;

            // Almacena el nuevo valor de total_ppto en localStorage
            localStorage.setItem('total_ppto', total_ppto.toString());

            // Imprime el valor actual de total_ppto
            console.log('Valor actual de total_ppto:', total_ppto);

            // Almacena los datos en el array
            datosGuardados.push({ nombre, tfno,soporte_calc,soporte_seleccionado,tapas,fig_canal,m_bajante,n_fig_bajante,poliuretano,nacimientos,remaches,tacos_golpe,fijacion_canal,fijacion_bajante,id_tejado,total_coste,total_ppto});

            alert('Datos guardados del tejado '+id_tejado);
        });

        // Agrega el evento 'click' al botón 'Mostrar' para mostrar todos los datos almacenados
        document.getElementById('Mostrar').addEventListener('click', function () {
            var listaDatos = document.getElementById('listaDatos');

            listaDatos.innerHTML = ''; // Borra cualquier contenido previo

            if (datosGuardados.length > 0) {
                datosGuardados.forEach(function (dato) {
                    var nombreItem = document.createElement('li');
                    nombreItem.textContent = 
                    'Nombre: ' + dato.nombre + ', Teléfono: ' + dato.tfno + 
                    'Identificación tejado '+dato.id_tejado+
                    dato.soporte_seleccionado+ dato.soporte_calc +
                    ', Tapas: ' + dato.tapas.toFixed(2) + '     '+
                    ', Figuras canal'+ dato.fig_canal.toFixed(2) + '     '+
                    ', Metros bajante: ' + dato.m_bajante.toFixed(2) + '     '+
                    ', Figuras bajante'+ dato.n_fig_bajante.toFixed(2) + '     '+
                    ',Fijación bajante'+dato.fijacion_bajante+
                    ',Fijación canal'+dato.fijacion_canal+
                    ',Poliuretano'+dato.poliuretano.toFixed(2)+ '     '+
                    ', Nacimientos'+ dato.nacimientos.toFixed(2)+ '     '+
                    'Remaches'+dato.remaches.toFixed(2)+ '     '+
                    'Tacos de golpe'+dato.tacos_golpe.toFixed(2)+ '     '+
                    'Total costes '+dato.total_coste.toFixed(2);
                    listaDatos.appendChild(nombreItem);
                    
                    
                });

                // Muestra la sección de datos almacenados
                document.getElementById('datosGuardados').style.display = 'block';
            } else {
                alert('No se encontraron datos almacenados.');
            }
        });
    




    

document.getElementById('imprimir').addEventListener('click', function () {
    var doc = new jsPDF({
        orientation: 'landscape', // Configura la orientación a horizontal
    });
    


    if (datosGuardados.length > 0) {
        datosGuardados.forEach(function (dato,index) {
            const cantidadElementos = datosGuardados.length;
            console.log("La cantidad de elementos en datosGuardados es: " + cantidadElementos);

            // Imprimir los datos en el PDF
            if(index==0){
            doc.text(20, 20, 'Nombre: ' + dato.nombre);
            doc.text(20, 30, 'Teléfono: ' + dato.tfno);
            }
            doc.text(20, 40, 'Identificación tejado: ' + dato.id_tejado);
            doc.text(20, 50, 'Soporte: ' + dato.soporte_seleccionado);
            doc.text(20, 60, 'Soporte Calc: ' + dato.soporte_calc.toFixed(2)+' €');
            doc.text(20, 70, 'Tapas: ' + dato.tapas.toFixed(2)+' €');
            doc.text(20, 80, 'Figuras Canal: ' + dato.fig_canal.toFixed(2)+' €');
            doc.text(20, 90, 'Metros Bajante: ' + dato.m_bajante.toFixed(2)+' €');
            doc.text(20, 100, 'Figuras Bajante: ' + dato.n_fig_bajante.toFixed(2)+' €');
            doc.text(20, 110, 'Poliuretano: ' + dato.poliuretano.toFixed(2)+' €');
            doc.text(20, 120, 'Nacimientos: ' + dato.nacimientos.toFixed(2)+' €');
            doc.text(20, 130, 'Remaches: ' + dato.remaches.toFixed(2)+' €');
            doc.text(20, 140, 'Tacos de Golpe: ' + dato.tacos_golpe.toFixed(2)+' €');
            doc.text(20, 150, 'Fijación bajante ' + dato.fijacion_bajante.toFixed(2)+' €');
            doc.text(20, 160, 'Fijación canal: ' + dato.fijacion_canal.toFixed(2)+' €');
            doc.text(20, 170, 'Total costes: ' + dato.total_coste.toFixed(2)+' €');
            
        


            // Agregar una nueva página después de cada conjunto de datos, excepto la última
            if (index < datosGuardados.length - 1) {
                doc.addPage();
            }else{
                doc.text(180, 180, 'Total presupuesto: ' + dato.total_ppto.toFixed(2)+' €');
            }
        
        });

        // Guardar el PDF
        nombre_cliente = document.getElementById("nombre").value;
        doc.save(nombre_cliente);

    }
});
localStorage.clear();

