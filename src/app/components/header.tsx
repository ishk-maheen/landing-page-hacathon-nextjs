import Link from "next/link"
import Image from "next/image"
import logo from "../data/logo.png"
export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Image
                    src={logo}
                    alt="Logo"
                    width={95}
                    height={60}
                />
            </div>
            <ul className="headerButton">
                <Link href={"/"}><li className="mainli">MAIN</li></Link>
                <Link href={"/"}><li>GALLERY</li></Link>
                <Link href={"/"}><li>PROJECT</li></Link>
                <Link href={"/"}><li>CERTIFICATION</li></Link>
                <Link href={"/"}><li>CONTACT</li></Link>
            </ul>

        </div>

    )
}