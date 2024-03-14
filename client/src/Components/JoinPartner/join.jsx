import React from 'react'
import "../JoinPartner/join.css"
import img1 from "../../assets/JoinPartner/img1.jpg"
import img2 from "../../assets/JoinPartner/img2.jpg"
export default function join() {
  return (
    <div className='how' style={{padding: "25px",paddingBottom: "93px"}}>
      <div className="container blurhow">
        <h2>Want to Join Partnership?</h2>
        <div className="row pt-4" style={{textAlign:"left",color:"black"}} >
          <div className="col">
            <img src={img1} alt="" style={{width:"500px",height:"280px",borderRadius:"5px"}}/>
          </div>
          <div className="col">
            <img src={img2} alt="" style={{width:"500px",height:"280px",borderRadius:"5px"}}/>
          </div>
        </div>
        <div className="row pt-4" style={{textAlign:"left"}}>
          <div className="col">
            <p>Joining a partnership with Shynecart in the food delivery industry is a promising venture that opens doors to a dynamic and rapidly growing market. Shynecart's commitment to quality and efficiency ensures a seamless experience for both partners and customers. By aligning with Shynecart, you gain access to a robust platform that leverages cutting-edge technology to streamline operations, optimize delivery routes, and enhance customer satisfaction. The partnership not only expands your reach in the competitive food delivery landscape but also provides valuable resources and support to help your business thrive. Together with Shynecart, you embark on a journey that combines innovation and gastronomic excellence, creating a win-win collaboration for all involved parties.</p>
            <button className="designbutton">View More</button>
          </div>
          <div className="col">
            <p>Joining a partnership with Shynecart in the food delivery industry opens up a world of exciting possibilities. Collaborating with Shynecart means becoming part of a dynamic network that values efficiency, quality, and customer satisfaction. The partnership provides access to a well-established platform, allowing for the seamless delivery of delectable cuisines to a diverse range of customers. With Shynecart's reputation for reliability and innovation, joining forces promises not only increased visibility for your food delivery business but also the opportunity to contribute to a growing and thriving community of culinary enthusiasts. Together, the partnership aims to redefine the food delivery experience and create a mutually beneficial relationship in the ever-evolving landscape of the food industry.</p>
            <button className="designbutton">View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
