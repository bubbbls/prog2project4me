"use client";
import { useState, useEffect } from "react";
import uploadData from "./api/upload-stuff/upload";
import { useRouter } from "next/navigation";

import Link from "next/link";
const mockUrls = ["https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF2HRIC91eIEmdBLqxD1hYwbRovWGgMXHAZN5a",
	"https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF3OpfGn2druvkDAajYmLE7UGHZ4wcRt53b6CT",
"https://1ztdufvxd9.ufs.sh/f/QjrCvjJyqDOF5hEncrDePGC5KhL9DakITtfzsWbqXBwJOnE3"]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();


  useEffect(() => {
    // This hook will run after the component is mounted on the client side
    // Any code that interacts with the browser (e.g., navigation, DOM manipulation) should go here
  }, []); // Empty dependency array ensures it runs only once, after initial render


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await uploadData(title, content);
    console.log(result); // Handle the result as needed
    router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#9A3131] to-[#9A3131] text-white">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Upload</button>
    </form>

		
			      <div className="flex-row flex-wrap">
              <Link href="/layer02">
                <button className="btn btn-secondary">2nd Page</button>
              </Link>
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



