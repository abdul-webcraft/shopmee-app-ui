import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { MainCaroselData } from '../../components/HomeCarosel/MainCaroselData'

const HomePage = () => {
  return (
    <div>
    <MainCarosel/>
      <div className=' space-y-10 py-20 flex flex-col justify-content-center px-4 lg:px-10'>
       <HomeSectionCarosel data={MainCaroselData} sectionName={"Men's Kurta"}/>
       <HomeSectionCarosel data={MainCaroselData} sectionName={"Ladie's Kurta"}/>
       <HomeSectionCarosel data={MainCaroselData} sectionName={"Men's Kurta"}/>
        </div>
    </div>
  )
}

export default HomePage
