namespace General
{
    export class Camioneta extends Vehiculo
    {
        
        private cuatroXcuatro:eTipo;
        public id:number;

        constructor(marca:string,modelo:string,precio:number,tipo:eTipo)
        {
            super(marca,modelo,precio);
            this.cuatroXcuatro=tipo;
        }

        public getCuatroXcuatro():eTipo
    {
        return this.cuatroXcuatro;
    }
    
        public setCuatroXcuatro(cuatroXcuatro:eTipo):void
        {
            this.cuatroXcuatro = cuatroXcuatro;
        }
    }

    
}
