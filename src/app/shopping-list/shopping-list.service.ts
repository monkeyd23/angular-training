import { Part } from '../shared/part.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    
    partsChanged = new EventEmitter<Part[]>();

    parts: Part[] = [
        new Part('Core i5 Processor', 120),
        new Part('Seagate HDD 1TB', 300)
    ];

    getParts() {
        return this.parts.slice();
    }

    addPart(part:Part) {
        this.parts.push(part);
        this.partsChanged.emit(this.parts.slice());
    }

    addParts(parts:Part[]) {
        this.parts.push(...parts);
        this.partsChanged.emit(this.parts.slice())
    }
}