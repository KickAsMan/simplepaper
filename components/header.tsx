'use client';
import { Logo } from "@/public/logo";
import { SearchInput } from "./reusable/searchInput";
import React from "react";
import { Button } from "./ui/button";
import { SearchLogo } from "@/public/searchLogo";
import { ExitLogo } from "@/public/exitLogo";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";
import { Navbutton } from "@/public/navbutton";


export const Header = () => {
    const [inputVisible, setInputVisible] = React.useState(false);
    return (
        <div className=" border-b border-w-max">
            <div className="w-full  justify-between flex flex-wrap items-center max-w-[1110px] md:h-15 m-auto @container ">
                <div className="w-2.5 pl-5">
                    <Logo />
                </div>
                <div className="ml-auto flex items-center min-[500px]:justify-center  max-md:h-15 max-md:order-3 max-md:w-full max-md:border-t">
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="otherButtons" className="mx-5 min-[500px]:hidden min-[500px]:pointer-events-none"><Navbutton /></Button>
                            </PopoverTrigger>
                            <PopoverContent className="absolute rounded-none">
                                <Button variant="headerButton">Продукция</Button>
                                <Button variant="headerButton">Материалы</Button>
                                <Button variant="headerButton">О нас</Button>
                                <Button variant="headerButton">Контакты</Button>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className=" flex justify-center items-center max-[500px]:hidden">
                        <Button variant="headerButton">Продукция</Button>
                        <Button variant="headerButton">Материалы</Button>
                        <Button variant="headerButton">О нас</Button>
                        <Button variant="headerButton">Контакты</Button>
                    </div>

                </div>
                <div className="max-md:order-2 pr-5">
                    <Button variant="otherButtons" onClick={() => setInputVisible(!inputVisible)}><SearchLogo /></Button>
                    <SearchInput className={`transition-all duration-400 ease-in-out ${inputVisible ? " max-[500px]:w-15 max-w-[224px] mt-0 mb-0" : "max-w-0 pointer-events-none"}`} placeholder="Найти" />
                    <Button variant="otherButtons"><ExitLogo /></Button>
                </div>

            </div>
        </div>
    );
};