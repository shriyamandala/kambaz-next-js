import Link from "next/link";

export default function TOC() {
  return (
    <ul id="wd-toc">
      <li>
        <Link id= "wd-home-link" href="/labs">Home</Link>
      </li>
      <li>
        <Link id= "wd-lab1-link" href="/labs/lab1">Lab 1</Link>
      </li>
      <li>
        <Link id= "wd-lab2-link" href="/labs/lab2">Lab 2</Link>
      </li>
      <li>
        <Link id= "wd-lab3-link" href="/labs/lab3">Lab 3</Link>
      </li>
      <li>
        <Link id= "wd-lab4-link" href="/labs/lab4">Lab 4</Link>
      </li>
      <li>
        <Link id= "wd-lab5-link" href="/labs/lab5">Lab 5</Link>
      </li>
      <li>
        <a href="https://webdev-client.vercel.app/book/ch1" id="wd-toc-book-link">
          Chapter 1
        </a>
      </li>
      <li>
        <Link href="https://github.com/shriyamandala/kambaz-next-js">Shriya Mandala: learning to build the web one lab at a time</Link>
        
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
    </ul>
  );
}
