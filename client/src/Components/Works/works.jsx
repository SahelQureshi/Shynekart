import React from 'react'
import image1 from "../../assets/How It works/img1.png"
import image2 from "../../assets/How It works/img2.png"
import image3 from "../../assets/How It works/img3.png"
import "../Works/work.css"

export default function works() {
  return (
    <div className='howddd'>
    <div className="container Wor28KHir">
        <h2>How it Works</h2>
        <p style={{fontFamily:"Trebuchet MS",textAlign:"left"}}>The food delivery process begins when a customer places an order through a mobile app or website, selecting their desired dishes from a menu offered by a local restaurant or food service provider. Once the order is confirmed, it is transmitted to the restaurant, where chefs prepare the food with care and attention to quality. The order is then picked up by a designated delivery driver, who transports it to the customer's location. Throughout this journey, real-time tracking may be available for both the customer and the driver, ensuring transparency and convenience. Upon arrival, the driver delivers the order to the customer, often with contactless options for safety and convenience. This process not only satisfies hunger but also exemplifies the seamless fusion of technology and culinary artistry that defines modern food delivery services.</p>
        <div className="container">
            <div className="row" style={{paddingTop:"20px"}}>
                <div className="col">
                <img className='ImgaeWori49' src={image1} alt="" />

                </div>
                <div className="col">
                <img className='ImgaeWori49' src={image2} alt="" />
                </div>
                <div className="col">
                <img className='ImgaeWori49' src={image3} alt="" />
                </div>
            </div>
            <div className="row" style={{paddingTop:"20px"}}>
                <div className="col">
                    <h3 className='workDEfaultHead' style={{fontWeight:"bolder",fontFamily:"Brush Script MT"}}>01 Select Restaurant</h3>
                    <p style={{fontFamily:"Trebuchet MS",textAlign:"left"}}>When selecting a restaurant for food delivery, it's essential to consider your culinary preferences, dietary requirements, and budget. Browse through the diverse range of options on the food delivery platform, paying attention to customer reviews and ratings to gauge the quality of the dining experience.</p>
                </div>
                <div className="col">
                    <h3 className='workDEfaultHead' style={{fontWeight:"bolder",fontFamily:"Brush Script MT"}}>02 Select Menu</h3>
                    <p style={{fontFamily:"Trebuchet MS",textAlign:"left"}}>Menu selection in food delivery is a crucial aspect of curating a satisfying dining experience. Customers can explore a diverse array of dishes from their chosen restaurant, often accompanied by detailed descriptions and images on the food delivery platform. Consider your cravings, dietary preferences, and any special requirements when perusing the menu. </p>
                </div>
                <div className="col">
                    <h3 className='workDEfaultHead' style={{fontWeight:"bolder",fontFamily:"Brush Script MT"}}>03 Wait for Delivery</h3>
                    <p style={{fontFamily:"Trebuchet MS",textAlign:"left"}}>Waiting for a delivery builds anticipation as the minutes tick away, heightening the excitement of the impending arrival. Whether it's a long-awaited package, a delicious meal, or an online order, the wait is filled with a mix of eagerness and curiosity.Each passing moment amplifies the expectation, and the sound of approaching footsteps or a doorbell ring signals the imminent fulfillment of the wait, transforming the anticipation into a moment of gratification and delight.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
