import IWeapons from "../interface/Weapons";

const JSONTOFetch: IWeapons[] =[
    {
        "id": 1,
        "name": "Epée de fer rouillée",
        "hp": 0,
        "atk": 3,
        "price": 5,
        "type": "tranchant"
    },
    {
        "id": 2,
        "name": "Epée de fer poli",
        "hp": 0,
        "atk": 5,
        "price": 8,
        "type": "tranchant"
    },
    {
        "id": 3,
        "name": "Epée d'argent",
        "hp": 0,
        "atk": 7,
        "price": 10,
        "type": "tranchant"
    },
    {
        "id": 4,
        "name": "Dague de fer",
        "hp": 0,
        "atk": 6,
        "price": 9,
        "type": "tranchant"
    },
    {
        "id": 5,
        "name": "Dague d'argent",
        "hp": 0,
        "atk": 7,
        "price": 10,
        "type": "tranchant"
    },
    {
        "id": 6,
        "name": "Arc de chasseur",
        "hp": 0,
        "atk": 10,
        "price": 12,
        "type": "Distance"
    },
    {
        "id": 7,
        "name": "Pistolet du jeune mousse",
        "hp": 0,
        "atk": 14,
        "price": 14,
        "type": "Distance"
    },
    {
        "id": 8,
        "name": "Trublon de pirate",
        "hp": 0,
        "atk": 15,
        "price": 15,
        "type": "Distance"
    },
    {
        "id": 9,
        "name": "Fusil du capitaine",
        "hp": 0,
        "atk": 17,
        "price": 20,
        "type": "Distance"
    },
    {
        "id": 10,
        "name": "Sabre de pirate ivre",
        "hp": 0,
        "atk": 13,
        "price": 13,
        "type": "Distance"
    },
    {
        "id": 11,
        "name": "Marteau de forgeron",
        "hp": 0,
        "atk": 12,
        "price": 10,
        "type": "Ecrasant"
    },
    {
        "id": 12,
        "name": "Masse d'arme d'acier",
        "hp": 0,
        "atk": 14,
        "price": 13,
        "type": "Ecrasant"
    },
    {
        "id": 13,
        "name": "Masse d'arme d'or",
        "hp": 0,
        "atk": 16,
        "price": 15,
        "type": "Ecrasant"
    },
    {
        "id": 14,
        "name": "Bat Batte",
        "hp": 0,
        "atk": 20,
        "price": 20,
        "type": "Ecrasant"
    },
    {
        "id": 15,
        "name": "Sabre laser du jeune luke",
        "hp": 0,
        "atk": 22,
        "price": 25,
        "type": "tranchant"
    },
    {
        "id": 16,
        "name": "Le gun de 2pac",
        "hp": 0,
        "atk": 25,
        "price": 30,
        "type": "Distance"
    },
    {
        "id": 17,
        "name": "Tenu de lin",
        "hp": 5,
        "atk": 0,
        "price": 5,
        "type": "Armure"
    },
    {
        "id": 18,
        "name": "Armure de cuir",
        "hp": 7,
        "atk": 0,
        "price": 6,
        "type": "Armure"
    },
    {
        "id": 19,
        "name": "Armure de fer",
        "hp": 9,
        "atk": 0,
        "price": 8,
        "type": "Armure"
    },
    {
        "id": 20,
        "name": "Talisman du pecheur avec tenu",
        "hp": 5,
        "atk": 0,
        "price": 9,
        "type": "Armure"
    },
    {
        "id": 21,
        "name": "Bouclier tête de chèvre",
        "hp": 7,
        "atk": 0,
        "price": 10,
        "type": "Armure"
    },
    {
        "id": 22,
        "name": "Tablier du cuisinier",
        "hp": 5,
        "atk": 0,
        "price": 8,
        "type": "Armure"
    },
    {
        "id": 23,
        "name": "Cote de mail",
        "hp": 9,
        "atk": 0,
        "price": 9,
        "type": "Armure"
    },
    {
        "id": 24,
        "name": "Armure d'or",
        "hp": 11,
        "atk": 0,
        "price": 10,
        "type": "Armure"
    },
    {
        "id": 25,
        "name": "Slip d'acier",
        "hp": 12,
        "atk": 0,
        "price": 12,
        "type": "Armure"
    },
    {
        "id": 26,
        "name": "Armure de chevalier",
        "hp": 15,
        "atk": 0,
        "price": 15,
        "type": "Armure"
    },
    {
        "id": 27,
        "name": "Robe de Mage",
        "hp": 2,
        "atk": 5,
        "price": 10,
        "type": "Armure"
    },
    {
        "id": 28,
        "name": "Cape de superman",
        "hp": 2,
        "atk": 5,
        "price": 22,
        "type": "Armure"
    },
    {
        "id": 29,
        "name": "Tenu de Jedi",
        "hp": 10,
        "atk": 0,
        "price": 23,
        "type": "Armure"
    },
    {
        "id": 30,
        "name": "Armure de Darth Vador",
        "hp": 15,
        "atk": 0,
        "price": 25,
        "type": "Armure"
    }
]
function getAllWeapons(): IWeapons[] {
    return JSONTOFetch
}
    
export default getAllWeapons