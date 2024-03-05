'use client';
import MenuItem from "./components/MenuItem";
import { NavBar } from "./components/NavBar";
import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main
      className="min-h-[100svh"
    >
      <NavBar />
      <Image
        src="/logo.jpg"
        width={250}
        height={250}
        alt="Picture of the author"
      />

      <section
        className="flex flex-col sm:flex-row justify-around"
      >
        <div
          className="flex flex-col align-center justify-between w-full text-semibold pl-20"
        >
          <div
            className="pr-20 pl-0"
          >
            <h1
              className="text-8xl font-bold "

            >Sempre conectado</h1>
          </div>
          <div>
            <span
            className="text-2xl font-semibold underline"
            style={{
              position: "relative",
              color: "black",
              top: "55px",
              left: "60px",
            }}
            >Saiba mais</span>
            <Button text={"Saiba mais"} />
          </div>
        </div>

        <div
          className="w-full flex  flex-row justify-center"
        >

          <Image
          className="rounded-3xl"
            src="/handshake.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />

        </div>
      </section>
    </main>
  );
}
