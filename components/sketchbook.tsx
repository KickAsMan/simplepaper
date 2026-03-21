import { Button } from "./ui/button";

export const Sketchbook = () => {
    return (
        <div className="max-w-[1100px] m-auto pt-20 justify-between items-center flex px-5">
            <div className="w-80">
                <h1 className="text-4xl">Simple скетчбук</h1>
                <p className="mt-5">80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!</p>
                <Button variant="largeButton" className="mt-5 w-[255] h-[70]">Купить</Button>
            </div>
            <div className="">
                <picture>
                    <source srcSet="./sketch-img.png" media="(min-width: 690px)" />
                    <img src="./sketchbook-tablet.png" alt="sketchbook" />
                </picture>
            </div>
        </div>
    );
};