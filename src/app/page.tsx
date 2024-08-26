import Image from "next/image";

export default function Home() {
  const menuStyle = "border-2 border-black text-4xl jp-vertical";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main-bg">
      <div className="h-[calc(100vh-48px)]">
        <Image
          src={"/top/polka-dot3.svg"}
          height={152}
          width={152}
          alt="polka-dot3"
          className="absolute top-0 left-[350px]"
        />
        <Image
          src={"/top/text1.svg"}
          height={386}
          width={182}
          alt="polka-dot3"
          className="absolute top-[228px] right-[78px]"
        />
        <Image
          src={"/top/text2.svg"}
          height={386}
          width={182}
          alt="polka-dot3"
          className="absolute right-[670px] top-[0px]"
        />
        <Image
          src={"/top/polka-dot2.svg"}
          height={152}
          width={152}
          alt="polka-dot3"
          className="absolute right-[200px] top-[120px] z-10"
        />
        {/* 画像集 */}
        <div className="rounded-[50%] w-[176px] h-[232px] bg-white left-[360px] top-[234px] absolute" />
        <div className="rounded-[50%] w-[491px] h-[360px] bg-white right-[300px] top-[80px] absolute" />
        <div className="rounded-[50%] size-[252px] bg-white right-[300px] top-[440px] absolute" />

        <div className="absolute top-12 left-[58px] flex flex-col gap-[90px]">
          <Image
            src={"/top/logo.svg"}
            height={225}
            width={200}
            alt="RIVER HOUSE OSAKA"
          />
          <div className="flex gap-8">
            <p className={menuStyle}>体験</p>
            <p className={menuStyle}>養殖場見学</p>
            <p className={menuStyle}>釣り</p>
            <p className={menuStyle}>お食事</p>
          </div>
        </div>
      </div>
      <section className="w-full relative">
        <Image
          src={"/top/river-house-osaka.svg"}
          height={170}
          width={694}
          alt="RIVER HOUSE OSAKA"
          className="absolute bottom-12 left-[57px]"
        />
        <Image
          src={"/top/polka-dot1.svg"}
          height={194}
          width={985}
          alt="RIVER HOUSE OSAKA"
          className="absolute bottom-12 right-0"
        />
        <div className="bg-white w-full h-12 flex items-center border-y-2 border-black">
          <p className="text-xs font-bold">
            FISHING RESTAURANT TOUR OF AQUACULTURE FARM FISHING RESTAURANT TOUR
            OF AQUACULTURE FARM FISHING RESTAURANT TOUR OF AQUACULTURE FARM
          </p>
        </div>
      </section>
    </main>
  );
}
