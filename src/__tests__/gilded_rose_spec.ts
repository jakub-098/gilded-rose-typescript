import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("should foo", () => {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("fixme");
    });

    it("The Quality of an item is never negative", () => {
        const gildedRose = new Shop([new Item("Item2", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBeGreaterThan(0);
    });

    
    });

    describe("regularitem", () => {
        it("should degrade quality twice as fast after sell by date", () => {
            const gildedRose = new Shop([new Item("regularitem", 0, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(8);
        });
        it("shouldnt degrade quality twice as fast before sell by date", () => {
            const gildedRose = new Shop([new Item("regularitem", 2, 10)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toEqual(9);
        });
        it("The Quality of an item should never be more than 50", () => {
            const gildedRose = new Shop([new Item("regularitem", 2, 51)]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBeLessThan(51);
        });


    });