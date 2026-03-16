import { Arrow } from "@/public/arrow";
import { Button } from "./ui/button";

export const Products = () => {
    return (
        <ul className="flex justify-between items-justify pt-20 pb-20 max-w-[1110px] h-150 m-auto">
            <li className="flex-col flex items-start h-full ">
                <picture>
                    <source srcSet="/product1cut.jpg" media="(min-width: 690px)" />
                    <img src="/product1.jpg" alt="product1" />
                </picture>
                <h1 className="text-2xl mt-5">Упаковка</h1>
                <p className="text-xs text-gray-400/70 mt-2">Тираж: от 50 штук</p>
                <p className="w-[255px] text-left mt-2">Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
                <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
            </li>
            <li className="flex-col flex  items-start h-full    ">
                <picture>
                    <source srcSet="/product2cut.jpg" media="(min-width: 690px)" />
                    <img src="/product2.jpg" alt="product1" />
                </picture>
                <h1 className="text-2xl mt-5">Пакеты</h1>
                <p className="text-xs text-gray-400/70 mt-2">Тираж: от 200 штук</p>
                <p className="w-[255px] text-left mt-2">С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.</p>
                <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
            </li>
            <li className="flex-col flex items-start  h-full">
                <picture>
                    <source srcSet="/product3cut.jpg" media="(min-width: 690px)" />
                    <img src="/product3.jpg" alt="product1" />
                </picture>
                <h1 className="text-2xl mt-5">Кейсы</h1>
                <p className="text-xs text-gray-400/70 mt-2">Тираж: от 30 штук</p>
                <p className="w-[255px] text-left mt-2">Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.</p>
                <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
            </li>
            <li className="flex-col flex items-start  h-full">
                <picture>
                    <source srcSet="/product4cut.jpg" media="(min-width: 690px)" />
                    <img src="/product4.jpg" alt="product1" />
                </picture>
                <h1 className="text-2xl mt-5">Другие изделия</h1>
                <p className="text-xs text-gray-400/70 mt-2">Тираж от 50 штук</p>
                <p className="w-[255px] text-left mt-2">Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.</p>
                <Button variant="productButton" className="mt-auto px-0">Подробнее<Arrow /></Button>
            </li>
        </ul>
    );
};