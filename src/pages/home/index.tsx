import { type FC } from 'react'
import Hero from './hero'
import Filter from './filter'
import List from './list'


const Home:FC = () => {
  return (
    <div>
      <Hero/>
      <Filter/>
      <List/>

    </div>
  )
}

export default Home
