
export const Result = () => {
    return (
        <div className="bg-[#EBEBEB] ">
            <div className="max-w-[1110px] m-auto">
                <div className="justify-between flex max-[860px]:flex-col max-[860px]:px-5 pt-20 mb-20">
                    <div className="flex justify-center items-center border-t border-gray-300"  >
                        <img src="./V1.png" alt="V1" width={200} />
                        <div>
                            <h1>V.1</h1>
                            <p>Результат вашего<br />обучения</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border-t border-gray-300">
                        <img src="./V2.png" alt="V1" width={200} />
                        <div>
                            <h1>V.2</h1>
                            <p>Результат вашего<br />обучения</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border-t border-gray-300">
                        <img src="./V3.png" alt="V1" width={200} />
                        <div>
                            <h1>V.3</h1>
                            <p>Результат вашего<br />обучения</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center  pb-10 max-[860px]:flex-col">
                    <img src="./V3.png" alt="V1" className="w-150 max-[960px]:w-100" />
                    <div className="max-[960px]:ml-20">
                        <h1 className="text-5xl">Максимальная<br />белизна</h1>
                        <p className="mt-5">Для повышения белизны, гладкости <br /> и мягкости в состав бумажной массы <br /> вводят белые минеральные вещества:<br />   мел, тальк, каолин и др. Эта операция<br /> называется наполнением.</p>
                        <p className="mt-5"> Отлив бумажного листа осуществляют<br /> на бумагоделательной машине,<br /> важнейшей частью которой является<br /> непрерывно движущаяся (как<br /> транспортер) металлическая или<br /> капроновая сетка.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}