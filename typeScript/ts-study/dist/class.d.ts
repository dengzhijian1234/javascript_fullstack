declare class Cat {
    run(): void;
    private eat;
    protected sleep(): void;
}
declare class GTR extends Cat {
    init(): void;
}
declare const cat: Cat;
declare const gtr: GTR;
