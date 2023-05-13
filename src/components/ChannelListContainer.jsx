import {ChannelList,useChatContext} from 'stream-chat-react'
import cookies from 'universal-cookie'

import  {ChannelSearch,TeamChannelList,TeamChannelReview}from './'
import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout.png"

const SideBar=()=>(
<div className="channel-list__sidebar">
  <div className="channel-list__sidebar__icon1 ">
    <div className="icon1__inner">
      <img src={HospitalIcon} alt="Hospital" width="30"/>
    </div>
  </div>
  <div className="channel-list__sidebar__icon2">
    <div className="icon1__inner">
      <img src={LogoutIcon} alt="Logout" width="30px"/>
    </div>
  </div>
</div>
)

const CompanyHeader=()=>(
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>Medicos</p>
  </div>
)

function ChannelListContainer() {
  return (
    <>
   
    <SideBar/>
    <div className="channel-list__list__wrapper">
      <CompanyHeader/>
      <ChannelSearch/>
      <ChannelList filters={{}} channelRenderFilterFn={()=>{}} List={(listProps)=>(<TeamChannelList {...listProps} type="team"/>)} />
    </div>
    </>
  )
}

export default ChannelListContainer