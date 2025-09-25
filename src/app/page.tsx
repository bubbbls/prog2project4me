import Link from "next/link";
const mockUrls = ["https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF2HRIC91eIEmdBLqxD1hYwbRovWGgMXHAZN5a",
	"https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF3OpfGn2druvkDAajYmLE7UGHZ4wcRt53b6CT",
"https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF5hEncrDePGC5KhL9DakITtfzsWbqXBwJOnE3"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#9A3131] to-[#9A3131] text-white">
			      <div className="flex-row flex-wrap">
              <Link href="/layer02">2nd Page</Link>
            <h1 className="justify-self-center">hollow knight silkseven</h1>  
              {
      mockImages.map((image) => (
        <div key ={image.id} className="w-128">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}
