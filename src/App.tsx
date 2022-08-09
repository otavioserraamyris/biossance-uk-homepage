import React from 'react';
import './App.css';

let background = 'https://cdn.shopify.com/s/files/1/0806/5829/files/22_0808_CAM_BB_P5400_AwardWinnersSET_Desktop_XD_1200x@2x.gif?v=1659730843';

function App() {
  return (
    <div>
      <section className='section-2'>
        <a className='text-black no-underline outline-none' href="https://biossance.com/products/sunny-standouts-set">
          <div>
            <div className="top-40 right-2/4 absolute bg-yellow-800 p-0 text-center text-white h-24 w-24 flex items-center justify-center flex-wrap flex-col text-sm uppercase rounded-full font-barlow">
              <big className="font-bold text-4xl">31<sup>%</sup></big>
              <span className="font-bold text-base">OFF</span>
            </div>
          </div>
          <div className="top-40 left-60 absolute max-w-xs">
            <h4 className="uppercase text-base inline-block text-yellow-800 overflow-hidden whitespace-no-wrap">
              <span>NEW  |  LIMITED TIME ONLY</span>
            </h4>
            <h2>
              <span className="font-garamond text-4xl">Your Summer-Skin Win</span>
            </h2>
            <h3 className='font-bold font-barlow text-lg text-yellow-800 mt-4'>
              <span>SUNNY STANDOUTS SET</span>
            </h3>
            <p className="font-garamond">
              <span>This easy 3-step cleansing, refreshing, and hydrating routine is good vibes for all skin types.</span>
            </p>
          </div>
          <div>
          </div>
          <button className="top-96 left-60 absolute bg-yellow-800 text-white font-barlow text-sm uppercase px-4 py-2">SHOW NOW</button>
          <img
            src={background}
            className="bg-lime-600"
            alt="logo" />
        </a >
      </section>

      <section className="section-3">
        <a href="https://biossance.com/collections/all">
          <div className="text-3xl leading-9 m-0 capitalize font-garamond mt-16 text-center">
            <h2>Your Daytime Routine Layering Guide</h2>
          </div>
          <p className="text-xl text-center mt-4 font-garamond">Defend, hydrate, and brighten the skin on the sunniest of days in four simple steps.</p>
        </a>
      </section>

      <section className="section-4 flex flex-row justify-center">
        <div className="flex flex-col justify-center max-w-sm mr-9">
          <h3 className="uppercase text-yellow-800 text-lg max-w-full leading-5 w-full font-barlow border-b-2 border-yellow-800 pb-4 mb-4">STEP 1: TREAT EYES MARINE ALGAE EYE CREAM</h3>
          <p>Rise and shine with a melt-in hydrator to lift, firm, and instantly smooth skin</p>
          <button className="bg-yellow-800 text-white font-barlow text-sm uppercase px-4 py-2 w-28 mt-6">SHOW NOW</button>
        </div>
        <div>
          <img alt="Step 1: Treat Eyes MARINE ALGAE EYE CREAM" width="500" height="500" src="//cdn.shopify.com/s/files/1/0806/5829/files/22_0307_WB_EB_P4638_SPFBONUS_Desktop_MAEC_Desktop_162df178-f442-4eab-8722-f6ee35a5d73b_500x.jpg?v=1659127383" />
        </div>
      </section >

      <section className="section-5 flex flex-row justify-center">
        <div>
          <img alt="Step 2: Treat Complexion VITAMIN C DARK SPOT SERUM" width="500" height="500" src="//cdn.shopify.com/s/files/1/0806/5829/files/22_0307_WB_EB_P4638_SPFBONUS_Desktop_DSpot_Desktop_e54e452c-be5e-4422-b693-3c4aa38cac0f_500x.jpg?v=1659127375" />
        </div>
        <div className="flex flex-col justify-center max-w-sm mr-9">
          <h3 className="uppercase text-yellow-800 text-lg max-w-full leading-5 w-full font-barlow border-b-2 border-yellow-800 pb-4 mb-4">STEP 2: TREAT COMPLEXION VITAMIN C DARK SPOT SERUM</h3>
          <p>For skin that’s brighter than the sun—a lightweight treatment to fade and prevent dark spots</p>
          <button className="bg-yellow-800 text-white font-barlow text-sm uppercase px-4 py-2 w-28 mt-6">SHOW NOW</button>
        </div>
      </section >

      <section className="section-6 flex flex-row justify-center">
        <div className="flex flex-col justify-center max-w-sm mr-9">
          <h3 className="uppercase text-yellow-800 text-lg max-w-full leading-5 w-full font-barlow border-b-2 border-yellow-800 pb-4 mb-4">STEP 3: MOISTURIZE VITAMIN C ROSE OIL</h3>
          <p>Keep the glow glowing with a results-driven blend that brightens, firms, and hydrates in one step</p>
          <button className="bg-yellow-800 text-white font-barlow text-sm uppercase px-4 py-2 w-28 mt-6">SHOW NOW</button>
        </div>
        <div>
          <img alt="Step 1: Treat Eyes MARINE ALGAE EYE CREAM" width="500" height="500" src="//cdn.shopify.com/s/files/1/0806/5829/files/22_0307_WB_EB_P4638_SPFBONUS_Desktop_Rose_Desktop_3c0ec4e3-4bd0-4a69-93ba-40ed55dbcd37_500x.jpg?v=1659127360" />
        </div>
      </section >

      <section className="section-5 flex flex-row justify-center">
        <div>
          <img alt="Step 2: Treat Complexion VITAMIN C DARK SPOT SERUM" width="500" height="500" src="//cdn.shopify.com/s/files/1/0806/5829/files/22_0307_WB_EB_P4638_SPFBONUS_Desktop_SPF_Desktop_c1cd878c-7cc2-466c-8dd3-0bc6abc6ddc5_500x.jpg?v=1659127352" />
        </div>
        <div className="flex flex-col justify-center max-w-sm mr-9">
          <h3 className="uppercase text-yellow-800 text-lg max-w-full leading-5 w-full font-barlow border-b-2 border-yellow-800 pb-4 mb-4">STEP 4: PROTECT ZINC SHEER MINERAL SUNSCREEN</h3>
          <p>A powerfully invisible SPF 30 to shield your skin from damaging rays and deeply hydrate</p>
          <button className="bg-yellow-800 text-white font-barlow text-sm uppercase px-4 py-2 w-28 mt-6">SHOW NOW</button>
        </div>
      </section >
    </div >
  );
}

export default App;
