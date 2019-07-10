import { Part } from '../shared/part.model';

export class Build {
    public name: string;
    public description: string;
    public imagePath: string;
    public parts: Part[];

    constructor(name:string, desc:string, path:string, parts: Part[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = path;
        this.parts = parts;
    }
}