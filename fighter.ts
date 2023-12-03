type race_t = "Human" | "Elf" | "Dwarf";
type class_t = "Melee" | "Range" | "Magic" | "Support"; 
type clan_t = "Farmers" | "Beasts";



type action_t = {

    srl : number;
    name : string;
    value : number;
    dmg : boolean;
    shld : boolean;
    mana : boolean;
    heal : boolean;
    special : number; //bitmap again    
}

type action_id_t = { srl : number, name : string }

type die_t = action_id_t[]; // 6 actions in a single die; may support more sides later
type dice_t = die_t[]; // 5 sets of dice for 5 levels of a fighter


type monster_db_t = {

    hp : number[]; // 5 values for 5 levels
    empty_hp : number[];
    name : string;
    race : race_t;
    class : class_t;
    clan : clan_t;
    specialFX : number; //this is planned to be a bitmap
    base_dice : dice_t[];
}

type leader_db_t = {

    hp : number[]; // 5 values for 5 levels
    empty_hp : number;
    name : string;
    race : race_t;
    class : class_t;
    clan : clan_t;
    specialFX : number; //this is planned to be a bitmap
    base_dice : dice_t[];
    items : number; // tbd

}

