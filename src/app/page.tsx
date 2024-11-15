import Link from "next/link";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  return (
    <div className="ml-12 mt-12 flex flex-col space-y-4 self-auto">
      
      <LanguageSwitcher />
      
      <div className="ml-12 mt-12 flex flex-row space-x-4 self-auto">
        <Link href="../page1" passHref
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          page1
        </Link>
        <Link href="../page2" passHref
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          page2
        </Link>
      </div>
    </div>
  );
}