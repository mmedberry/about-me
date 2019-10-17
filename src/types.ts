export enum PageState {
    Home,
    About,
    Contact,
    Projects,
    EtchASketch,
    Reflections,
}

export enum Direction {
    Up,
    Down,
    Left,
    Right,
    None,
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
