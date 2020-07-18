namespace General
{
    export class Auto extends Vehiculo
    {
        private cantPuertas:number = 3;
        public id:number;

        constructor(marca:string,modelo:string,precio:number,cantPuertas:number)
        {
            super(marca,modelo,precio);
            this.cantPuertas = cantPuertas;
        }

        public getCantPuertas()
    {
        return this.cantPuertas;
    }
    
        public setCantVidas(cantPuertas:number)
        {
            this.cantPuertas = cantPuertas;
        }
    }

    
}
