import Link from "next/link.js";

export default function Client() {
  return (
    <div>
      <h1>Client Ruslan</h1>
      <Link href="/">Main page</Link>
      <br></br>
      <Link href="client/1234">Client page</Link>
    </div>
  );
}
