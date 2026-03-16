
import { Button } from "./ui/button";

export const Hero = () => {
    return (
        <div className="max-w-[1110px] m-auto">
            <div className="w-full justify-between flex mx-30 mt-15">
                <div className="w-1/2 ">
                    <h1 className="text-5xl text-gray-500">Простые вещи.<br></br> Из бумаги</h1>
                    <p className="text-lg mt-10 text-gray-600 w-[445px] h-[110]">Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
                    <Button variant="largeButton" className=" w-[255] h-[70]">Каталог</Button>
                </div>
                <div className="w-full">
                    <picture>
                        <source srcSet="/cuttubus.png" media="(min-width: 690px)" />
                        <img src="/BigTubus.png" alt="bigtubus" />
                    </picture>
                </div>
            </div>
        </div>

    );
};