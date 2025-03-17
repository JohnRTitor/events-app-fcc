import Link from "next/link";
import Image from "next/image";

export function CommonHeader() {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src="/images/logo_black.png"
            alt="logo"
            width={50}
            height={50}
          />
          <nav>
            <ul>
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="/events"> Events</Link>
              </li>
              <li>
                <Link href="/about-us"> About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
}
