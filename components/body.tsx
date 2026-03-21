
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Products } from "./products";
import { Result } from "./result";
import { Sketchbook } from "./sketchbook";
import { Sponsors } from "./sponsors";
export const Body = () => {
    return (
        <main  >
            <Hero />
            <Result />
            <Products />
            <Sponsors />
            <Sketchbook />
            <Footer />
        </main>
    );
};