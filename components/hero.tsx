
import { Button } from "./ui/button";

export const Hero = () => {
    return (
        <div className="max-w-[1110px] m-auto">
            <div className="w-full flex justify-center max-[950px]:flex-col max-[950px]:px-10 md:px-30 pt-15">
                <div>
                    <h1 className="text-5xl text-gray-500">Простые вещи.<br></br> Из бумаги</h1>
                    <p className="text-lg mt-10 text-gray-600 w-[445px] h-[110]">Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
                    <Button variant="largeButton" className=" w-[255] h-[70]">Каталог</Button>
                </div>
                <div className="w-full max-[950px]:mt-5 flex">
                    <picture>
                        <source srcSet="./cuttubus.png" media="(min-width: 1080px)" />
                        <img src="./BigTubus.png" alt="bigtubus" className="h-[400px]" />
                    </picture>
                </div>
            </div>
        </div>

    );
};