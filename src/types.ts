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
    Ally = "Ally",
    Enemy = "Enemy",
    Neutral = "Neutral",
    NULL = ""
}

export class Character {
    name: string;
    hp: number;
    initiative: number;
    affiliation: Affiliation;
    dex: number;
    id: number;

    constructor(data?: any) {
        if (data.name) {
            this.name = data.name;
            this.hp = data.hp;
            this.initiative = data.initiative;
            this.affiliation = data.affiliation;
            this.dex = data.dex;
            this.id = data.id;
        } else if (data || data === 0) {
            this.name = "";
            this.hp = 0;
            this.initiative = 0;
            this.affiliation = Affiliation.Neutral;
            this.dex = 0;
            this.id = data;
        } else {
            this.name = "";
            this.hp = 0;
            this.initiative = 0;
            this.affiliation = Affiliation.Neutral;
            this.dex = 0;
            this.id = 0;
        }
    }
    isFull() {
        if (this.name && this.initiative) {
            return true;
        }
        else return false;
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
