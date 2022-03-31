import { getGift } from "../../../helpers/getGifts";

describe('Pruebas con getGift', () => { 
    
    test('debe de traer 10 elementos o mas', async() => { 
        const gifs = await getGift("dragon ball");

        
        expect(gifs.length).toBe(50);

     })

     test('debe de traer 10 elementos o mas', async() => { 
        const gifs = await getGift("");

        
        expect(gifs.length).toBe(0);

     })
 })