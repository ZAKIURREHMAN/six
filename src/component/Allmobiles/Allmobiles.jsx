import React, { useState } from 'react'
import './Allmobiles.css'
import AllApis from './AllApis'
import { Link } from 'react-router-dom'
function Allmobiles(props) {
  const [quary,setquary] = useState(AllApis)
  const [ram,setram] = useState("")
  const [storage,setstorage] = useState("")
  const [battery,setbattery] = useState("")
  const [processor,setprocessor] = useState("")
  const [loader,setloader] = useState(15)
  const slice = quary.slice(0,loader)
  const MoreLoader = ()=>{
    setloader(loader+15)
  }
  const ramHandel = (data)=>{
    const ramresult = AllApis.filter((apidata)=>{
      return apidata.ram === data;
    })
    setquary(ramresult)
  }
  const StorageHandel = (data)=>{
    const storageresult = AllApis.filter((apiidata)=>{
      return apiidata.storage===data
    })
    setquary(storageresult)

  }
  const BatteryHandel = (data)=>{
    const resultbattery = AllApis.filter((mainData)=>{
      return mainData.battery===data;
    })
    setquary(resultbattery)
  }
  const processHandel = (data)=>{
    const resultprocessor = AllApis.filter((mainData)=>{
      return mainData.processor===data;
    })
    setquary(resultprocessor)
  }
  const ImgCatagory = (data)=>{
    const imgresult = AllApis.filter((mainData)=>{
      return mainData.catagory===data;
    })
    setquary(imgresult)
  }
  const FunColorHandler = ()=>{
    if(props.mode === "white")
    return{
      backgroundColor:'#000000',
      color:'#FCBAAD',
    }
    if(props.responsive===true){
      return{
        display:'none',
      }
    }
  }
const ColorHandler = FunColorHandler()
  return (
    <>
    <div className="main-container-allmobiles" style={ColorHandler}>
      <div className="catagory-option"style={ColorHandler}>
        <select onChange={(e)=>{
          let ramparm = e.target.value;
          setram(ramparm)
          ramHandel(ramparm)
        }} style={ColorHandler} > 
          <option value='1GB RAM' style={ColorHandler} > RA  M 1</option>
          <option    value='2GB RAM'  style={ColorHandler}   > RAM 2</option>
          <option   value='3GB RAM'  style={ColorHandler}  > RAM 3</option>
          <option   value='4GB RAM'  style={ColorHandler} > RAM 4</option>
          <option  value='6GB RAM'  style={ColorHandler}  > RAM 6</option>
          <option  value='8GB RAM'  style={ColorHandler} > RAM 8</option>
          <option  value='12GB RAM' style={ColorHandler}   > RAM 12</option>
        </select>
        
        <select  
        onChange={(event)=>{
         const para=(event.target.value)
         setstorage(para)
         StorageHandel(para)
        }
      } style={ColorHandler}
      >
          <option value='4 GB'  style={ColorHandler}  > STORAGE 4GB</option>
          <option value='8 GB'  style={ColorHandler}  > STORAGE 8GB</option>
          <option value='16 GB' style={ColorHandler}  > STORAGE 16GB</option>
          <option value='32 GB' style={ColorHandler}  > STORAGE 32GB</option>
          <option value='64 GB' style={ColorHandler}  > STORAGE 64GB</option>
          <option value='128GB' style={ColorHandler} >  STORAGE 128GB</option>
          <option value='256GB' style={ColorHandler} > STORAGE 256GB</option>
          <option value='512GB' style={ColorHandler} > STORAGE 512GB</option>
        </select>
        <select onChange={((event)=>{
          let batteryparem = (event.target.value)
          setbattery(batteryparem)
          BatteryHandel(batteryparem)
        })} style={ColorHandler}   > 
          <option value='1000mAh battery' style={ColorHandler}    > 1000mAh battery</option>
          <option value='1200mAh battery' style={ColorHandler}   >1200mAh battery</option>
          <option value='1300mAh battery' style={ColorHandler}   > 1300mAh battery</option>
          <option value='1400mAh battery' style={ColorHandler}   > 1400mAh battery</option>
          <option value='1750mAh battery' style={ColorHandler}   >1750mAh battery</option>
          <option value='1800mAh battery' style={ColorHandler}   > 1800mAh battery</option>
          <option value='2000mAh battery' style={ColorHandler}   >2000mAh battery</option>
          <option value='2300mAh battery' style={ColorHandler}   >2300mAh battery</option>
          <option value='2500mAh battery' style={ColorHandler}   >2500mAh battery</option>
          <option value='3000mAh battery' style={ColorHandler}   >3000mAh battery</option>
        </select>
        <select onChange={((event)=>{
          let batteryparem = (event.target.value)
          setbattery(batteryparem)
          BatteryHandel(batteryparem)
        })}  style={ColorHandler}     > 
          <option value='3100mAh battery' style={ColorHandler}    > Battery 3100mAh</option>
          <option  value='3200mAh battery'   style={ColorHandler}    > Battery 3200mAh</option>
          <option  value='3300mAh'  style={ColorHandler}     >Battery 3300mAh</option>
          <option  value='3500mAh'  style={ColorHandler}     > Battery 3500mAh</option>
          <option  value='3650mAh battery'  style={ColorHandler}     > Battery 3650mAh</option>
          <option  value='3700mAh'  style={ColorHandler}     > Battery 3700mAh</option>
          <option  value='3750mAh battery'  style={ColorHandler}     > Battery 3750mAh</option>
          <option  value='3800mAh'    style={ColorHandler}   >Battery 3800mAh</option>
          <option  value='4000mAh battery'  style={ColorHandler}     >Battery 4000mAh</option>
          <option  value='4200mAh battery'  style={ColorHandler}     >Battery 4200mAh</option>
        </select>
        <select onChange={
          ((event)=>{
          let batteryparem = (event.target.value)
          setbattery(batteryparem)
          BatteryHandel(batteryparem)
        })}  style={ColorHandler}   > 
          <option value='4230mAh battery' style={ColorHandler}    > Battery 4230mAh</option>
          <option value='4500mAh battery' style={ColorHandler}    > Battery 4500mAh</option>
          <option value='5000mAh battery' style={ColorHandler}      >Battery 5000mAh</option>
          <option value='5200mAh battery' style={ColorHandler}      > Battery 5200mAh</option>
          <option value='6000mAh battery' style={ColorHandler}      > Battery 6000mAh</option>
        </select>
        <select onChange={
          ((event)=>{
          let processorparem = (event.target.value)
          setprocessor(processorparem)
          processHandel(processorparem)
        })}  style={ColorHandler}    > 
          <option  value='Quad-core'    style={ColorHandler}      > Quad-core</option>
          <option value='Octa-core'     style={ColorHandler}    > Octa-core</option>
          <option value='Octa-core'     style={ColorHandler}    >  A12 Bionic chip with Neural Engine</option>
          <option value='HiSilicon Kirin 9000'     style={ColorHandler}     >HiSilicon Kirin 9000</option>
          <option value='HiSilicon Kirin 820E'     style={ColorHandler}     >HiSilicon Kirin 820E</option>
          <option value='2.34 GHz quad-core Apple A10 Fusion' style={ColorHandler}   >2.34 GHz quad-core Apple A10 Fusion</option>
        </select>
      </div>
    </div>
    <div className="catagory-images" style={ColorHandler}> 
             <img src="/leftimg/alcatel.png" alt="" onClick={()=>ImgCatagory("alcatel")}  />
             <img src="/leftimg/calme.jpg" alt="" onClick={()=>ImgCatagory("calme")} />
             <img src="/leftimg/htc.png" alt="" onClick={()=>ImgCatagory("htc")} />
             <img src="/leftimg/huawei.jpg" alt=""onClick={()=>ImgCatagory("huawei")} />
             <img src="/leftimg/iphone.jpg" alt=""onClick={()=>ImgCatagory("iphone")} />
             <img src="/leftimg/micromax.png" alt="" onClick={()=>ImgCatagory("micromax")}/>
             <img src="/leftimg/motorola.png" alt=""onClick={()=>ImgCatagory("motorola")} />
             <img src="/leftimg/oppo.png" alt=""onClick={()=>ImgCatagory("oppo")} />
             <img src="/leftimg/vio.jpg" alt=""onClick={()=>ImgCatagory("vivo")} />
    </div>
    <div className="left-img-container" style={ColorHandler}>
        {
          slice.filter((u)=>u.model.toLowerCase().includes(props.searchdata)).map((u)=>{
            return(
              <div className="main-heading">
               <Link to={`/detailes/`+u.model} > <img src={u.url} alt="" /></Link>
                <h3>{u.model}</h3>
                <h5>${u.price}</h5>
              </div>
            )
          })
        }
    </div>
        <div className="moreloaderbtn">
          <button onClick={MoreLoader} style={ColorHandler}>More Images</button>
        </div>
    </>
  )
}
export default Allmobiles;