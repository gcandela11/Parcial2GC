export class Pais{
    id: number;
    name: string;
    formation_year: number;
    capital: string;
    descripcion: string;
    flag: string;
    constructor(id: number, name: string, formation_year: number, capital: string, descripcion: string, flag: string){
        this.id = id;
        this.name = name;
        this.formation_year = formation_year;
        this.capital = capital;
        this.descripcion = descripcion;
        this.flag = flag;
    }

}
