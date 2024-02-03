"use client";
import Image from "next/image";
import HeroBanner from "./_components/HeroBanner";
import Card from "./_components/Card";

export default function Home() {
  return (
    <>
    <HeroBanner />

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
