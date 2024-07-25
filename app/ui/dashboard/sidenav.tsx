import Link from "next/link";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-3 md:px-2">
      <Link
        className="mb-2 flex h-10 items-end justify-end rounded-md bg-red-800 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <h1 className="text-3xl ">Melboss</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
