import Link from 'next/link'

const mockUrls = ["https://4tvo5hfej7.ufs.sh/f/rDDOPmmigjTX2Pplc4DygZIGKQ4BYLqrfzNUpasiT138nFj2"]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function Layer2Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#F1AB86] to-[#F7DBA7] text-white">
      <Link href="..">
        <button className="btn btn-warning">1st Page</button>
      </Link>
        (Second page yaaaas)
      
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://avatarfiles.alphacoders.com/182/thumb-1920-182640.jpg"
      alt="Hollow Knight Nendoroid" />
  </figure>
  <div className="card-body bg-gradient-to-b from-[#F7DBA7] to-[#F1AB86] text-black 500">
    <h2 className="card-title text-black 500">aghhghh megumin from konsouba buy noqw</h2>
    <p>buy now or suffer forever buy now buy now buy now buy now buy now buy now</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">BUY NOW!</button>
    </div>
  </div>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://static.wikia.nocookie.net/ea24d19d-e4c4-44cd-bc09-451c342462c2/scale-to-width/755"
      alt="rikka takanashi from chunibyo" />
  </figure>
  <div className="card-body bg-gradient-to-b from-[#F7DBA7] to-[#F1AB86] text-black 500">
    <h2 className="card-title text-black 500">rikka takanashi from chunibyo</h2>
    <p>this is chunibyo please buy she is really cool</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">BUY NOW!1!!!</button>
    </div>
  </div>
</div>
</div>
    </main>
  );
}
