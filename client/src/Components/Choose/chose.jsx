import React from "react";
import "../Choose/chose.css";
import burger from "../../assets/chose/burgerc.jpg"
import image1 from "../../assets/chose/dessert.jpg"
import image2 from "../../assets/chose/noodlesc.jpg"
import image3 from "../../assets/chose/paneer kabab.jpg"
import image4 from "../../assets/chose/momos.jpg"
import data from "../Cart/itemcart";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";

export default ({send}) => {
  const {isAuthenticated } = useAuth0();
  function loginrequired() {
    toast.success("Please Login first")
}
  return (
    <div>
    <div className="chosebody">
      <div className="container">
        <h2>Our Top Foods</h2>
      </div>
      <div className="container wholechose" style={{textAlign:"left"}}>
        <div className="meip1">
          <div className="burgerbody">
            <div className="bugimger">
              <img className="buughover" src={burger}  alt=""/>
            </div>
            <div className="di">
            <h4 style={{fontSize: "42px",fontWeight: "bold"}}>{data.Burger1.Name}</h4>
            <h5 style={{fontSize: "32px",fontWeight: "bold"}}>₹{data.Burger1.price}</h5>
            </div>
            {
              isAuthenticated ?(<>
              <button className='designbtncdp' onClick={()=>send(data.Burger1)} style={{width:"507px",marginLeft: "19px",marginTop: "7px"}}>Add to Cart</button>
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired} style={{width:"507px",marginLeft: "19px",marginTop: "7px"}}>Add to Cart</button>)
            }
            
          </div>
        </div>
        <div className="seip2">
          <div className="seis1">
            <div className="seisf1">
              <div className="seisf1-1">
                <img className="hoversmall" src={image1} alt="" />
              </div>
              <div className="di">
            <h4 style={{fontSize: "27px",fontWeight: "bold"}}>{data.cake1.Name}</h4>
            <h5 style={{fontSize: "23px",fontWeight: "bold"}}>₹{data.cake1.price}</h5>
            </div>
            {
              isAuthenticated ?(<>
              <button className='designbtncdp' onClick={()=>send(data.cake1)} style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}>Add to Cart</button>
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired} style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}>Add to Cart</button>)
            }
            </div>
            <div className="seisf2">
              <div className="seisf1-1">
              <img className="hoversmall" src={image2} alt="" />
              </div>
              <div className="di">
            <h4 style={{fontSize: "27px",fontWeight: "bold"}}>{data.Nodles.Name}</h4>
            <h5 style={{fontSize: "23px",fontWeight: "bold"}}>₹{data.Nodles.price}</h5>
            </div>
            {
              isAuthenticated ?(<>
              
              <button className='designbtncdp' style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}} onClick={()=>send(data.Noodles)}>Add to Cart</button>
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired} style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}>Add to Cart</button>)
            }
            </div>
          </div>
          <div className="seis2">
            <div className="seisf3">
              <div className="seisf1-1">
              <img className="hoversmall" src={image3} alt="" />
              </div>
              <div className="di">
            <h4 style={{fontSize: "27px",fontWeight: "bold"}}>{data.Paneer.Name}</h4>
            <h5 style={{fontSize: "23px",fontWeight: "bold"}}>₹{data.Paneer.price}</h5>
            </div>
            {
              isAuthenticated ?(<>
              <button className='designbtncdp' style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}} onClick={()=>send(data.Paneer)}>Add to Cart</button>
              
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired} style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}>Add to Cart</button>)
            }
            </div>
            <div className="seisf4">
              <div className="seisf1-1">
              <img className="hoversmall" src={image4} alt="" />
              </div>
              <div className="di">
            <h4 style={{fontSize: "27px",fontWeight: "bold"}}>{data.Momo.Name}</h4>
            <h5 style={{fontSize: "23px",fontWeight: "bold"}}>₹{data.Momo.price}</h5>
            </div>
            {
              isAuthenticated ?(<>
              <button className='designbtncdp' style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}onClick={()=>send(data.Momo)}>Add to Cart</button>
              
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired} style={{width: "176px",height: "51px",marginTop: "-11px",marginLeft: "84px",minHeight:"0px"}}>Add to Cart</button>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='meincgt' style={{ paddingTop: "53px" }}>
      <div className="container"><h2 style={{color:"white",marginBottom: "63px"}}>Our Collection</h2></div>
      <div className="container categories">
        <div className="container part1">
          <div className="container innerpart">
            <div className="fd1 fdim">
              <div className="picf picf1">
              </div>
              <h3 className="cgfoods">{data.Chicken.Name}</h3><h3 className="pricecg">₹{data.Chicken.price}</h3>
            </div>
            <div className="fd2 fdim">
              <div className="picf picf2">

              </div>
              <h3 className="cgfoods">{data.ChickenBiryani.Name}</h3><h3 className="pricecg">₹{data.ChickenBiryani.price}</h3>
            </div>
            <div className="fd3 fdim">
              <div className="picf picf3">

              </div>
              <h3 className="cgfoods">{data.Chocoshake.Name}</h3><h3 className="pricecg">₹{data.Chocoshake.price}</h3>
            </div>
            <div className="fd4 fdim">
              <div className="picf picf4">

              </div>
              <h3 className="cgfoods">{data.ColdCoffe.Name}</h3><h3 className="pricecg">₹{data.ColdCoffe.price}</h3>
            </div>
          </div>
          <div className="container buttonfd">
            <div className="sfdim">
            {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Chicken)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
              
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.ChickenBiryani)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Chocoshake)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.ColdCoffe)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
          </div>
        </div>
        <div className="container part2">
          <div className="container innerpart">
            <div className="fd1 fdim">
              <div className="picf picf5">

              </div>
              <h3 className="cgfoods">{data.Faluda.Name}</h3><h3 className="pricecg">₹{data.Faluda.price}</h3>
            </div>
            <div className="fd2 fdim">
              <div className="picf picf6">

              </div>
              <h3 className="cgfoods">{data.MuttonBiriyani.Name}</h3><h3 className="pricecg">₹{data.MuttonBiriyani.price}</h3>
            </div>
            <div className="fd3 fdim">
              <div className="picf picf7">

              </div>
              <h3 className="cgfoods">{data.Burger.Name}</h3><h3 className="pricecg">₹{data.Burger.price}</h3>
            </div>
            <div className="fd4 fdim">
              <div className="picf picf8">

              </div>
              <h3 className="cgfoods">{data.Noodles.Name}</h3><h3 className="pricecg">₹{data.Noodles.price}</h3>
            </div>
          </div>
          <div className="container buttonfd">
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Faluda)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.MuttonBiriyani)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Burger)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Noodles)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
          </div>
          
        </div>
        <div className="container part2">
          <div className="container innerpart">
            <div className="fd1 fdim">
              <div className="picf picf9">

              </div>
              <h3 className="cgfoods">{data.FriedRice.Name}</h3><h3 className="pricecg">₹{data.FriedRice.price}</h3>
            </div>
            <div className="fd2 fdim">
              <div className="picf picf10">

              </div>
              <h3 className="cgfoods">{data.Mughlai.Name}</h3><h3 className="pricecg">₹{data.Mughlai.price}</h3>
            </div>
            <div className="fd3 fdim">
              <div className="picf picf11">

              </div>
              <h3 className="cgfoods">{data.Strawberrycake.Name}</h3><h3 className="pricecg">₹{data.Strawberrycake.price}</h3>
            </div>
            <div className="fd4 fdim">
              <div className="picf picf12">

              </div>
              <h3 className="cgfoods">{data.Pizza.Name}</h3><h3 className="pricecg">₹{data.Pizza.price}</h3>
            </div>
          </div>
          <div className="container buttonfd">
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.FriedRice)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Mughlai)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Strawberrycake)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
            <div className="sfdim">
              {
              isAuthenticated ?(<>
              <button className="btn btn-primary" onClick={()=>send(data.Pizza)} style={{
                width: "180px",
                height: "69px",
                borderRadius: "44px"
              }}>Add to Cart</button>
              
               </>
                 ): (<button className="btn btn-primary" onClick={loginrequired} style={{
                  width: "180px",
                  height: "69px",
                  borderRadius: "44px"
                }}>Add to Cart</button>)
            }
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className='menubackground'>
            <div className="container MenuOp">
                <h2>Our Menu</h2>
                <div className="fistm">
                    <div className="firstm dim">

                    </div>
                    <div className="secondm dim">

                    </div>
                    <div className="thirdm dim">

                    </div>
                    <div className="forthm dim">

                    </div>
                </div>
                <div className="secondtm">
                    <div className="firstst vim">
                    <h3 className="cgfoods" style={{textAlign:"center"}}>{data.TomatoPizza.Name}</h3><h3 className="pricecg" style={{textAlign:"center"}}>₹{data.TomatoPizza.price}</h3>
                    </div>
                    <div className="secondst vim">
                    <h3 className="cgfoods" style={{textAlign:"center"}}>{data.MuttonBiriyani.Name}</h3><h3 className="pricecg" style={{textAlign:"center"}}>₹{data.MuttonBiriyani.price}</h3>
                    </div>
                    <div className="thirdst vim">
                    <h3 className="cgfoods" style={{textAlign:"center"}}>{data.Burger.Name}</h3><h3 className="pricecg" style={{textAlign:"center"}}>₹{data.Burger.price}</h3>
                    </div>
                    <div className="forthst vim">
                    <h3 className="cgfoods" style={{textAlign:"center"}}>{data.ChocolatyCake.Name}</h3><h3 className="pricecg" style={{textAlign:"center"}}>₹{data.ChocolatyCake.price}</h3>
                
                    </div>
                </div>
                <div className="thirdtm">
                    <div className="firstst cim">
                    {
              isAuthenticated ?(<>
              <button className='btn btn-primary' onClick={()=>send(data.TomatoPizza)} style={{ width: "138px", height: "42px", borderRadius: "34px" }}>Add to Cart</button>
               </>
                 ): (<button className='btn btn-primary' onClick={loginrequired} style={{ width: "138px", height: "42px", borderRadius: "34px" }}>Add to Cart</button>)
            }
                    </div>
                    <div className="secondst cim">
                      {
              isAuthenticated ?(<>
              
              <button className='btn btn-primary' onClick={()=>send(data.MuttonBiriyani)} style={{width: "138px", height: "42px", borderRadius: "34px"}}>Add to Cart</button>
               </>
                 ): (<button className='btn btn-primary' onClick={loginrequired} style={{ width: "138px", height: "42px", borderRadius: "34px" }}>Add to Cart</button>)
            }
                    </div>
                    <div className="thirdst cim">
                      {
              isAuthenticated ?(<>
              
              <button className='btn btn-primary' onClick={()=>send(data.Burger)} style={{width: "138px", height: "42px", borderRadius: "34px"}}>Add to Cart</button>
               </>
                 ): (<button className='btn btn-primary' onClick={loginrequired} style={{ width: "138px", height: "42px", borderRadius: "34px" }}>Add to Cart</button>)
            }
                    </div>
                    <div className="forthst cim">
                      {
              isAuthenticated ?(<>
              
              <button className='btn btn-primary' onClick={()=>send(data.ChocolatyCake)} style={{width: "138px", height: "42px", borderRadius: "34px"}}>Add to Cart</button>
               </>
                 ): (<button className='btn btn-primary' onClick={loginrequired} style={{ width: "138px", height: "42px", borderRadius: "34px" }}>Add to Cart</button>)
            }
                    </div>
                </div>
            </div>
        </div>
        <div className='Secondp'>
      <div className="container blurycon">
        <div className="firstscdp">
          <div className="fistscdp" style={{display:"flex"}}>
          <div className="ft1">

          </div>
          <div className="ft2">
            <h1 style={{fontSize: "86px",fontFamily: "Brush Script MT"}}>{data.SpicyPizza.Name}</h1>
            <h2 style={{fontSize: "43px",fontWeight: "bold",textAlign: "right"}}>₹{data.SpicyPizza.price}</h2>
          </div>
          </div>
          <div className="ft3">
            <p style={{color:"white"}}>
Spicy pizza tantalizes the taste buds with a fiery fusion of flavors, offering a thrilling culinary experience. The heat from carefully selected spices, such as red pepper flakes or jalapeños, intensifies the overall taste profile, creating a delightful balance between savory and spicy. Each bite delivers a kick that adds an adventurous twist to the traditional pizza experience, making it a favorite for those who crave bold and zesty sensations. The combination of melted cheese, savory toppings, and the lingering warmth of spice creates a memorable and satisfying gastronomic adventure for pizza enthusiasts seeking a bit of heat in every slice.</p>
            {
              isAuthenticated ?(<>
              <button className='designbtncdp' style={{marginTop:"0px"}} onClick={()=>send(data.SpicyPizza)}>Add to Cart</button>
               </>
                 ): (<button className='designbtncdp' onClick={loginrequired}>Add to Cart</button>)
            }
          </div>
        </div>
        <div className="secondscdp">
          <div className="imagecdp">

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};