$(function () {
    $("#puntos_div").hide();
    $("#dia_div").hide();
    $("#empaques_div").hide();
    $("#premios_div").hide();

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $.ajax({
        url: "data_premio",
        method: "POST",
        dataType: "json",
    }).done(function (data) {
    let labels_premio = [];
            $.each(data[0].ganadoragrupado, function (key, value) {
                labels_premio.push(value.nom_producto);
            });

            buscar_premios(labels_premio);
    }).fail(function () {
        alert("Ocurrió un error, intenta ingresar más tarde");
    }).always(function () {});

    $("#btn_inicio").click(function () {
        $("#puntos_div").hide();
        $("#dia_div").hide();
        $("#empaques_div").hide();
        $("#premios_div").show();
    });

    $("#btn_dia").click(function () {
        $("#puntos_div").hide();
        $("#premios_div").hide();
        $("#empaques_div").hide();

        $("#dia_div").show();
    });

    $("#btn_empaques").click(function () {
        $("#dia_div").hide();
        $("#premios_div").hide();
        $("#puntos_div").hide();

        $("#empaques_div").show();
    });

    $("#btn_puntos").click(function () {
        $("#dia_div").hide();
        $("#premios_div").hide();
        $("#empaques_div").hide();
        $("#puntos_div").show();
        buscar_puntos();
    });


    // PREMIO
    function buscar_premios(data) {
        var unicos = data.filter(function (e) {
            return data[e] ? false : (data[e] = true);
        });

        //Combo Frisby mas papas y Gaseosa
        var frisby = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == unicos[0]) {
                frisby = frisby + 1;
            }
        }

        //Bono Tren de la Sabana
        var tren = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == unicos[1]) {
                tren = tren + 1;
            }
        }

        //Bono Brazalete Parque Jaime Duque
        var jaime = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == unicos[2]) {
                jaime = jaime + 1;
            }
        }

        //Bono Combo El Corral
        var corral = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == unicos[3]) {
                corral = corral + 1;
            }
        }

        //Monserrate, funicular o teleferico
        var monserrate = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == unicos[4]) {
                monserrate = monserrate + 1;
            }
        }

        var values = [frisby, tren, jaime, corral, monserrate];
        pintar_premios(unicos, values);
    }

    function pintar_premios(labels, values) {
        var ctx = document.getElementById("premio_graf").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Redenciones por premio",
                        data: values,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        buscar_empaques();
    }


    // DÍA
    function buscar_dia() {

    }

    function pintar_dias(labels, values) {

    }


    // EMPAQUES
    function buscar_empaques()
    {
        $.ajax({
            url: "data",
            method: "POST",
            dataType: "json",
        }).done(function (data) {
                var all = data[0].ganador;
                var unicos = all.filter(function (e) {
                    return all[e.titulo] ? false : (all[e.titulo] = true);
                });

                //Corona Tradicional Pastilla<br/>Individual de 31.25 gramos
                var cont_1 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[0].titulo) {
                        cont_1 = cont_1+1;
                    }
                }

                //Tradicional 1000 gramos
                var cont_2 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[1].titulo) {
                        cont_2 = cont_2+1;
                    }
                }

                //Tradicional 125 gramos
                var cont_3 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[2].titulo) {
                        cont_3 = cont_3+1;
                    }
                }

                //Tradicional 250 gramos
                var cont_4 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[3].titulo) {
                        cont_4 = cont_4+1;
                    }
                }

                //Tradicional 500 gramos
                var cont_5 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[4].titulo) {
                        cont_5 = cont_5+1;
                    }
                }

                //Tradicional 50 gramos
                var cont_6 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[5].titulo) {
                        cont_6 = cont_6+1;
                    }
                }

                //Tradicional 850 gramos
                var cont_7 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[6].titulo) {
                        cont_7 = cont_7+1;
                    }
                }

                //Corona Tradicional 500 gramos (16 pastillas)
                var cont_8 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[7].titulo) {
                        cont_8 = cont_8+1;
                    }
                }

                //Corona Tradicional pastilla<br/>individual de 25 gramos
                var cont_9 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[8].titulo) {
                        cont_9 = cont_9+1;
                    }
                }

                //Canela 250 gramos
                var cont_10 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[9].titulo) {
                        cont_10 = cont_10+1;
                    }
                }

                //Corona Clavos y Canela 500 gramos
                var cont_11 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[10].titulo) {
                        cont_11 = cont_11+1;
                    }
                }

                //Corona Vainilla 500g
                var cont_12 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[11].titulo) {
                        cont_12 = cont_12+1;
                    }
                }

                //Corona Tradicional 500 gramos (20 pastillas)
                var cont_13 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[12].titulo) {
                        cont_13 = cont_13+1;
                    }
                }

                //Tradicional 400 gramos
                var cont_14 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[13].titulo) {
                        cont_14 = cont_14+1;
                    }
                }

                //Tradicional 600 gramos
                var cont_15 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[14].titulo) {
                        cont_15 = cont_15+1;
                    }
                }

                //Corona Tradicional 250 gramos (8 pastillas)
                var cont_16 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[15].titulo) {
                        cont_16 = cont_16+1;
                    }
                }

                //Corona Tradicional 250g (10 pastillas)
                var cont_17 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[16].titulo) {
                        cont_17 = cont_17+1;
                    }
                }

                //Corona Bogotano 250 gramos
                var cont_18 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[17].titulo) {
                        cont_18 = cont_18+1;
                    }
                }

                //Corona Vainilla 250g
                var cont_19 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[18].titulo) {
                        cont_19 = cont_19+1;
                    }
                }

                //Corona Cruz 250 gramos
                var cont_20 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[19].titulo) {
                        cont_20 = cont_20+1;
                    }
                }

                //Corona Delicatto 142 gramos
                var cont_21 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[20].titulo) {
                        cont_21 = cont_21+1;
                    }
                }

                //Tradicional 20 gramos
                var cont_22 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[21].titulo) {
                        cont_22 = cont_22+1;
                    }
                }

                //Mocca 120 gramos
                var cont_23 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[22].titulo) {
                        cont_23 = cont_23+1;
                    }
                }

                //Corona Clavos y Canela 250 gramos
                var cont_24 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[23].titulo) {
                        cont_24 = cont_24+1;
                    }
                }

                //Caja de Cápsulas<br/>Express Nutresa
                var cont_25 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[24].titulo) {
                        cont_25 = cont_25+1;
                    }
                }

                //Corona Tesalia 125 gramos
                var cont_26 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[25].titulo) {
                        cont_26 = cont_26+1;
                    }
                }

                //Vainilla 120 gramos
                var cont_27 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[26].titulo) {
                        cont_27 = cont_27+1;
                    }
                }

                //Corona Cocoa 230 gramos
                var cont_28 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[27].titulo) {
                        cont_28 = cont_28+1;
                    }
                }

                //Vive 450 gramos
                var cont_29 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[28].titulo) {
                        cont_29 = cont_29+1;
                    }
                }

                //Tradicional 300 gramos
                var cont_30 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[29].titulo) {
                        cont_30 = cont_30+1;
                    }
                }

                //Corona Cruz 125 gramos
                var cont_31 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[30].titulo) {
                        cont_31 = cont_31+1;
                    }
                }

                //Descafeinado 250 gramos
                var cont_32 = 0;
                for (var i = 0; i < all.lenvalues_vargth; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[31].titulo) {
                        cont_32 = cont_32+1;
                    }
                }

                //Corona Flash  1000 gramos
                var cont_33 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[32].titulo) {
                        cont_33 = cont_33+1;
                    }
                }

                //Corona Clavos y Canela<br/>Pastilla Individual 31.25 gramos
                var cont_34 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[33].titulo) {
                        cont_34 = cont_34+1;
                    }
                }

                //Corona para llevar 30 gramos
                var cont_35 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[34].titulo) {
                        cont_35 = cont_35+1;
                    }
                }

                //Corona Flash  200 gramos
                var cont_36 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[35].titulo) {
                        cont_36 = cont_36+1;
                    }
                }

                //Corona Vainilla Pastilla<br/>Individual 31.25 gramos
                var cont_37 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[36].titulo) {
                        cont_37 = cont_37+1;
                    }
                }

                //Corona Flash  500 gramos
                var cont_38 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[37].titulo) {
                        cont_38 = cont_38+1;
                    }
                }

                //Corona Tradicional 375 gramos
                var cont_39 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[38].titulo) {
                        cont_39 = cont_39+1;
                    }
                }

                //Corona Bogotano Pastilla<br/>Individual 31.25 gramos
                var cont_40 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[39].titulo) {
                        cont_40 = cont_40+1;
                    }
                }

                //Corona Flash  950 gramos
                var cont_41 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[40].titulo) {
                        cont_41 = cont_41+1;
                    }
                }

                //Corona Bogotano 500 gramos
                var cont_42 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[41].titulo) {
                        cont_42 = cont_42+1;
                    }
                }

                //Corona Tesalia 250 gramos
                var cont_43 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[42].titulo) {
                        cont_43 = cont_43+1;
                    }
                }

                //Corona Cruz Pastilla<br/>Individual 31.25 gramos
                var cont_44 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[43].titulo) {
                        cont_44 = cont_44+1;
                    }
                }

                //Corona con Colcafé 375 gramos
                var cont_45 = 0;
                for (var i = 0; i < all.length; i++) {
                    var empaque = all[i].titulo;
                    if (empaque == unicos[44].titulo) {
                        cont_45 = cont_45+1;
                    }
                }

                var values_var = [cont_1, cont_2, cont_3, cont_4, cont_5, cont_6, cont_7, cont_8, cont_9, cont_10,
                    cont_11, cont_12, cont_13, cont_14, cont_15, cont_16, cont_17, cont_18, cont_19, cont_29, cont_21, cont_22,
                    cont_23, cont_24, cont_25, cont_26, cont_27, cont_28, cont_29, cont_30, cont_31, cont_32, cont_33, cont_34,
                    cont_35, cont_36, cont_37, cont_38, cont_39, cont_40, cont_41, cont_42, cont_43, cont_44, cont_45];

                var labels_var = [];
                for (var i = 0; i < unicos.length; i++) {
                    labels_var[i] = unicos[i].titulo;
                }
                pintar_empaques(labels_var, values_var);
        }).fail(function () {
            alert("Ocurrió un error, intenta ingresar más tarde");
        }).always(function () {});
    }

    function pintar_empaques(labels, values) {
        var ctx = document.getElementById("empaques_graf").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Redenciones por empaques",
                        data: values,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        $("#loader_div").hide();
        $("#btn_inicio").trigger("click");
        //buscar_empaques();
    }


    // PUNTOS
    function buscar_puntos() {
        $.ajax({
            url: "data",
            method: "POST",
            dataType: "json",
        }).done(function (data) {
                var all = data[0].ganador;
                var unicos = all.filter(function (e) {
                    return all[e.nom_oficina] ? false : (all[e.nom_oficina] = true);
                });

                var cont_1 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[0].nom_oficina) {
                        cont_1 = cont_1+1;
                    }
                }

                var cont_2 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[1].nom_oficina) {
                        cont_2 = cont_2+1;
                    }
                }

                var cont_3 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[2].nom_oficina) {
                        cont_3 = cont_3+1;
                    }
                }

                var cont_4 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[3].nom_oficina) {
                        cont_4 = cont_4+1;
                    }
                }

                var cont_5 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[4].nom_oficina) {
                        cont_5 = cont_5+1;
                    }
                }

                var cont_6 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[5].nom_oficina) {
                        cont_6 = cont_6+1;
                    }
                }

                var cont_7 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[6].nom_oficina) {
                        cont_7 = cont_7+1;
                    }
                }

                var cont_8 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[7].nom_oficina) {
                        cont_8 = cont_8+1;
                    }
                }

                var cont_9 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[8].nom_oficina) {
                        cont_9 = cont_9+1;
                    }
                }

                var cont_10 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[9].nom_oficina) {
                        cont_10 = cont_10+1;
                    }
                }

                var cont_11 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[10].nom_oficina) {
                        cont_11 = cont_11+1;
                    }
                }

                var cont_12 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[11].nom_oficina) {
                        cont_12 = cont_12+1;
                    }
                }

                var cont_13 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[12].nom_oficina) {
                        cont_13 = cont_13+1;
                    }
                }

                var cont_14 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[13].nom_oficina) {
                        cont_14 = cont_14+1;
                    }
                }

                var cont_15 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[14].nom_oficina) {
                        cont_15 = cont_15+1;
                    }
                }

                var cont_16 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[15].nom_oficina) {
                        cont_16 = cont_16+1;
                    }
                }

                var cont_17 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[16].nom_oficina) {
                        cont_17 = cont_17+1;
                    }
                }

                var cont_18 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[17].nom_oficina) {
                        cont_18 = cont_18+1;
                    }
                }

                var cont_19 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[18].nom_oficina) {
                        cont_19 = cont_19+1;
                    }
                }

                var cont_20 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[19].nom_oficina) {
                        cont_20 = cont_20+1;
                    }
                }

                var cont_21 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[20].nom_oficina) {
                        cont_21 = cont_21+1;
                    }
                }

                var cont_22 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[21].nom_oficina) {
                        cont_22 = cont_22+1;
                    }
                }

                var cont_23 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[22].nom_oficina) {
                        cont_23 = cont_23+1;
                    }
                }

                var cont_24 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[23].nom_oficina) {
                        cont_24 = cont_24+1;
                    }
                }

                var cont_25 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[24].nom_oficina) {
                        cont_25 = cont_25+1;
                    }
                }

                var cont_26 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[25].nom_oficina) {
                        cont_26 = cont_26+1;
                    }
                }

                var cont_27 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[26].nom_oficina) {
                        cont_27 = cont_27+1;
                    }
                }

                var cont_28 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[27].nom_oficina) {
                        cont_28 = cont_28+1;
                    }
                }

                var cont_29 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[28].nom_oficina) {
                        cont_29 = cont_29+1;
                    }
                }

                var cont_30 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[29].nom_oficina) {
                        cont_30 = cont_30+1;
                    }
                }

                var cont_31 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[30].nom_oficina) {
                        cont_31 = cont_31+1;
                    }
                }

                var cont_32 = 0;
                for (var i = 0; i < all.lenvalues_vargth; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[31].nom_oficina) {
                        cont_32 = cont_32+1;
                    }
                }

                var cont_33 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[32].nom_oficina) {
                        cont_33 = cont_33+1;
                    }
                }

                var cont_34 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[33].nom_oficina) {
                        cont_34 = cont_34+1;
                    }
                }

                var cont_35 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[34].nom_oficina) {
                        cont_35 = cont_35+1;
                    }
                }

                var cont_36 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[35].nom_oficina) {
                        cont_36 = cont_36+1;
                    }
                }

                var cont_37 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[36].nom_oficina) {
                        cont_37 = cont_37+1;
                    }
                }

                var cont_38 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[37].nom_oficina) {
                        cont_38 = cont_38+1;
                    }
                }

                var cont_39 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[38].nom_oficina) {
                        cont_39 = cont_39+1;
                    }
                }

                var cont_40 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[39].nom_oficina) {
                        cont_40 = cont_40+1;
                    }
                }

                var cont_41 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[40].nom_oficina) {
                        cont_41 = cont_41+1;
                    }
                }

                var cont_42 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[41].nom_oficina) {
                        cont_42 = cont_42+1;
                    }
                }

                var cont_43 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[42].nom_oficina) {
                        cont_43 = cont_43+1;
                    }
                }

                var cont_44 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[43].nom_oficina) {
                        cont_44 = cont_44+1;
                    }
                }

                var cont_45 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[44].nom_oficina) {
                        cont_45 = cont_45+1;
                    }
                }

                var cont_46 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[45].nom_oficina) {
                        cont_46 = cont_46+1;
                    }
                }

                var cont_47 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[46].nom_oficina) {
                        cont_47 = cont_47+1;
                    }
                }

                var cont_48 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[47].nom_oficina) {
                        cont_48 = cont_48+1;
                    }
                }

                var cont_49 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[48].nom_oficina) {
                        cont_49 = cont_49+1;
                    }
                }

                var cont_50 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[49].nom_oficina) {
                        cont_50 = cont_50+1;
                    }
                }

                var cont_51 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[50].nom_oficina) {
                        cont_51 = cont_51+1;
                    }
                }

                var cont_52 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[51].nom_oficina) {
                        cont_52 = cont_52+1;
                    }
                }

                var cont_53 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[52].nom_oficina) {
                        cont_53 = cont_53+1;
                    }
                }

                var cont_54 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[53].nom_oficina) {
                        cont_54 = cont_54+1;
                    }
                }

                var cont_55 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[54].nom_oficina) {
                        cont_55 = cont_55+1;
                    }
                }

                var cont_56 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[55].nom_oficina) {
                        cont_56 = cont_56+1;
                    }
                }

                var cont_57 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[56].nom_oficina) {
                        cont_57 = cont_57+1;
                    }
                }

                var cont_58 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[57].nom_oficina) {
                        cont_58 = cont_58+1;
                    }
                }

                var cont_59 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[58].nom_oficina) {
                        cont_59 = cont_59+1;
                    }
                }

                var cont_60 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[59].nom_oficina) {
                        cont_60 = cont_60+1;
                    }
                }

                var cont_61 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[60].nom_oficina) {
                        cont_61 = cont_61+1;
                    }
                }

                var cont_62 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[61].nom_oficina) {
                        cont_62 = cont_62+1;
                    }
                }

                var cont_63 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[62].nom_oficina) {
                        cont_63 = cont_63+1;
                    }
                }

                var cont_64 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[63].nom_oficina) {
                        cont_64 = cont_64+1;
                    }
                }

                var cont_65 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[64].nom_oficina) {
                        cont_65 = cont_65+1;
                    }
                }

                var cont_66 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[65].nom_oficina) {
                        cont_66 = cont_66+1;
                    }
                }

                var cont_67 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[66].nom_oficina) {
                        cont_67 = cont_67+1;
                    }
                }

                var cont_68 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[67].nom_oficina) {
                        cont_68 = cont_68+1;
                    }
                }

                var cont_69 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[68].nom_oficina) {
                        cont_69 = cont_69+1;
                    }
                }

                var cont_70 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[69].nom_oficina) {
                        cont_70 = cont_70+1;
                    }
                }

                var cont_71 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[70].nom_oficina) {
                        cont_71 = cont_71+1;
                    }
                }

                var cont_72 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[71].nom_oficina) {
                        cont_72 = cont_72+1;
                    }
                }

                var cont_73 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[72].nom_oficina) {
                        cont_73 = cont_73+1;
                    }
                }

                var cont_74 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[73].nom_oficina) {
                        cont_74 = cont_74+1;
                    }
                }

                var cont_75 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[74].nom_oficina) {
                        cont_75 = cont_75+1;
                    }
                }

                var cont_76 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[75].nom_oficina) {
                        cont_76 = cont_76+1;
                    }
                }

                var cont_77 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[76].nom_oficina) {
                        cont_77 = cont_77+1;
                    }
                }

                var cont_78 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[77].nom_oficina) {
                        cont_78 = cont_78+1;
                    }
                }

                var cont_79 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[78].nom_oficina) {
                        cont_79 = cont_79+1;
                    }
                }

                var cont_80 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[79].nom_oficina) {
                        cont_80 = cont_80+1;
                    }
                }

                var cont_81 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[80].nom_oficina) {
                        cont_81 = cont_81+1;
                    }
                }

                var cont_82 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[81].nom_oficina) {
                        cont_82 = cont_82+1;
                    }
                }

                var cont_83= 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[82].nom_oficina) {
                        cont_83= cont_83+1;
                    }
                }

                var cont_84= 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[83].nom_oficina) {
                        cont_84= cont_84+1;
                    }
                }

                var cont_85 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[84].nom_oficina) {
                        cont_85 = cont_85+1;
                    }
                }

                var cont_86 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[85].nom_oficina) {
                        cont_86 = cont_86+1;
                    }
                }

                var cont_87 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[86].nom_oficina) {
                        cont_87 = cont_87+1;
                    }
                }

                var cont_88 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[87].nom_oficina) {
                        cont_88 = cont_88+1;
                    }
                }

                var cont_89 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[88].nom_oficina) {
                        cont_89 = cont_89+1;
                    }
                }

                var cont_90 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[89].nom_oficina) {
                        cont_90 = cont_90+1;
                    }
                }

                var cont_91 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[90].nom_oficina) {
                        cont_91 = cont_91+1;
                    }
                }

                var cont_92 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[91].nom_oficina) {
                        cont_92 = cont_92+1;
                    }
                }

                var cont_93 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[92].nom_oficina) {
                        cont_93 = cont_93+1;
                    }
                }

                var cont_94 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[93].nom_oficina) {
                        cont_94 = cont_94+1;
                    }
                }

                var cont_95 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[94].nom_oficina) {
                        cont_95 = cont_95+1;
                    }
                }

                var cont_96 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[95].nom_oficina) {
                        cont_96 = cont_96+1;
                    }
                }

                var cont_97 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[96].nom_oficina) {
                        cont_97 = cont_97+1;
                    }
                }

                var cont_98 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[97].nom_oficina) {
                        cont_98 = cont_98+1;
                    }
                }

                var cont_99 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[98].nom_oficina) {
                        cont_99 = cont_99+1;
                    }
                }

                var cont_100 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[99].nom_oficina) {
                        cont_100 = cont_100+1;
                    }
                }

                var cont_101 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[100].nom_oficina) {
                        cont_101 = cont_101+1;
                    }
                }

                var cont_102 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[101].nom_oficina) {
                        cont_102 = cont_102+1;
                    }
                }

                var cont_103 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[102].nom_oficina) {
                        cont_103 = cont_103+1;
                    }
                }

                var cont_104 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[103].nom_oficina) {
                        cont_104 = cont_104+1;
                    }
                }

                var cont_105 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[104].nom_oficina) {
                        cont_105 = cont_105+1;
                    }
                }

                var cont_106 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[105].nom_oficina) {
                        cont_106 = cont_106+1;
                    }
                }

                var cont_107 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[106].nom_oficina) {
                        cont_107 = cont_107+1;
                    }
                }

                var cont_108 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[107].nom_oficina) {
                        cont_108 = cont_108+1;
                    }
                }

                var cont_109 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[108].nom_oficina) {
                        cont_109 = cont_109+1;
                    }
                }

                var cont_110 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[109].nom_oficina) {
                        cont_110 = cont_110+1;
                    }
                }

                var cont_111 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[110].nom_oficina) {
                        cont_111 = cont_111+1;
                    }
                }

                var cont_112 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[111].nom_oficina) {
                        cont_112 = cont_112+1;
                    }
                }

                var cont_113 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[112].nom_oficina) {
                        cont_113 = cont_113+1;
                    }
                }

                var cont_114 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[113].nom_oficina) {
                        cont_114 = cont_114+1;
                    }
                }

                var cont_115 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[114].nom_oficina) {
                        cont_115 = cont_115+1;
                    }
                }

                var cont_116 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[115].nom_oficina) {
                        cont_116 = cont_116+1;
                    }
                }

                var cont_117 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[116].nom_oficina) {
                        cont_117 = cont_117+1;
                    }
                }

                var cont_118 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[117].nom_oficina) {
                        cont_118 = cont_118+1;
                    }
                }

                var cont_119 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[118].nom_oficina) {
                        cont_119 = cont_119+1;
                    }
                }

                var cont_120 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[119].nom_oficina) {
                        cont_120 = cont_120+1;
                    }
                }

                var cont_121 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[120].nom_oficina) {
                        cont_121 = cont_121+1;
                    }
                }

                var cont_122 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[121].nom_oficina) {
                        cont_122 = cont_122+1;
                    }
                }

                var cont_123 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[122].nom_oficina) {
                        cont_123 = cont_123+1;
                    }
                }

                var cont_124 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[123].nom_oficina) {
                        cont_124 = cont_124+1;
                    }
                }

                var cont_125 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[124].nom_oficina) {
                        cont_125 = cont_125+1;
                    }
                }

                var cont_126 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[125].nom_oficina) {
                        cont_126 = cont_126+1;
                    }
                }

                var cont_127 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[126].nom_oficina) {
                        cont_127 = cont_127+1;
                    }
                }

                var cont_128 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[127].nom_oficina) {
                        cont_128 = cont_128+1;
                    }
                }

                var cont_129 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[128].nom_oficina) {
                        cont_129 = cont_129+1;
                    }
                }

                var cont_130 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[129].nom_oficina) {
                        cont_130 = cont_130+1;
                    }
                }

                var cont_131 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[130].nom_oficina) {
                        cont_131 = cont_131+1;
                    }
                }

                var cont_132 = 0;
                for (var i = 0; i < all.lenvalues_vargth; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[131].nom_oficina) {
                        cont_132 = cont_132+1;
                    }
                }

                var cont_133 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[132].nom_oficina) {
                        cont_133 = cont_133+1;
                    }
                }

                var cont_134 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[133].nom_oficina) {
                        cont_134 = cont_134+1;
                    }
                }

                var cont_135 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[134].nom_oficina) {
                        cont_135 = cont_135+1;
                    }
                }

                var cont_136 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[135].nom_oficina) {
                        cont_136 = cont_136+1;
                    }
                }

                var cont_137 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[136].nom_oficina) {
                        cont_137 = cont_137+1;
                    }
                }

                var cont_138 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[137].nom_oficina) {
                        cont_138 = cont_138+1;
                    }
                }

                var cont_139 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[138].nom_oficina) {
                        cont_139 = cont_139+1;
                    }
                }

                var cont_140 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[139].nom_oficina) {
                        cont_140 = cont_140+1;
                    }
                }

                var cont_141 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[140].nom_oficina) {
                        cont_141 = cont_141+1;
                    }
                }

                var cont_142 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[141].nom_oficina) {
                        cont_142 = cont_142+1;
                    }
                }

                var cont_143 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[142].nom_oficina) {
                        cont_143 = cont_143+1;
                    }
                }

                var cont_144 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[143].nom_oficina) {
                        cont_144 = cont_144+1;
                    }
                }

                var cont_145 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[144].nom_oficina) {
                        cont_145 = cont_145+1;
                    }
                }

                var cont_146 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[145].nom_oficina) {
                        cont_146 = cont_146+1;
                    }
                }

                var cont_147 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[146].nom_oficina) {
                        cont_147 = cont_147+1;
                    }
                }

                var cont_148 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[147].nom_oficina) {
                        cont_148 = cont_148+1;
                    }
                }

                var cont_149 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[148].nom_oficina) {
                        cont_149 = cont_149+1;
                    }
                }

                var cont_150 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[149].nom_oficina) {
                        cont_150 = cont_150+1;
                    }
                }

                var cont_151 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[150].nom_oficina) {
                        cont_151 = cont_151+1;
                    }
                }

                var cont_152 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[51].nom_oficina) {
                        cont_152 = cont_152+1;
                    }
                }

                var cont_153 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[152].nom_oficina) {
                        cont_153 = cont_153+1;
                    }
                }

                var cont_154 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[153].nom_oficina) {
                        cont_154 = cont_154+1;
                    }
                }

                var cont_155 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[154].nom_oficina) {
                        cont_155 = cont_155+1;
                    }
                }

                var cont_156 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[155].nom_oficina) {
                        cont_156 = cont_156+1;
                    }
                }

                var cont_157 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[156].nom_oficina) {
                        cont_157 = cont_157+1;
                    }
                }

                var cont_158 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[157].nom_oficina) {
                        cont_158 = cont_158+1;
                    }
                }

                var cont_159 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[158].nom_oficina) {
                        cont_159 = cont_159+1;
                    }
                }

                var cont_160 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[159].nom_oficina) {
                        cont_160 = cont_160+1;
                    }
                }

                var cont_161 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[160].nom_oficina) {
                        cont_161 = cont_161+1;
                    }
                }

                var cont_162 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[161].nom_oficina) {
                        cont_162 = cont_162+1;
                    }
                }

                var cont_163 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[162].nom_oficina) {
                        cont_163 = cont_163+1;
                    }
                }

                var cont_164 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[163].nom_oficina) {
                        cont_164 = cont_164+1;
                    }
                }

                var cont_165 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[164].nom_oficina) {
                        cont_165 = cont_165+1;
                    }
                }

                var cont_166 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[165].nom_oficina) {
                        cont_166 = cont_166+1;
                    }
                }

                var cont_167 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[166].nom_oficina) {
                        cont_167 = cont_167+1;
                    }
                }

                var cont_168 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[167].nom_oficina) {
                        cont_168 = cont_168+1;
                    }
                }

                var cont_169 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[168].nom_oficina) {
                        cont_169 = cont_169+1;
                    }
                }

                var cont_170 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[169].nom_oficina) {
                        cont_170 = cont_170+1;
                    }
                }

                var cont_171 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[170].nom_oficina) {
                        cont_171 = cont_171+1;
                    }
                }

                var cont_172 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[171].nom_oficina) {
                        cont_172 = cont_172+1;
                    }
                }

                var cont_173 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[172].nom_oficina) {
                        cont_173 = cont_173+1;
                    }
                }

                var cont_174 = 0;
                for (var i = 0; i < all.length; i++) {
                    var punto = all[i].nom_oficina;
                    if (punto == unicos[173].nom_oficina) {
                        cont_174 = cont_174+1;
                    }
                }

                var values_var = [
                    cont_1, cont_2, cont_3, cont_4, cont_5, cont_6, cont_7, cont_8, cont_9, cont_10,
                    cont_11, cont_12, cont_13, cont_14, cont_15, cont_16, cont_17, cont_18, cont_19, cont_20,
                    cont_21, cont_22, cont_23, cont_24, cont_25, cont_26, cont_27, cont_28, cont_29, cont_30,
                    cont_31, cont_32, cont_33, cont_34, cont_35, cont_36, cont_37, cont_38, cont_39, cont_40,
                    cont_41, cont_42, cont_43, cont_44, cont_45, cont_46, cont_47, cont_48, cont_49, cont_50,
                    cont_51, cont_52, cont_53, cont_54, cont_55, cont_56, cont_57, cont_58, cont_59, cont_60,
                    cont_61, cont_62, cont_63, cont_64, cont_65, cont_66, cont_67, cont_68, cont_69, cont_70,
                    cont_71, cont_72, cont_73, cont_74, cont_75, cont_76, cont_77, cont_78, cont_79, cont_80,
                    cont_81, cont_82, cont_83, cont_84, cont_85, cont_86, cont_87, cont_88, cont_89, cont_90,
                    cont_91, cont_92, cont_93, cont_94, cont_95, cont_96, cont_97, cont_98, cont_99, cont_100,
                    cont_101, cont_102, cont_103, cont_104, cont_105, cont_106, cont_107, cont_108, cont_109, cont_110,
                    cont_111, cont_112, cont_113, cont_114, cont_115, cont_116, cont_117, cont_118, cont_119, cont_120,
                    cont_121, cont_122, cont_123, cont_124, cont_125, cont_126, cont_127, cont_128, cont_129, cont_130,
                    cont_131, cont_132, cont_133, cont_134, cont_135, cont_136, cont_137, cont_138, cont_139, cont_140,
                    cont_141, cont_142, cont_143, cont_144, cont_145, cont_146, cont_147, cont_148, cont_149, cont_150,
                    cont_151, cont_152, cont_153, cont_154, cont_155, cont_156, cont_157, cont_158, cont_159, cont_160,
                    cont_161, cont_162, cont_163, cont_164, cont_165, cont_166, cont_167, cont_168, cont_169, cont_170,
                    cont_171, cont_172, cont_173, cont_174
                ];

                var labels_var = [];
                for (var i = 0; i < unicos.length; i++) {
                    labels_var[i] = unicos[i].nom_oficina;
                }

                pintar_puntos(labels_var, values_var);
        }).fail(function () {
            alert("Ocurrió un error, intenta ingresar más tarde");
        }).always(function () {});

    }

    function pintar_puntos(labels, values) {
        var ctx = document.getElementById("puntos_graf").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Redenciones por Puntos",
                        data: values,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        $("#loader_div").hide();
        $("#btn_inicio").trigger("click");
    }
});
