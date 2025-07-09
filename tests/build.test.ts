import { Build } from "../src/build";

describe("build tests", ()=> {
    it("given a new build object then this object should have level 0", () => {
        const testBuild: Build = new Build();
        expect(testBuild.level).toEqual(0);
    });
    it("given a new build object then this object should have upgrading false", ()=>{
        const testBuild: Build = new Build();
        expect(testBuild.upgrading).toBeFalsy();
    });
    it("given a new build object then this object should have daysToUpgrade 0", ()=>{
        const testBuild: Build = new Build();
        expect(testBuild.daysToUpgrade).toEqual(0);
    });
    it("given a new object after call upgrade the upgrading method is true", () => {
        const testBuild: Build = new Build();
        testBuild.upgrade();
        expect(testBuild.upgrading).toBeTruthy();
    });
    it("given a new object after call progressUpgrade this object have no side effects", () =>{
        const testBuild: Build = new Build();
        testBuild.progressUpgrade();
        expect(testBuild.level).toEqual(0);
        expect(testBuild.upgrading).toBeFalsy();
        expect(testBuild.daysToUpgrade).toEqual(0);
    });
    it("given a new object after call upgrade and progressUpgrade level should be 1", () => {
        const testBuild: Build = new Build();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        expect(testBuild.level).toEqual(1);
    });
    it("given a new object after call upgrade and progrssUpgrade upgrading should be false", () => {
        const testBuild: Build = new Build();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        expect(testBuild.upgrading).toBeFalsy();
    });
    it("given a new object after call upgrade and progressUpgrade daysToUpgrade should be 2", ()=> {
        const testBuild: Build = new Build();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        expect(testBuild.daysToUpgrade).toEqual(2);
    })
    it("given a object already upgraded and upgrade again after progressUpgrade daysToUpgrade has decremented to 1", ()=>{
        const testBuild: Build = new Build();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        expect(testBuild.daysToUpgrade).toEqual(1);
    })
    it("given a object already upgraded and upgrade again daysToUpgrade should be 4", () => {
        const testBuild: Build = new Build();
        testBuild.upgrade();
        testBuild.progressUpgrade();
        testBuild.upgrade();
        for(let i=0; i<4; i++){
            testBuild.progressUpgrade();
        }
        expect(testBuild.daysToUpgrade).toEqual(4);
    })
})