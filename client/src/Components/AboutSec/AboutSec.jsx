import React from 'react'
import "../AboutSec/aboutSec.css"
import logo from "../../assets/about/delivery logo.png";
import time from "../../assets/about/timesave.png";
import variety from "../../assets/about/variety.png"
import discount from "../../assets/about/discount.png"

export default function AboutSec() {
  return (
    <div style={{paddingTop:"80px"}}>
      <div className='aboutp'>
        
          <h1 className='meinheadingb'>About Us</h1>
       
      </div>
      <div className="container meinintrob">
        <div className="introduction">
          <h2 >Introduction</h2>
          <p className='aboutr94y48textt'>In the hustle and bustle of modern life, finding time to prepare a delicious meal can be a challenge. That's where Shynekart Food Delivery steps in, bringing the finest flavors right to your doorstep. We understand the importance of savoring moments with your loved ones, and our mission is to enhance those moments by delivering exceptional culinary experiences.

            At Shynekart, we pride ourselves on curating a diverse menu that caters to every palate. Whether you're in the mood for a comforting bowl of noodles, a sizzling stir-fry, or a gourmet pizza, our extensive selection ensures there's something for everyone. Our commitment to quality extends beyond just the taste; we prioritize using fresh, high-quality ingredients to create meals that not only satisfy your cravings but also exceed your culinary expectations.</p>
        </div>
        <div class="container swapingbodys">
          <div className="firstswapimage">
          </div>
          <div className="secondswapimage">
          </div>
        </div>
      </div>
      <div className='f49724iiiru'>
        <div className="container blackbody">
          <div className="row row2948jnnr" >
            <div className="col" >
              <div className="image1abt">
              </div>
            </div>
            <div className="col" >
              <h1 className="aboutext">Tasty Biryani</h1>
              <p className="About448Text" >Biryani, a culinary masterpiece originating from the Indian subcontinent, is a symphony of flavors and aromas that captivates the senses. This iconic dish is a harmonious blend of fragrant basmati rice, tender meat (often chicken, mutton, or beef), or vegetables, all intricately layered and slow-cooked to perfection. What sets biryani apart is its rich tapestry of spices-cumin, coriander, cardamom, cloves, and cinnamon-weaving a spellbinding flavor profile. The dish often receives its vibrant hue from saffron or food coloring, making it as visually enticing as it is delicious.</p>
            </div>
          </div>
          <div className="row row2948jnnr" >
            <div className="col" >
              <h1 className="aboutext">Spicy Fries</h1>
              <p className="About448Text" >
                French fries, a beloved and ubiquitous snack around the globe, are a culinary classic that needs no introduction. These golden sticks of deep-fried or oven-baked potatoes are cherished for their crispy exterior and fluffy interior. Often seasoned with salt and served with a variety of condiments such as ketchup, mayonnaise, or vinegar, French fries are a versatile and universally enjoyed side dish. Whether enjoyed as a quick street food treat or as a staple in casual and fine dining settings, the appeal of French fries lies in their simplicity and irresistible flavor.
              </p>
            </div>
            <div className="col" >
              <div className="image2abt">
              </div>
            </div>
          </div>
          <div className="row row2948jnnr" >
            <div className="col" >
              <div className="image3abt">
              </div>
            </div>
            <div className="col" >
              <h1 className="aboutext">Delicious Pie</h1>
              <p className="About448Text" >Delicious pie is a culinary delight that embodies the perfect combination of a buttery, flaky crust and a luscious, flavorful filling. Whether sweet or savory, pies have a universal appeal that spans cultures and occasions. From classic apple and cherry pies to savory options like chicken pot pie, the variations are endless. The art of making a delicious pie lies in achieving the ideal balance of textures and tastes, where the crust crumbles delicately, and the filling bursts with delectable flavors. Whether enjoyed warm with a scoop of vanilla ice cream or as a comforting savory dish, a well-made pie has the power to evoke feelings of nostalgia and satisfaction, making it a timeless and cherished treat in the world of culinary delights.</p>
            </div>
          </div>

          <div className="row row2948jnnr" >
            <div className="col" >
              <h1 className="aboutext">Dark Chocolate Cake</h1>
              <p className="About448Text"  >A dark chocolate cake is a decadent indulgence that combines the rich, intense flavor of dark chocolate with the moist and tender texture of a perfectly baked cake. This luscious dessert is a celebration of deep cocoa notes, offering a sophisticated and satisfying experience for chocolate enthusiasts. The velvety and slightly bitter profile of dark chocolate adds a luxurious quality to the cake, creating a harmonious balance between sweetness and richness. Whether enjoyed on its own or adorned with a layer of ganache, dark chocolate cake is a timeless classic that elevates any occasion, from birthdays to special celebrations. Its sumptuous taste and velvety texture make it a perennial favorite, captivating taste buds with each indulgent bite.</p>
            </div>
            <div className="col prac" >
              <div className="image4abt">
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container deliverypart">
        <div className="dv">
          <img className='logodeli' src={logo} alt="" />
          <h1 className='firstd'>Fast <br /> Delivery</h1>
          <p className='AbJScText' >After ordering the food we deliver your food within the time and we don't deliver food late.</p>
        </div>
        <div className="dv">
          <img className='logodeli' src={time} alt="" />
          <h1 className='firstd'>Save <br />Your  <br />Time</h1>
          <p className='AbJScText' >We deliver your food very fast. We deliver food by professional delivery man. We are never late.</p>
        </div>
        <div className="dv">
          <img className='logodeli' src={discount} alt="" />
          <h1 className='firstd'>Regular <br /> Discounts</h1>
          <p className='AbJScText' >We give you many more discounts on a variety of foods. You will like it.</p>
        </div>
        <div className="dv">
          <img className='logodeli' src={variety} alt="" />
          <h1 className='firstd'> Variety <br /> Food</h1>
          <p className='AbJScText' >We provide a variety of foods from spicy to sweatest</p>
        </div>
      </div>
      <div className='favorite' >
        <h1 className='menures'>Get the menu of your favorite restaurants <br /> every day</h1>
 
      </div>
    </div>
  )
}
