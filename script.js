document.addEventListener("DOMContentLoaded", function(event) 
{
    new Vue(
        {
            el:"#aplicacion",
            data:
            {
                jugador1: 0,
                jugador2: 0,
                ganador: "--",
                oportunidades:0
            },
            methods: 
            {          
                reiniciar: function(event)
                {
                    this.oportunidades = 0;
                    this.ganador = "--";
                    this.jugador1 = 0;
                    this.jugador2 = 0;
                },   
                jugar: function(event)
                {
                    this.jugador1 = Math.round(Math.random()*10);
                    this.jugador2 = Math.round(Math.random()*10);
                    let mensaje = "Hay un empate"; 
                    if(this.jugador1 > this.jugador2)
                    {
                        mensaje= "¡Gana jugador 1!";
                    }
                    else if (this.jugador1 != this.jugador2)
                    {
                        mensaje= "¡Gana jugador 2!";
                    }
                    this.oportunidades++;
                    this.ganador = mensaje;
                }
            },
        })
    });