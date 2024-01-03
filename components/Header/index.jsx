import Image from "next/image";

export default function Header() {
  return (
    <div>
      <p>Feli</p>
      <Image
        src="/neon.jpg"
        alt="Flur in Neon-Rot und Neon-Pink beleuchtet"
        width={2880}
        height={2160}
      ></Image>
    </div>
  );
}
