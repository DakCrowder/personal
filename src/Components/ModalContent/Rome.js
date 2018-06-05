import React, { Component } from 'react';
import Image from '../Image'

class Rome extends Component {

  render() {
    return (
      <div>
        <p>
          There is no way to fit the thousands of years of history Rome contains into a few days.  It simply cannot be done.
          Rome had by far the largest number of attractions and things to see, I did the major ones but I could easily fill
          another trip with unique experiences.
        </p>
        <Image imageName={'forum'} bucket={'rome'} caption={'Hill overlooking the Roman Forum'}/>
        <p>
          Rome is also quite large.  Public transportation is quite necessary to see the sights, which can be miles apart.  There are
          countless sights and museums, it seems there is one on every street corner.  Favorites included the Roman Forum, Coliseum,
          Pantheon, and the Vatican.  The Forum and Coilseum are right next to each other, perhaps the most famous of what remains
          from the Roman empire.  The inside of the Coliseum in particular is pretty amazing, as you are able to climb to the second level
          and gaze down as a Roman citizen might have during a fight almost 2000 years ago.  Much of the Forum was destroyed and looted at various
          points after the fall of the empire, and many of the landmarks that are better preserved are incorporated into churches.
          The pantheon was a particular favorite due to how well preserved it is.  It is a testament to how massive and grand the rest of the Roman
          monuments might have looked during the prime of the empire.
        </p>
        <Image imageName={'coliseum'} bucket={'rome'} caption={'Interior of the Coliseum'}/>
        <Image imageName={'pantheon'} bucket={'rome'} caption={'Pantheon'}/>
        <p>
          Speaking of churches, St. Peter's Basillica at the Vatican was my favorite sight in Rome.  The Vatican museums are expansive, the
          Sistine Chapel beautiful, but neither hold a candle to St. Peter's in my mind.  The Church is the most impressive I have ever seen
          and probably will see.  One reason it is so grand is due to the vast amount of stone and bronze looted from roman ruins like
          those in the Forum.  I also happened to be in the church during a 5pm mass, which had its pros and cons.  Unfortunately the front
          of the church and area around the altar were blocked off unless you were participating in the service.  However this was more than
          made up for by the surreal experience of hearing priests performing the service and members of the congregation performing songs
          in latin.  It was a surreal experience to witness.
        </p>
        <Image imageName={'peter'} bucket={'rome'} caption={"Altar in St. Peter's Basillica"}/>
        <p>
          The Italian food continues to be excellent in Rome.  A quintessential Roman dish is carbonara, which I enjoyed multiple times.  I had the
          good fortune of hanging out with some others from my Hostel for a couple days, one of which led us to eat in a hip neighborhood
          called Trastevere.  The buffalo mozzarella and prosciutto we shared was food I continue to dream about.  One interesting part of dining
          in Europe is they often refuse to split bills,  sometimes causing problems with people trying to pay by card or with large cash bills.
        </p>
        <Image imageName={'carbonara'} bucket={'rome'} caption={'Delicious Carbonara'}/>
        <p>
          My last 3 days in Rome were actually spent staying in a sleepy little village called Zagarolo about 30 minutes by train
          from downtown.  This was mainly a move to rest and recuperate before the pace of my trip picked up a decent bit.  I pretty much
          lounged about, watched Netflix, and slept all day which was an excellent change of pace.
        </p>
        <Image imageName={'zagarolo'} bucket={'rome'} caption={'Alley overlooking a hill in Zagarolo'}/>
        <p>
          Overall Rome was an incredible place to visit.  At first I was a bit disappointed in its size, its lack
          of consistent beauty in comparison to Florence.  However it really grew on me over the days I spent there.  Its definitely
          not a place I would want to live, but it is a can't miss visit if in Italy.
        </p>
      </div>
    )
  }
}

export default Rome