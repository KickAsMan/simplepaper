import { Arrow } from "@/public/arrow";
import { Button } from "./ui/button";

export const Products = () => {
    return (
        <div className="flex justify-center pt-20 pb-20 max-w-[1110px] m-auto gap-5 max-[600px]:flex-col">
            <div className="flex justify-between items-center gap-5 max-[1150px]:flex-col">
                <div className="flex-col flex items-start h-110 ">
                    <img src="./product1cut.jpg" alt="product1" />
                    <h1 className="text-2xl mt-5">Упаковка</h1>
                    <p className="text-xs text-gray-400/70 mt-2">Тираж: от 50 штук</p>
                    <p className="w-[255px] text-left mt-2">Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
                    <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
                </div>
                <div className="flex-col flex  items-start h-110    ">
                    <img src="./product2cut.jpg" alt="product1" />
                    <h1 className="text-2xl mt-5">Пакеты</h1>
                    <p className="text-xs text-gray-400/70 mt-2">Тираж: от 200 штук</p>
                    <p className="w-[255px] text-left mt-2">С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.</p>
                    <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
                </div></div>
            <div className="flex justify-between items-center gap-5 max-[1150px]:flex-col">
                <div className="flex-col flex items-start  h-110">
                    <img src="./product3cut.jpg" alt="product1" />
                    <h1 className="text-2xl mt-5">Кейсы</h1>
                    <p className="text-xs text-gray-400/70 mt-2">Тираж: от 30 штук</p>
                    <p className="w-[255px] text-left mt-2">Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.</p>
                    <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
                </div>
                <div className="flex-col flex items-start  h-110">
                    <img src="./product4cut.jpg" alt="product1" />
                    <h1 className="text-2xl mt-5">Другие изделия</h1>
                    <p className="text-xs text-gray-400/70 mt-2">Тираж от 50 штук</p>
                    <p className="w-[255px] text-left mt-2">Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.</p>
                    <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
                </div></div>

        </div>
    );
};