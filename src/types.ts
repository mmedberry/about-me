export enum PageState {
    Home,
    About,
    Contact,
    Projects,
    EtchASketch,
    Reflections,
    CombatManager
}

export enum Direction {
    Up,
    Down,
    Left,
    Right,
    None,
}

export enum Affiliation {
    Ally,
    Enemy,
    Neutral
}

export class Character{
    name: string;
    hp: number;
    initiative: number;
    affiliation: Affiliation;
    dex: number;
    id: number;
    constructor(data: any){
        this.name = data.name;
        this.hp = data.hp;
        this.initiative = data.initiative;
        this.affiliation = data.affiliation;
        this.dex = data.dex;
        this.id = data.id;
    }
}

export class DictionaryEntry {
    /**
     * Lower case name of an English dictionary entry
     */
    name: string;
    /**
     * Definition of an English dictionary entry
     */
    definition: string;
    constructor(data: any) {
        let tempName: string = data.Name;
        this.name = tempName.toLowerCase();
        this.definition = data.Definition;
    }
}
