
export function DropDownMenuMen({ isActive }) {
  return (
    <div
      id="menDropDownContainer"
      className={`relative flex flex-cols mt-[17%] mr-[25%] h-[30vh] w-[60vw] ${isActive.men === true ? "block" : "hidden"} `}
    >
      <div className="bg-stone-200  flex-1 p-2">
        <ul
          id="indianwear-heading "
          className=" flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl  "
        >
          Indianwear
          <li
            id="indianwear-t-shirt"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            T-Shirt
          </li>
          <li
            id="indianwear-casual-shirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Casual Shirts
          </li>
          <li
            id="indianwear-formal-shirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Formal Shirts
          </li>
          <li
            id="indianwear-sweatshirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sweat Shirts
          </li>
          <li
            id="indianwear-sweaters"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sweaters
          </li>
          <li
            id="indianwear-jackets"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Jackets
          </li>
          <li
            id="indianwear-blazer&Coats"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Blazers & Coats
          </li>
          <li
            id="indianwear-suits"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Suits
          </li>
          <li
            id="indianwear-rain-jackets"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Rain Coats
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-white p-2">
        <ul
          id="indian-festive-wear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl hover:cursor-pointer"
        >
          Festive Wears
          <li
            id="indianwear-kurta&set"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Kurta & KurtaSets
          </li>
          <li
            id="indianwear-sherwanis"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sherwanis
          </li>
          <li
            id="indianwear-nehru-jackets"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Nehru Jackets
          </li>
          <li
            id="indianwear-dhotis"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Dhotis
          </li>
        </ul>
      </div>
      <div className="bg-stone-200 flex-1 p-2">
        <ul
          id="lingerie"
          className=" flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl"
        >
          Lingeries
          <li
            id="lingerie-jeans"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Jeans
          </li>
          <li
            id="lingerie-casual-trousers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Casual Trousers
          </li>
          <li
            id="lingerie-formal-trousers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Formal Trousers
          </li>
          <li
            id="lingerie-shorts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Shorts
          </li>
          <li
            id="lingerie-trackpants-joggers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            TrackPant Joggers
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-white p-2">
        <ul
          id="innerwear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl hover:cursor-pointer"
        >
          Innerwears
          <li
            id="innerwear-briefs"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Briefs & Trunks
          </li>
          <li
            id="innerwear-boxers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Boxers
          </li>
          <li
            id="innerwear-vest"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Vests
          </li>
          <li
            id="innerwear-sleepwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            SleepWears
          </li>
          <li
            id="innerwear-thermals"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Thermals
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-stone-200 p-2">
        <ul
          id="footwear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl hover:cursor-pointer"
        >
          Footwears
          <li
            id="footwear-casual"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Casual Shoes
          </li>
          <li
            id="footwear-sports"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sports Shoes
          </li>
          <li
            id="footwear-formal"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Formal Shoes
          </li>
          <li
            id="footwear-sneakers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sneakers
          </li>
          <li
            id="footwear-sandals"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sandals
          </li>
          <li
            id="footwear-flip-flops"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Flip Flops
          </li>
          <li
            id="footwear-socks"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Socks
          </li>
        </ul>
      </div>

      <div className=" flex-1 bg-white p-2">
        <ul
          id="sportswear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-red-400 text-xl hover:cursor-pointer"
        >
          SportWears
          <li
            id="sportswears-active-tshirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Active T-Shirts
          </li>
          <li
            id="sportswears-tracks-shorts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Track pants & Shorts
          </li>
          <li
            id="sportswears-tracksuits"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          ></li>
          <li
            id="sportswears-jackets"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Jackets SweatShirts
          </li>
          <li
            id="sportswears-accesories"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sports Accessories
          </li>
          <li
            id="sportswears-swimwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Swim Wears
          </li>
        </ul>
      </div>
    </div>
  );
}

export function DropDownWomen({ isActive }) {
  return (
    <div
      id="womenDropDownContainer"
      className={`relative flex flex-cols mt-[17%] mr-[30%] h-[30vh] w-[60vw] ${isActive.women === true ? "block" : "hidden"}`}
    >
      <div className="bg-stone-200 flex-1 p-2">
        <ul
          id="indianwear-heading "
          className=" flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl  "
        >
          Indian Wear
          <li
            id="indianwear-suits"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
           Suits
          </li>
      
          <li
            id="indianwear-sarees"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sarees
          </li>
          <li
            id="indianwear-ethnicwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Ethnicwear
          </li>
          <li
            id="indianwear-leggings-salwar"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Leggings Salwars & Churidars
          </li>
          <li
            id="indianwear-plazzos"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Plazzos
          </li>
          <li
            id="indianwear-dress-materials"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Dress Materials
          </li>
          <li
            id="indianwear-lehangas"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Lehanga Cholis
          </li>
          <li
            id="indianwear-duppattas-shawls"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Dupattas & Shawls
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-white p-2">
        <ul
          id="indian-festive-wear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl hover:cursor-pointer"
        >
          Westernwears
          <li
            id="western-dresses"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Dresses
          </li>
          <li
            id="western-tops"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Tops
          </li>
          <li
            id="western-tshirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            T-shirts
          </li>
          <li
            id="western-dresses"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Trousers & Cap
          </li>
        </ul>
      </div>
      <div className="bg-stone-200 flex-1 p-2">
        <ul
          id="lingerie"
          className=" flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl"
        >
          Lingeries
          <li
            id="lingerie-bra"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Bra
          </li>
          <li
            id="lingerie-brief"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Briefs
          </li>
          <li
            id="lingerie-Shapewears"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Shapewears
          </li>
          <li
            id="lingerie-sleepwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sleepwears
          </li>
          <li
            id="lingerie-swimwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Swimwears
          </li>
        </ul>
      </div>
      <div className=" flex-1 bg-white p-2">
        <ul
          id="jewellery"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl hover:cursor-pointer"
        >
          Jewellery
          <li
            id="jewellery-fashion"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Fashion Jewellery
          </li>
          <li
            id="jewellery-fine"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Fine Jewellery
          </li>
          <li
            id="jewellery-earrings"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Earrings
          </li>
        </ul>
      </div>

      <div className=" flex-1 bg-stone-200 p-2">
        <ul
          id="footwear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl hover:cursor-pointer"
        >
          Footwears
          <li
            id="footwear-flats"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Flats
          </li>
          <li
            id="footwear-sports"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sports Shoes
          </li>
          <li
            id="footwear-boots"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Boots
          </li>
          <li
            id="footwear-heels"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Heels
          </li>
          <li
            id="footwear-sandals"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sandals
          </li>
          <li
            id="footwear-floaters"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Floater
          </li>
          <li
            id="footwear-socks"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Socks
          </li>
        </ul>
      </div>

      <div className=" flex-1 bg-white p-2">
        <ul
          id="sportswear"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-fuchsia-500 text-xl hover:cursor-pointer"
        >
          SportWears
          <li
            id="sportswears-active-tshirts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Active T-shirts
          </li>
          <li
            id="sportswears-tracks-shorts"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Track pants & Shorts
          </li>
          <li
            id="sportswears-tracksuits"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          ></li>
          <li
            id="sportswears-jackets"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Jackets Sweatshirts
          </li>
          <li
            id="sportswears-accesories"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sports Accessories
          </li>
          <li
            id="sportswears-swimwear"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Swim Wears
          </li>
        </ul>
      </div>
    </div>
  );
}
export function DropDownBeauty({ isActive }) {
  return (
    <div
      id="beautyDropDownContainer"
      className={` flex flex-cols mt-[17%] mr-[30%] h-[30vh] w-[60vw] ${isActive.beauty === true ? "block" : "hidden"}`}
    >
      <div className="bg-stone-200 flex-1 p-2">
        <ul
          id="makeup-heading"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-green-500 text-xl"
        >
          Makeup
          <li
            id="lipstick"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Lipstick
          </li>
          <li
            id="lip-gloss"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Lip Gloss
          </li>
          <li
            id="lip-liner"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Lip Liner
          </li>
          <li
            id="mascara"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Mascara
          </li>
          <li
            id="eyeliner"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Eyeliner
          </li>
          <li
            id="kajal"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Kajal
          </li>
          <li
            id="eyeshadow"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Eyeshadow
          </li>
          <li
            id="foundation"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Foundation
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-white p-2">
        <ul
          id="skincare-heading"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-green-500 text-xl hover:cursor-pointer"
        >
          Skincare, Bath & Body
          <li
            id="face-moisturiser"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Face Moisturiser
          </li>
          <li
            id="cleanser"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Cleanser
          </li>
          <li
            id="masks-peel"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Masks & Peel
          </li>
          <li
            id="sunscreen"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Sunscreen
          </li>
          <li
            id="serum"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Serum
          </li>
          <li
            id="face-wash"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Face Wash
          </li>
          <li
            id="eye-cream"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Eye Cream
          </li>
          <li
            id="lip-balm"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Lip Balm
          </li>
        </ul>
      </div>

      <div className="bg-stone-200 flex-1 p-2">
        <ul
          id="haircare-heading"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-green-500 text-xl"
        >
          Haircare
          <li
            id="shampoo"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Shampoo
          </li>
          <li
            id="conditioner"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Conditioner
          </li>
          <li
            id="hair-cream"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Cream
          </li>
          <li
            id="hair-oil"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Oil
          </li>
          <li
            id="hair-gel"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Gel
          </li>
          <li
            id="hair-color"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Color
          </li>
          <li
            id="hair-serum"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Serum
          </li>
          <li
            id="hair-accessory"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Accessory
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-white p-2">
        <ul
          id="appliances-heading"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-green-500 text-xl hover:cursor-pointer"
        >
          Appliances
          <li
            id="hair-straightener"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Straightener
          </li>
          <li
            id="hair-dryer"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Dryer
          </li>
          <li
            id="epilator"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Epilator
          </li>
        </ul>

        <ul
          id="mens-grooming-heading"
          className="flex flex-col flex-1 gap-2 font-poppins font-bold text-green-500 text-xl hover:cursor-pointer mt-4"
        >
          Men's Grooming
          <li
            id="trimmers"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Trimmers
          </li>
          <li
            id="beard-oil"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Beard Oil
          </li>
          <li
            id="hair-wax"
            className="font-poppins text-stone-500 hover:text-stone-800 hover:text-bold text-sm hover:cursor-pointer"
          >
            Hair Wax
          </li>
        </ul>
      </div>
    </div>
  );
}
