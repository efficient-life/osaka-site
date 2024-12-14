import Image from "next/image";

export default function Home() {
  const menuStyle = "border-2 border-black lg:text-xl xl:text-3xl 2xl:text-4xl jp-vertical";
  return (
    <main className="main-bg">
      <section className=" relative flex flex-col gap-[68px] pt-[28px] px-[40px] 2xl:px-[80px] mx-auto">
        <Image
          src={"/top/logo.svg"}
          // height={225}
          // width={200}
          height={169}
          width={150}
          alt="川の家 おさか RIVER HOUSE OSAKAのロゴ"
          // className="2xl:w-[200px] xl:w-[175px]"
          className="w-[16%]"
          priority
        />
        <div className="flex justify-between w-[18%] text-black font-Shippori">
          <div><p className={menuStyle}>体験</p></div>
          <div><p className={menuStyle}>養殖場見学</p></div>
          <div><p className={menuStyle}>釣り</p></div>
          <div><p className={menuStyle}>お食事</p></div>
        </div>
        <Image
          src={"/top/river-house-osaka.svg"}
          // height={170.28}
          // width={694.76}
          height={127.71}
          width={521.07}
          alt="RIVER HOUSE OSAKA"
          // className="2xl:w-[696px] xl:w-[600px]"
          className="w-[56%]"
          priority
        />

        {/* 画像 */}
        {/* <Image
          src={"/top/river.svg"}
          // height={232.22}
          // width={176.93}
          height={174.165}
          width={132.6975}
          alt="川の家 おさか RIVER HOUSE OSAKAの川"
          className="2xl:w-[176px] xl:w-[150px] absolute top-[164px] left-3/4"
        /> */}
        <Image
          src={"/top/river.svg"}
          // height={232.22}
          // width={176.93}
          height={174.165}
          width={132.6975}
          alt="川の家 おさか RIVER HOUSE OSAKAの川"
          className="w-[12%] absolute top-[30%] left-[22%]"
        />
        <Image
          src={"/top/fishing.svg"}
          // height={359.15}
          // width={491.93}
          height={430.18}
          width={646.68}
          alt="川の家 おさか RIVER HOUSE OSAKAで釣り"
          className="w-[48%] absolute top-[2%] left-[38%]"
          priority
        />
        <Image
          src={"/top/sweetfish.svg"}
          // height={252}
          // width={252}
          height={189}
          width={189}
          alt="川の家 おさか RIVER HOUSE OSAKAであゆの塩焼き"
          className="w-[16%] absolute top-[64%] left-[62%] rounded-[50%] object-cover"
          priority
        />
        <Image
          src={"/top/polka-dot1.svg"}
          // height={194}
          // width={985}
          height={145}
          width={738.75}
          alt="polka-dot3"
          className="w-[72%] absolute right-[0px] -bottom-[46px]"
          priority
        />
        <Image
          src={"/top/riversAreInteresting.svg"}
          // height={386.6}
          // width={182.34}
          height={289.95}
          width={136.755}
          alt="川の家 おさか RIVER HOUSE OSAKAの川は面白い"
          className="w-[12%] absolute top-[28%] right-[8%]"
        />

        <Image
          src={"/top/polka-dot3.svg"}
          // height={125}
          // width={152}
          height={94}
          width={114}
          alt="polka-dot3"
          className="w-[10%] absolute left-[24%] top-[0px]"
        />
        <Image
          src={"/top/follow-us.svg"}
          // height={90}
          // width={90}
          height={67.5}
          width={67.5}
          alt="polka-dot3"
          className="w-[8%] absolute right-[36px] bottom-[40px]"
        />
      </section>

      <section className="w-full">
        <div className="overflow-hidden w-full relative bg-white h-12 flex items-center border-y-2 border-black">
          <span className="marquee">
            FISHING RESTAURANT TOUR OF AQUACULTURE FARM
            FISHING RESTAURANT TOUR OF AQUACULTURE FARM
            FISHING RESTAURANT TOUR OF AQUACULTURE FARM
          </span>
        </div>
      </section>

      <section className="flex flex-col pt-[160px] px-[40px] 2xl:px-[80px] mx-auto gap-[44px]">
        <h1 className="flex flex-col gap-y-[12px]">
          <Image
            src={"/about.svg"}
            height={20}
            width={92}
            alt="polka-dot3"
          />
          <Image
            src={"/osakatoha.svg"}
            height={42}
            width={280}
            alt="polka-dot3"
          />
        </h1>
        <div className="flex gap-x-[12px] px-[80px] items-start">
          <Image
            src={"/kawanosekai.svg"}
            height={412}
            width={43}
            alt="polka-dot3"
          />
          <Image
            src={"/chyapon.svg"}
            height={188}
            width={43}
            alt="polka-dot3"
          />
        </div>
        <Image
          src={"/4bubbles.svg"}
          height={100}
          width={220}
          alt="polka-dot3"
          className="absolute right-[0px] top-[636px] z-0"
        />
        <Image
          src={"/tree.svg"}
          height={200}
          width={200}
          alt="polka-dot3"
          className="absolute right-[0px] top-[692px] z-40"
        />
        <Image
          src={"/hand.svg"}
          height={398}
          width={334}
          alt="polka-dot3"
        />
        <Image
          src={"/lunch.svg"}
          height={300}
          width={320}
          alt="polka-dot3"
          className="absolute right-[96px] top-[964px] z-40"
        />
        <button>
          <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-blue hover:to-green border-black border-2">
            <div className="arrow-right"></div>
          </a>
        </button>
      </section>

      {/* <section>
        <Image
          src={"/2bubles.svg"}
          height={152}
          width={152}
          alt="polka-dot3"
          className="right-[96px] top-[964px] z-40"
        />
      </section> */}
      {/* <section className="py-[400px]">
        <div className="flex overflow-hidden static -right-64">
          <div className="ellipse -right-[4px] absolute z-40" />
          <div className="ellipse z-0" />
        </div>
      </section> */}

    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between main-bg">
    //   <div className="field relativ">
    //     <div className="move"><div className="item shake"></div></div>
    //   </div>
    //   {/* h-[calc(100vh-48px)] */}
    //   <div className="">
    //     <Image
    //       src={"/top/polka-dot3.svg"}
    //       height={152}
    //       width={152}
    //       alt="polka-dot3"
    //       className="absolute top-0 left-[350px]"
    //     />
    //     <Image
    //       src={"/top/text1.svg"}
    //       height={386}
    //       width={182}
    //       alt="polka-dot3"
    //       className="absolute top-[228px] right-[78px]"
    //     />
    //     <Image
    //       src={"/top/text2.svg"}
    //       height={386}
    //       width={182}
    //       alt="polka-dot3"
    //       className="absolute right-[670px] top-[0px]"
    //     />
    //     <Image
    //       src={"/top/polka-dot2.svg"}
    //       height={152}
    //       width={152}
    //       alt="polka-dot3"
    //       className="absolute right-[200px] top-[120px] z-10"
    //     />
    //     {/* 画像集 */}
    //     <Image
    //       src={"/top/DSCF1293.svg"}
    //       height={260}
    //       width={348}
    //       alt="釣り"
    //       className="rounded-[50%] right-[300px] top-[80px] absolute object-cover "
    //     />
    //     <div className="rounded-[50%] w-[176px] h-[232px] bg-white left-[360px] top-[234px] absolute" />
    //     {/* <div className="rounded-[50%] w-[491px] h-[360px] bg-white right-[300px] top-[80px] absolute" /> */}
    //     <div className="rounded-[50%] size-[252px] bg-white right-[300px] top-[440px] absolute" />

    //     <div className="absolute top-12 left-[58px] flex flex-col gap-[90px]">
    //       <Image
    //         src={"/top/logo.svg"}
    //         height={225}
    //         width={200}
    //         alt="RIVER HOUSE OSAKA"
    //       />
    //       <div className="flex gap-8 text-black font-Shippori">
    //         <div><p className={menuStyle}>体験</p></div>
    //         <div><p className={menuStyle}>養殖場見学</p></div>
    //         <div><p className={menuStyle}>釣り</p></div>
    //         <div><p className={menuStyle}>お食事</p></div>
    //       </div>
    //     </div>
    //   </div>
    //   <section className="w-full relative ">
    //     <Image
    //       src={"/top/river-house-osaka.svg"}
    //       height={170}
    //       width={694}
    //       alt="RIVER HOUSE OSAKA"
    //       className="ml-[58px]"
    //     />
    //     {/* <Image
    //       src={"/top/polka-dot1.svg"}
    //       height={194}
    //       width={985}
    //       alt="RIVER HOUSE OSAKA"
    //       className="right-[0px] top-[30px]"
    //     /> */}
    //     <div className="top-[180px] bg-white w-full h-12 flex items-center border-y-2 border-black overflow-hidden">
    //       <div className="text-marquee__text text-xs text-black">
    //         FISHING RESTAURANT TOUR OF AQUACULTURE FARM FISHING RESTAURANT TOUR
    //         OF AQUACULTURE FARM FISHING RESTAURANT TOUR OF AQUACULTURE FARM
    //       </div>
    //     </div>
    //   </section>
    // </main>
  );
}
