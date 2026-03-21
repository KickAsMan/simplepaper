import { Logo } from "@/public/logo";
import { Button } from "./ui/button";
import { Facebook } from "@/public/facebook";
import { Twitter } from "@/public/twitter";
import { Instagram } from "@/public/instagram";
import { Youtube } from "@/public/youtube";

export const Footer = () => {
    return (
        <div className="bg-gray-800 flex justify-around items-center py-5 ">
            <div>
                <Logo className="stroke-white" />
            </div>
            <div>
                <Button variant="otherButtons"><Facebook /></Button>
                <Button variant="otherButtons"><Twitter /></Button>
                <Button variant="otherButtons"><Instagram /></Button>
                <Button variant="otherButtons"><Youtube /></Button>
            </div>
        </div>
    );
};