import React, { useEffect } from "react";
import avatarImg from '../../../assets/img/avator.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import style from './index.module.css';
import { navLinks } from "@/constants/home";

//注册插件
gsap.registerPlugin(useGSAP)

const Head = () => {
 const {contextSafe}=useGSAP();
 

  const handleLike = contextSafe(({context}: {context: HTMLElement}) => {
   gsap.to(context,{rotation:"+=10",yoyo:true,repeat:1})
  })
  return <div className="bg-black ">
    <div className="container h-[80px] p-[10px] flex justify-between">
        <img className="w-4 h-4 rounded-md self-center" src={avatarImg} alt="头像"/>
        <div className="menu text-gray-50 flex gap-2" > 
            {navLinks.map((item,index) => {
                return <button key={index} className={style.btn} onClick={(e) => handleLike({context: e.currentTarget})}>
                    {item.title}
                </button>
            })}
            
        </div>
    </div>
  </div>;
};

Head.displayName = "Head";
export default Head;
