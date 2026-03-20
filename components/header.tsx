'use client';
import { Logo } from "@/public/logo";
import { SearchInput } from "./reusable/searchInput";
import React from "react";
import { Button } from "./ui/button";
import { SearchLogo } from "@/public/searchLogo";
import { ExitLogo } from "@/public/exitLogo";


export const Header = () => {
    const [inputVisible, setInputVisible] = React.useState(false);
    return (
        <div className=" border-b border-w-max">
            <div className="w-full  justify-between flex flex-wrap items-center max-w-[1110px] m-auto @container">
                <div className="w-2.5 mt-5 mb-5">
                    <Logo />
                </div>
                <div className="@max-md:order-3 @max-md:mt-10 @max-md:mr-0 @max-md:w-full">
                    <Button variant="headerButton">Продукция</Button>
                    <Button variant="headerButton">Материалы</Button>
                    <Button variant="headerButton">О нас</Button>
                    <Button variant="headerButton">Контакты</Button>
                </div>
                <div className="@max-md:order-2">
                    <Button variant="otherButtons" onClick={() => setInputVisible(!inputVisible)}><SearchLogo /></Button>
                    <SearchInput className={`transition-all duration-400 ease-in-out ${inputVisible ? "max-w-[224px] mt-0 mb-0 pointer-events-none" : "max-w-0"}`} placeholder="Найти" />
                    <Button variant="otherButtons"><ExitLogo /></Button>
                </div>
            </div>
        </div>
    );
};