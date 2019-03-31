import "../src/index";

describe("when get method is called with index 1", () => {
    test("then returns second element", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: string | undefined = testArray.get(1);

        // then
        expect(result).toEqual("second");
    });
});

describe("when get method is called with index which is out of range", () => {
    test("then returns undefined", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: string | undefined = testArray.get(5);

        // then
        expect(result).toEqual(undefined);
    });
});

describe("when set method is called with index 0 and new element", () => {
    test("then first element is replaced by new element", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: string[] = testArray.set(0, "newFirst");

        // then
        expect(result.get(0)).toEqual("newFirst");
    });
});

describe("when remove method is called with index 1", () => {
    test("then returns second element and removes this element from array", () => {
        // given
        const testArray: string[] = ["first", "second", "third"];

        // when
        const result: string[] = testArray.remove(1);

        // then
        expect(result).toEqual(["second"]);
        expect(testArray).toEqual(["first", "third"]);
    });
});

describe("when remove method is called with index which is out of range", () => {
    test("then returns empty array", () => {
        // given
        const testArray: string[] = ["first", "second", "third"];

        // when
        const result: string[] = testArray.remove(666);

        // then
        expect(result).toEqual([]);
        expect(testArray).toEqual(testArray);
    });
});

describe("when delete method is called with index 1", () => {
    test("then deletes second element from array and returns updated array", () => {
        // given
        const testArray: string[] = ["first", "second", "third"];

        // when
        const result: string[] = testArray.delete(1);

        // then
        expect(result).toEqual(["first", "third"]);
    });
});

describe("when delete method is called with index which is out of range", () => {
    test("then returns original array", () => {
        // given
        const testArray: string[] = ["first", "second", "third"];

        // when
        const result: string[] = testArray.delete(666);

        // then
        expect(result).toEqual(testArray);
    });
});

describe("when isEmpty method is called on empty array", () => {
    test("then returns true", () => {
        // given
        const testArray: string[] = [];

        // when
        const result: boolean = testArray.isEmpty();

        // then
        expect(result).toBeTruthy();
    });
});

describe("when isEmpty method is called on non empty array", () => {
    test("then returns false", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: boolean = testArray.isEmpty();

        // then
        expect(result).toBeFalsy();
    });
});

describe("when isNotEmpty method is called on empty array", () => {
    test("then returns false", () => {
        // given
        const testArray: string[] = [];

        // when
        const result: boolean = testArray.isNotEmpty();

        // then
        expect(result).toBeFalsy();
    });
});

describe("when isNotEmpty method is called on non empty array", () => {
    test("then returns true", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: boolean = testArray.isNotEmpty();

        // then
        expect(result).toBeTruthy();
    });
});

describe("when clear method is called on non empty array", () => {
    test("then deletes all elements from array", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        testArray.clear();

        // then
        expect(testArray).toEqual([]);
    });
});

describe("when clone method is called", () => {
    test("then returns copy of original array", () => {
        // given
        const testArray: string[] = ["first", "second"];

        // when
        const result: string[] = testArray.clone();

        // then
        expect(result).toEqual(testArray);
        expect(result).not.toBe(testArray);
    });
});

describe("when sum method is called", () => {
    test("then returns sum of all elements", () => {
        // given
        const testArray: number[] = [1, 2, 3, 4, 5];

        // when
        const result: number = testArray.sum();

        // then
        expect(result).toEqual(15);
    });
});

describe("when min method is called", () => {
    test("then returns minimum element", () => {
        // given
        const testArray: number[] = [1, 2, 3, 4, 5];

        // when
        const result: number = testArray.min();

        // then
        expect(result).toEqual(1);
    });
});

describe("when max method is called", () => {
    test("then returns maximum element", () => {
        // given
        const testArray: number[] = [1, 2, 3, 4, 5];

        // when
        const result: number = testArray.max();

        // then
        expect(result).toEqual(5);
    });
});
