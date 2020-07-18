namespace General
{
    export class Vehiculo
    {
        public marca:string;
        public modelo:string;
        public precio:number;

        constructor(marca:string,modelo:string,precio:number)
        {
            
            this.marca=marca;
            this.modelo=modelo;
            this.precio=precio;
        }
    }
}